<template>
  <div class="photographer-list-page">
    <div class="main-container">
      <div class="design-hub-logo">
        <router-link v-bind:to="'/'"><img class="design-hub-logo--logo" src="../../images/logoWhite.png"></router-link>
      </div>
      <div class="photographer-list">
        <router-link v-if="checkPhotographersDatas" v-bind:to="toPhotographerProfileDetailPage + photographer.username" v-for="photographer in photographers" >
          <div class="photographer-list-info">
            <div class="photographer-list-info--user-photo">
              <div class="user-photo">
                <img class="photographer-user-photo" v-bind:src="photographer.images[138]">
              </div>
            </div>
            <div class="photographer-list-info--user-info">
              <div class="user-name">
                <div class="user-name--firstname name">{{photographer.first_name}}</div>
                <div class="user-name--lastname name">{{photographer.last_name}}</div>
              </div>
              <div class="user-stats">
                <div class="user-stats--project-views">
                  <div class="project-views-icon">
                    <img class="project-views-icon--icon icons" src="../../images/victor/Project-views.png">
                  </div>
                  <div class="project-views-title">Project Views</div>
                  <div class="project-views-stats stats">{{photographer.stats.views}}</div>
                </div>
                <div class="user-stats--appreciations">
                  <div class="appreciations-icon">
                    <img class="appreciations--icon icons" src="../../images/victor/Appreciations.png">
                  </div>
                  <div class="appreciations-title">Apprecidations</div>
                  <div class="appreciations-stats stats">{{photographer.stats.appreciations}}</div>
                </div>
                <div class="user-stats--followers">
                  <div class="followers-icon">
                    <img class="followers--icon icons" src="../../images/victor/Followers.png">
                  </div>
                  <div class="followers-title">Followers</div>
                  <div class="followers-stats stats">{{photographer.stats.followers}}</div>
                </div>
                <div class="user-stats--following">
                  <div class="following-icon">
                    <img class="following--icon icons" src="../../images/victor/Following.png">
                  </div>
                  <div class="following-title">Following</div>
                  <div class="following-stats stats">{{photographer.stats.following}}</div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "photographer-list-page",
  data() {
    return {
      toPhotographerProfileDetailPage: "/photographer-profile-detail-page/",
      photographers: []
    };
  },
  methods: {
    getUserDatasFromBehance: function() {
      // this.$http
      //   .jsonp(
      //   "https://api.behance.net/v2/users/almefer?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
      //   )
      //   .then(response => {
      //     this.photographers.push(response.body.user);
      //   });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/SkandaCreations?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/sapolendario?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/CCLORd389?api_key=NVXh1zQue7FflIi24PrdKeTsqT2BWpJI"
        )
        .then(response => {
          this.photographers.push(response.body.user);
        });

      // this.$http
      //   .jsonp(
      //   "https://api.behance.net/v2/users/shivanetua?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
      //   )
      //   .then(response => {
      //     this.photographers.push(response.body.user);
      //   });

    }
  },
  computed: {
    checkPhotographersDatas: function() {
      return this.photographers.length === 3;
    }

  },
  created: function() {
    this.getUserDatasFromBehance();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  font-family: "Open Sans", sans-serif;
}

a {
  width: 30%;
  margin: 0 40px 50px 0;
}

a:hover {
  text-decoration: none;
}

.photographer-list-page {
  width: 100%;
  height: 100vh;
  background: url("../../images/victor/photographyhomepageblur.jpg");
  background-size: cover;
}

.main-container {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.design-hub-logo {
  height: 40vh;
  width: 20%;
}

.design-hub-logo--logo {
  width: 22vw;
  display: block;
  padding: 20px 20px;
}

.photographer-list {
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}

.photographer-list-info {
  background-color: #579068;
  width: 100%;
  height: 150px;
  display: flex;
  cursor: pointer;
  user-select: none;
}

.photographer-list-info--user-photo {
  width: 35%;
}

.user-photo {
  width: 100%;
  height: 150px;
}

.photographer-user-photo {
  width: 100%;
  height: 150px;
}

.photographer-list-info--user-info {
  width: 65%;
  background-color: #579068;
  height: 150px;
}

.user-name {
  width: 85%;
  border-bottom: 2px solid #63a476;
  padding: 8px 8px 2px 8px;
  margin: auto;
  font-size: 1.2vw;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.user-name--firstname {
  margin-right: 12px;
  text-transform: capitalize;
}

.user-name--lastname {
  text-transform: capitalize;
}

.user-stats--project-views,
.user-stats--appreciations,
.user-stats--followers,
.user-stats--following {
  width: 100%;
  display: flex;
}

.user-stats--project-views {
  margin-top: 5px;
  margin-bottom: 2px;
}

.icons {
  width: 0.9vw;
  margin: 3px 10px 10px 23px;
}

.project-views-icon--icon {
  width: 1vw;
}

.appreciations--icon {
  width: 0.8vw;
}

.stats {
  display: flex;
  justify-content: flex-end;
}

.project-views-stats {
  width: 50%;
}

.appreciations-stats {
  width: 48%;
}

.followers-stats {
  width: 58%;
}

.following-stats {
  width: 58%;
}
</style>
