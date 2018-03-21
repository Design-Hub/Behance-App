<template>
  <div class="photographer-project-detail-page">
    <div class="main-container" v-if="checkingProjectDetailsAreBack">
      <div class="top-nav">
        <div class="top-nav--back-button">
          <router-link v-bind:to="toPhotographerProfileDetailPage + '/' + photographerIdUserName"><img class="back-button" src="../../images/victor/Back-button.png"></router-link>
        </div>
      </div>
      <div class="user-details">
        <div class="user-details--intro user-details--block">
          <div class="top-intro">
            <div class="user-name-company">
              <h4>{{photographerDetails.first_name}} {{photographerDetails.last_name}}</h4>
            </div>
            <div class="user-profile-image">
              <img v-bind:src="photographerDetails.images[138]">
            </div>
            <div class="user-company">
              <p>Photographer,</p>
              <p>Design hub</p>
            </div>

          </div>
        </div>
        <div class="user-details--project-details user-details--block">
          <div class="project-details">
            <div class="project-name">{{photographerProjectDetails.name}}</div>
            <div class="project-focus">
              <span v-for="currentPhotographerFields in photographerProjectDetails.fields">{{currentPhotographerFields}}, </span>
            </div>
            <div class="project-published-date">Published: {{photographerProjectDetails.published_on | gettingPublishDate }}</div>
            <div class="project-view-project-appreciations">
              <div class="project-view">
                <div class="project-view-icons">
                  <img class="project-views-icon--icon icons" src="../../images/victor/Project-views.png">
                </div>
                <div class="project-view-results results">{{photographerProjectDetails.stats.views}}</div>
              </div>
              <div class="project-appreciations">
                <div class="project-appreciations-icons">
                  <img class="appreciations--icon icons" src="../../images/victor/Appreciations.png">
                </div>
                <div class="project-appreciations-results results">{{photographerProjectDetails.stats.appreciations}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-details--comments user-details--block">
          <div class="comments-block">
            <div class="comments-heading">Comments</div>
            <div class="comments-body" v-for="individualComment in currentProjectComments">
              <div class="comments-body--user-name">
                <div class="comments-name">{{individualComment.user.display_name}} - </div>
                <div class="comments-date">{{individualComment.created_on | gettingCommentDate}} </div>
              </div>
              <div class="comments-body--user-comments">{{individualComment.comment}}</div>
            </div>
          </div>
        </div>
        <div class="user-details-enternal-links user-details--block">
          <div class="social-media-links" v-if="gettingTheUserSocialMedias">
            <div class="social-media-links--links" v-for="individualSocialMediaLinks in currentPhotographerSocailMediaLinks">
              <a v-bind:href="individualSocialMediaLinks.url"><img class="social-links" v-bind:src="require('../../images/victor/' + individualSocialMediaLinks.service_name + '.png')"></a>
            </div>
          </div>
          <div class="link-to-user-behance">
            <a v-bind:href="photographerDetails.url">
              <h5>Link to my Behance!</h5>
            </a>
          </div>
        </div>
      </div>
      <div class="user-projects" v-if="gettingImageThatHasSrc">
        <div class="user-projects-main-container">
          <div class="user-projects--projects" v-for="individualProjectImages in filteredProjectImages">
            <img class="user-projects--projects-image" v-bind:src="individualProjectImages.src">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "photographer-project-detail-page",
  props: ["individualPhotographerUserId", "individualPhotographerProject"],
  data() {
    return {
      toPhotographerProfileDetailPage: "/photographer-profile-detail-page",
      individualPhotographerProjectId: "",
      photographerProjectDetails: {},
      photographerIdUserName: "",
      photographerDetails: {},
      currentPhotographerSocailMediaLinks: [],
      currentProjectComments: {},
      filteredProjectImages: []
    };
  },

  methods: {
    gettingSpecificProjectAndUser: function() {
      this.$http
        .jsonp(
        "http://www.behance.net/v2/projects/" +
        this.individualPhotographerProjectId +
        "?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.photographerProjectDetails = response.body.project;
          // console.log(this.photographerProjectDetails);
          console.log(this.photographerProjectDetails);
        });
      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/" + this.photographerIdUserName + "?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.photographerDetails = response.body.user;
          // console.log(this.photographerDetails);
        });
      this.$http
        .jsonp(
        "https://api.behance.net/v2/projects/" + this.individualPhotographerProjectId + "/comments?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.currentProjectComments = response.body.comments;
          console.log(this.currentProjectComments);
        });
    }
  },
  filters: {
    gettingPublishDate: function(value) {
      if (value) {
        return moment.unix(value).format("LL");
      }
    },
    gettingCommentDate: function(value) {
      if (value) {
        return moment.unix(value).fromNow();
      }
    }
  },
  computed: {
    checkingProjectDetailsAreBack: function() {
      return this.photographerProjectDetails.id;
    },
    gettingTheUserSocialMedias: function() {
      var allUserSocialMedias = this.photographerDetails.social_links;
      var facebookSocialMedia = "Facebook";
      var twitterSocialMedia = "Twitter";
      var instagramSocialMedia = "Instagram";
      for (var i = 0; i < allUserSocialMedias.length; i++) {
        var eachSocialMedias = allUserSocialMedias[i];
        if (eachSocialMedias.service_name === twitterSocialMedia || eachSocialMedias.service_name === facebookSocialMedia || eachSocialMedias.service_name === instagramSocialMedia) {
          this.currentPhotographerSocailMediaLinks.push(eachSocialMedias);
        }
      }
      return this.currentPhotographerSocailMediaLinks;
    },
    gettingImageThatHasSrc: function() {
      var allProjectImage = this.photographerProjectDetails.modules;
      var filteringProjectImages = [];
      for (var i = 0; i < allProjectImage.length; i++) {
        if (allProjectImage[i].src) {
          filteringProjectImages.push(allProjectImage[i]);
        }
      }
      this.filteredProjectImages = filteringProjectImages;
      console.log(this.filteredProjectImages);
      return this.filteredProjectImages;
    }
  },
  created: function() {
    this.individualPhotographerProjectId = this.individualPhotographerProject;
    this.photographerIdUserName = this.individualPhotographerUserId;
    this.gettingSpecificProjectAndUser();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  user-select: none;
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
}

