<template>
    <div class="photographer-profile-detail-page">
        <div class="main-container" v-if="checkCurrentPhotographerDatasAndProjects">
            <div class="top-nav">
                <div class="top-nav--back-button">
                    <router-link v-bind:to="toPhotographerList"><img class="back-button" src="../../images/victor/Back-button.png"></router-link>
                </div>
            </div>
            <div class="user-details">
                <div class="user-details--intro user-details--block">
                    <div class="top-intro">
                        <div class="user-profile-image">
                            <img class="user-image" v-bind:src="currentPhotographerDatasAndProjects.userDatas.images[276]">
                        </div>
                        <div class="user-name-company">
                            <h4>{{currentPhotographerDatasAndProjects.userDatas.first_name}} {{currentPhotographerDatasAndProjects.userDatas.last_name}}</h4>
                            <p>{{currentPhotographerDatasAndProjects.userDatas.occupation}},</p>
                            <p>Design hub</p>
                        </div>
                    </div>
                    <div class="bottom-intro">
                        <div class="user-website">{{currentPhotographerDatasAndProjects.userDatas.website}}</div>
                        <span class="user-focus" v-for="currentPhotographerFields in currentPhotographerDatasAndProjects.userDatas.fields">{{currentPhotographerFields}},</span>
                    </div>
                </div>
                <div class="user-details--about-me user-details--block">
                    <div class="about-me-title">About me</div>
                    <div class="about-me-paragraph">{{currentPhotographerDatasAndProjects.userDatas.sections["Mission Statement"]}}</div>
                </div>
                <div class="user-details--stats user-details--block">
                    <div class="user-stats--project-views user-stats">
                        <div class="project-views-icon">
                            <img class="project-views-icon--icon icons" src="../../images/victor/Project-views.png">
                        </div>
                        <div class="project-views-title titles">Project Views</div>
                        <div class="project-views-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.views}}</div>
                    </div>
                    <div class="user-stats--appreciations user-stats">
                        <div class="appreciations-icon">
                            <img class="appreciations--icon icons" src="../../images/victor/Appreciations.png">
                        </div>
                        <div class="appreciations-title titles">Appreciations</div>
                        <div class="appreciations-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.appreciations}}</div>
                    </div>
                    <div class="user-stats--followers user-stats">
                        <div class="followers-icon">
                            <img class="followers--icon icons" src="../../images/victor/Followers.png">
                        </div>
                        <div class="followers-title titles">Followers</div>
                        <div class="followers-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.followers}}</div>
                    </div>
                    <div class="user-stats--following user-stats">
                        <div class="following-icon">
                            <img class="following--icon icons" src="../../images/victor/Following.png">
                        </div>
                        <div class="following-title titles">Following</div>
                        <div class="following-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.following}}</div>
                    </div>
                </div>
                <div class="user-details-enternal-links user-details--block">
                    <div class="social-media-links" v-if="gettingSpecificSocialMedias" >
                        <div class="social-media-links--facebook" v-for="individualSocialMediaLinks in currentPhotographerSocailMediaLinks">
                            <!--<img class="social-links" v-bind:src=require("'../../images/victor/'+ individualSocialMediaLinks.service_name +'.png'")>-->
                            <img class="social-links" v-bind:src="require('../../images/victor/'+ individualSocialMediaLinks.service_name +'.png')">
                        </div>
                    </div>
                    <div class="link-to-user-behance">
                        <h5>Link to my Behance!</h5>
                    </div>
                </div>
            </div>
            <div class="user-projects">
                <div class="user-projects--project">
                    <div class="project-image"></div>
                    <div class="project-info">
                        <div class="project-info--title">Star Wars</div>
                        <div class="project-info--user-name">Joe Moore</div>
                        <div class="up-project-info--project-stats">
                            <div class="up-project-views-stats">
                                <div class="project-views-stats--icon">
                                    <img class="project-views-stats--icon up-icons" src="../../images/victor/Project-views.png">
                                </div>
                                <div class="project-views-stats--results results">3695</div>
                            </div>
                            <div class="up-project-appreciations">
                                <div class="project-appreciations--icon">
                                    <img class="appreciations--stats up-icons" src="../../images/victor/Appreciations.png">
                                </div>
                                <div class="project-appreciations--results results">539</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'photographer-profile-detail-page',
    props: ['individualPhotographerUsername'],
    data() {
        return {
            toPhotographerList: "/photographer-list-page",
            currentPhotographerDatasAndProjects: {
                userDatas: {},
                userProjects: {}
            },
            currentPhotographerUsername: "",
            currentPhotographerSocailMediaLinks:[]
        }
    },

    methods: {
        gettingTheCurrentPhotographerdata: function() {
            this.$http
                .jsonp(
                "https://api.behance.net/v2/users/" + this.currentPhotographerUsername + "?api_key=GBlbye0aN2yqIDb3g6MJbYpeL6mHOxN9"
                )
                .then(response => {
                    this.currentPhotographerDatasAndProjects.userDatas = response.body.user;
                    console.log(this.currentPhotographerDatasAndProjects);
                });
        },
        gettingTheCurrentPhotographerproject: function() {
            this.$http
                .jsonp(
                "https://api.behance.net/v2/users/" + this.currentPhotographerUsername + "/projects?api_key=GBlbye0aN2yqIDb3g6MJbYpeL6mHOxN9"
                )
                .then(response => {
                    this.currentPhotographerDatasAndProjects.userProjects = response.body.projects;
                });
        },


    },
    computed: {
        checkCurrentPhotographerDatasAndProjects: function() {
            return this.currentPhotographerDatasAndProjects.userDatas.id && this.currentPhotographerDatasAndProjects.userProjects.length > -1;
            this.gettingSpecificSocialMedias();
        },
        gettingSpecificSocialMedias: function() {
            var allUserSocialMedias = this.currentPhotographerDatasAndProjects.userDatas.social_links;
            var facebookSocialMedia = "Facebook";
            var twitterSocialMedia = "Twitter";
            var instagramSocialMedia = "Instagram";
            for (var i = 0; i < allUserSocialMedias.length; i++) {
                var eachSocialMedias = allUserSocialMedias[i];
                console.log(eachSocialMedias.service_name);
                if(eachSocialMedias.service_name === twitterSocialMedia || eachSocialMedias.service_name === facebookSocialMedia || eachSocialMedias.service_name === instagramSocialMedia){
                    console.log(eachSocialMedias);
                    this.currentPhotographerSocailMediaLinks.push(eachSocialMedias);
                }
            }
            console.log(this.currentPhotographerSocailMediaLinks);
            return this.currentPhotographerSocailMediaLinks;
        }
    },
    created: function() {
        this.currentPhotographerUsername = this.individualPhotographerUsername;
        console.log(this.currentPhotographerUsername);
        this.gettingTheCurrentPhotographerdata();
        this.gettingTheCurrentPhotographerproject();

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    color: #e5e5e5;
    user-select: none;
    font-family: 'Open Sans', sans-serif;
}

