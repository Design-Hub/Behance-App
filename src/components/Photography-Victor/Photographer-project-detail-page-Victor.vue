<template>
    <div class="photographer-project-detail-page">
        <div class="main-container">
            <div class="top-nav">
                <div class="top-nav--back-button">
                    <router-link v-bind:to="toPhotographerList"><img class="back-button" src="../../images/victor/Back-button.png"></router-link>
                </div>
            </div>
            <div class="user-details">
                <div class="user-details--intro user-details--block">
                    <div class="top-intro">
                        <div class="user-name-company">
                            <h4>Joe Moore</h4>
                        </div>
                        <div class="user-profile-image"></div>
                        <div class="user-company">
                            <p>Photographer,</p>
                            <p>Design hub</p>
                        </div>

                    </div>
                </div>
                <div class="user-details--project-details user-details--block">
                    <div class="project-details">
                        <div class="project-name">The polaris Project</div>
                        <div class="project-focus">Photography, Digital Photography, Retouching</div>
                        <div class="project-published-date">March 12, 2018</div>
                        <div class="project-view-project-appreciations">
                            <div class="project-view">
                                <div class="project-view-icons">
                                    <img class="project-views-icon--icon icons" src="../../images/victor/Project-views.png">
                                </div>
                                <div class="project-view-results results">3000</div>
                            </div>
                            <div class="project-appreciations">
                                <div class="project-appreciations-icons">
                                    <img class="appreciations--icon icons" src="../../images/victor/Appreciations.png">
                                </div>
                                <div class="project-appreciations-results results">700</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-details--stats user-details--block">
                    
                </div>
                <div class="user-details-enternal-links user-details--block">
                    <div class="social-media-links">
                        <div class="social-media-links--facebook">
                            <img class="facebook social-links" src="../../images/victor/facebook.png">
                        </div>
                        <div class="social-media-links--instagram">
                            <img class="twitter social-links" src="../../images/victor/twitter.png">
                        </div>
                        <div class="social-media-links--twitter">
                            <img class="instagram social-links" src="../../images/victor/instagram.png">
                        </div>
                    </div>
                    <div class="link-to-user-behance">
                        <h5>Link to my Behance!</h5>
                    </div>
                </div>
            </div>
            <div class="user-projects">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "photographer-project-detail-page",
  data() {
    return {
      toPhotographerList: "/photographer-list-page"
    };
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  user-select: none;
  font-family: "Open Sans", sans-serif;
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

.project-details{
    width:80%;
    height:100%;
    text-align: left;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-name{
    font-size:1.5vw;
    font-weight: bold;
}

.project-focus{
    font-size:0.8vw;
    font-weight: bold;
    margin:20px 0;
}

.project-published-date{
    font-size:0.7vw;
    font-weight: bold;
}

.project-view-project-appreciations{
    display: flex;
    width:100%;
    align-items: center;
    margin-top:30px;

}

.icons{
    width:1.7vw;
    margin-right: 20px;
}
.project-view{
    display: flex;
    margin-right:100px;
}
.project-appreciations{
    display:flex;
    align-items: center;
    
}

.results{
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
</style>
