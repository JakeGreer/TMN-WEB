<script>
import Navbar from "components/Navbar.vue";

export default {};
</script>

<template>
  <div id="app">
    <div class="header">
      <p>
        <router-link to="/">Go To Home</router-link>
        <router-link to="/profile">Go To Profile</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "styles/index.scss";

.header {
  background-color: $secondary-color;
  width: 100%;
  height: 100%;
  padding: 5px;
  color: $primary-color;
}
</style>