h4 {
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: capitalize;
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
    background-color: #4C4C4D;
    width: 100%;
    height: 80px;
    border: 2px solid #3D3D3F;
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
    background-color: #4C4C4D;
    display: flex;
    border-bottom: 2px solid #3D3D3F;
}

.user-details--block {
    width: 25%;
    border: 1px solid #3D3D3F;
}

.top-intro {
    display: flex;
    height: 75%;
    width: 90%;
    justify-content: center;
    align-items: center;
}

.bottom-intro {
    height: 25%;
    text-align: left;
    margin-left: 8%;
}

.user-profile-image {
    width: 138px;
    height: 138px;
    margin-right: 65px;
}

.user-name-company {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 59%;
}

.user-website {
    margin-bottom: 10px;
}


.social-media-links {
    width: 100%;
    height: 70%;
}

.link-to-user-behance {
    background-color: #579068;
    border: 2px solid #63A476;
    height: 31%;
}

.about-me-title {
    font-size: 1.3vw;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 5px;
}

.about-me-paragraph {
    font-size: 0.8vw;
    text-align: left;
    padding: 0 20px;
}

.user-stats {
    display: flex;
    font-size: 1vw;
    margin-bottom: 40px;
    width: 100%;
    margin-top: 28px;
}

.icons {
    width: 1.5vw;
    margin-left: 20px;
}

.titles {
    font-weight: bold;
    padding-left: 20px;
}

.stats {
    display: flex;
    justify-content: flex-end;
}

.project-views-stats {
    width: 58%
}

.appreciations-stats {
    width: 57%;
}

.followers-stats {
    width: 64%;
}

.following-stats {
    width: 64%;
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

.user-projects--project {
    width: 18%;
    height: 400px;
    cursor: pointer;
}

.project-image {
    height: 65%;
    width: 100%;
    background: url("http://www.fubiz.net/wp-content/uploads/2016/05/starwarstoy-0-900x599.jpg");
    background-size: cover;
}

.project-info {
    height: 35%;
    background-color: #579068;
}

.project-info--title {
    font-weight: bold;
    font-size: 1.6vw;
    padding-top: 10px;
}

.project-info--user-name {
    font-size: 1vw;
    margin-top: 10px;
}

.up-project-info--project-stats {
    display: flex;
    heigth: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
}

.up-project-views-stats {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
}

.up-project-appreciations {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.up-icons {
    margin-right: 20px;
    width: 1.2vw;
}

.results {
    font-weight: bold;
    font-size: 0.7vw;
}
</style>
