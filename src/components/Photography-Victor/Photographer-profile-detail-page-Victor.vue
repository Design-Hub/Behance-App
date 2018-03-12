<template>
    <div class="photographer-profile-detail-page">
        <div class="main-container">
            <div class="top-nav">
                <div class="top-nav--back-button">
                    <img class="back-button" src="../../images/victor/Back-button.png">
                </div>
            </div>
            <div class="user-details">
                <div class="user-details--intro user-details--block">
                    <div class="top-intro">
                        <div class="user-profile-image"></div>
                        <div class="user-name-company">
                            <h4>Joe Moore</h4>
                            <p>Photographer,</p>
                            <p>Design hub</p>
                        </div>
                    </div>
                    <div class="bottom-intro">
                        <div class="user-website">www.joemoore2018.com</div>
                        <div class="user-focus">Photography, Digital Photography, Retouching</div>
                    </div>
                </div>
                <div class="user-details--about-me user-details--block">
                    <div class="about-me-title">About me</div>
                    <div class="about-me-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</div>
                </div>
                <div class="user-details--stats user-details--block">
                    <div class="user-stats--project-views">
                        <div class="project-views-icon">
                            <img class="project-views-icon--icon icons" src="../../images/victor/Project-views.png">
                        </div>
                        <div class="project-views-title">Project Views</div>
                        <div class="project-views-stats stats">44207</div>
                    </div>
                    <div class="user-stats--appreciations">
                        <div class="appreciations-icon">
                            <img class="appreciations--icon icons" src="../../images/victor/Appreciations.png">
                        </div>
                        <div class="appreciations-title">Apprecidations</div>
                        <div class="appreciations-stats stats">9206</div>
                    </div>
                    <div class="user-stats--followers">
                        <div class="followers-icon">
                            <img class="followers--icon icons" src="../../images/victor/Followers.png">
                        </div>
                        <div class="followers-title">Followers</div>
                        <div class="followers-stats stats">2375</div>
                    </div>
                    <div class="user-stats--following">
                        <div class="following-icon">
                            <img class="following--icon icons" src="../../images/victor/Following.png">
                        </div>
                        <div class="following-title">Following</div>
                        <div class="following-stats stats">109</div>
                    </div>
                    <div class="appreciations"></div>
                    <div class="followers"></div>
                    <div class="following"></div>
                </div>
                <div class="user-details-enternal-links user-details--block">
                    <div class="social-media-links">
                        <div class="social-media-links--facebook"></div>
                        <div class="social-media-links--instagram"></div>
                        <div class="social-media-links--twitter"></div>
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
                        <div class="project-info--title"></div>
                        <div class="project-info--user-name"></div>
                        <div class="project-info--project-stats">
                            <div class="project-views-stats">
                                <div class="project-views-stats--icon"></div>
                                <div class="project-views-stats--results">3695</div>
                            </div>
                            <div class="project-appreciations">
                                <div class="project-appreciations--icon"></div>
                                <div class="project-appreciations--results">539</div>
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
    data() {
        return {
        }
    },

    methods: {

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
}
h4{
    font-size:1.5vw;
    font-weight: bold;
    margin-bottom:15px;
}
p{
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
.user-details--block{
    width:25%;
    border:1px solid #3D3D3F;
}
.top-intro{
    display: flex;
    height:75%;
    width:90%;
    justify-content: center;
    align-items: center;
}
.bottom-intro{
    height:25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8%;
}
.user-profile-image{
    background-image: url("https://mir-s3-cdn-cf.behance.net/user/138/e24bca2575205.5581363aaf6e1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width:138px;
    height:138px;
    margin-right: 65px;
}
.user-name-company{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:59%;
}

.user-website{
    margin-bottom:10px;
}


.social-media-links{
    width:100%;
    height:70%;
}
.link-to-user-behance{
    background-color:#579068;
    border:2px solid #63A476;
    height:31%;
}










/*TEMP*/
.icons{
    width:1vw;
}
</style>
