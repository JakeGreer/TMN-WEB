<template>
    <div class="profile--left">
        <div class="row">
            <div class="col">
                <a class="btn btn--primary profile--follow-button">
                    Follow
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="profile--img">
                    <img src="~images/drake_icon.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "styles/index.scss";

.profile {
  &--follow-button {
    display: block;
    width: 90%;
    margin: 10px auto;
  }

  &--left {
    background-color: $light-secondary-color;
    height: 93vh;
    text-align: center;
  }

  &--img img {
    height: 250px;
    width: 250px;
    display: block;
    margin: 0 auto;
    padding: 20px;
    border-radius: 200px;
    object-fit: cover;
  }
}
</style>
