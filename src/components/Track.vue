<template>
    <div class="track--wrapper">
        <div class="row">
            <div class="col-9">
                <div class="track--artist">
                    Lil Wayne                 
                </div>
                <div class="track--title">
                    Believe Me feat. Drake                 
                </div>
                <div class="track--progress">
                    <progress-bar
                    :val="50"
                    :size="35"
                    >
                    </progress-bar>
                </div>
                <div class="track--box track--timer">
                    1:30 / 3:00
                </div>
                <div class="track--box track--likes">
                    Likes 108k
                </div>
                <div class="track--box track--reviews">
                    Reviews
                </div>
            </div>
            <div class="col-3">
                <div class="track--image">
                    <img src="~images/BelieveMe.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProgressBar from "vue-simple-progress";
export default {
  components: {
    ProgressBar
  }
};
</script>
<style lang="scss">
@import "styles/index.scss";

.track {
  &--wrapper {
    margin-top: 15px;
    max-height: 150px;
    width: 100%;
  }

  &--image img {
    max-height: 150px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }

  &--artist {
    position: absolute;
    color: $dark-secondary-color;
    font-size: 24px;
    left: 5%;
    padding: 0 25px 10px 5px;
    margin-top: 8px;
    border-bottom: 2px solid $light-secondary-color;
  }

  &--title {
    position: absolute;
    font-size: 24px;
    right: 5%;
    padding: 8px 0 10px 25px;
    border-top: 2px solid $light-secondary-color;
  }

  &--progress {
    margin-top: 70px;
    padding: 5px;
  }

  &--timer {
    right: 5%;
  }

  &--box {
    position: absolute;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 4px;
    border-radius: 5px;
    margin-top: 4px;
  }

  &--likes {
    left: 5%;
  }

  &--reviews {
    left: 20%;
  }
}

.vue-simple-progress-bar {
  background-color: #61dafb !important;
}
</style>
