<template>
   <div class="container">
    <div class="row">
        <div class="col-3">
            <profile-data></profile-data>
        </div>
        <div class="col-9">
            <div class="row">
                <profile-banner></profile-banner>
            </div>
            <div class="row">
                <elegant-nav></elegant-nav>
            </div>
            <div class="row">
                <Track></Track>
            </div>
        </div> 
    </div>
   </div>
</template>

<script>
import ElegantNav from "components/ElegantNav.vue";
import ProfileBanner from "components/ProfileBanner.vue";
import ProfileData from "components/ProfileData.vue";
import Track from "components/Track.vue";

export default {
  components: {
    ElegantNav,
    ProfileBanner,
    ProfileData,
    Track
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