h4 {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 15px;
}

p {
  font-size: 0.9vw;
  font-weight: 600;
}

.photographer-profile-detail-page {
  width: 100%;
}

.main-container {
  width: 100%;
}

.top-nav {
  background-color: #4c4c4d;
  width: 100%;
  height: 80px;
  border: 2px solid #3d3d3f;
  border-left: none;
  border-right: none;
  border-top: none;
}

.top-nav--back-button {
  width: 5%;
}

.back-button {
  width: 3vw;
  display: flex;
  margin: 0 0 0 20px;
  padding-top: 10px;
  cursor: pointer;
}

.user-details {
  width: 100%;
  height: 300px;
  background-color: #4c4c4d;
  display: flex;
  border-bottom: 2px solid #3d3d3f;
}

.user-details--block {
  width: 25%;
  border: 1px solid #3d3d3f;
}

.top-intro {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-profile-image {
  background-image: url("https://mir-s3-cdn-cf.behance.net/user/138/e24bca2575205.5581363aaf6e1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 138px;
  height: 138px;
  margin: 15px 0;
}

.user-name-company {
  display: flex;
}

.project-details {
  width: 80%;
  height: 100%;
  text-align: left;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-name {
  font-size: 1.5vw;
  font-weight: bold;
}

.project-focus {
  font-size: 0.8vw;
  font-weight: bold;
  margin: 20px 0;
}

.project-published-date {
  font-size: 0.7vw;
  font-weight: bold;
}

.project-view-project-appreciations {
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 30px;
}

.icons {
  width: 1.7vw;
  margin-right: 20px;
}

.project-view {
  display: flex;
  margin-right: 100px;
}

.project-appreciations {
  display: flex;
  align-items: center;
}

.results {
  font-size: 0.9vw;
  font-weight: bold;
}

.social-media-links {
  width: 100%;
  height: 70%;
}

.link-to-user-behance {
  background-color: #579068;
  border: 2px solid #63a476;
  height: 31%;
}

.social-links {
  width: 4.5vw;
}

.social-media-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link-to-user-behance h5 {
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}

.user-projects {
  width: 100%;
}

.user-projects-main-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.user-projects--projects {
  width: 45%;
  margin: 50px auto 20px auto;
}

.user-details--comments {
  text-align: left;
  overflow: auto;
}

.comments-block {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 54px auto;
}

.comments-heading {
  font-weight: bold;
  font-size: 1.5vw;
  margin-bottom: 20px;
}

.comments-body--user-name {
  font-size: 0.9vw;
  margin-bottom: 5px;
  display:flex;
}

.comments-body--user-comments {
  margin-bottom: 20px;
}
.comments-name{
  font-weight: bold;
  text-transform: capitalize;
  padding-right:2px;
}
</style>
