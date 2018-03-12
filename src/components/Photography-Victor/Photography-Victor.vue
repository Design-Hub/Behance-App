<template>
    <div class="photography">
        <div class="main-container">
            This is the photography page!
        </div>
    </div>
</template>


<script>
import PhotographylistpageVictor from './Photographer-list-page-Victor'
import PhotographerprofiledetailpageVictor from './Photographer-profile-detail-page-Victor'
import PhotographerprojectdetailpageVictor from './Photographer-project-detail-page-Victor'

export default {
    name: 'photography',
    components:{
        PhotographylistpageVictor,
        PhotographerprofiledetailpageVictor,
        PhotographerprojectdetailpageVictor
    },
    data() {
        return {
        }
    },
    
    methods: {
    },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
