<template>
    <div class="profile--banner">
        <div class="row">
            <div class="profile--organization">Octobers Very Own</div>
        </div>
        <div class="row">
            <div class="profile--followers">20,194,857 Followers</div>
        </div>
        <img src="~images/drake_banner.jpg">
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "styles/index.scss";

.profile {
  &--banner {
    background-color: $light-secondary-color;
    padding: 20px;
    & img {
      height: 25vh;
      width: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
  }

  &--organization {
    position: absolute;
    right: 5%;
    margin-top: 20px;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 6px;
    border-radius: 5px;
  }

  &--followers {
    position: absolute;
    left: 5%;
    margin-top: 20px;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 6px;
    border-radius: 5px;
  }
}
</style>
