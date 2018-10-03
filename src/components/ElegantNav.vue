<template>
    <div class="nav nav--elegant">
        <nav>
            <elegant-link>Music</elegant-link>
            <elegant-link>Playlists</elegant-link>
            <elegant-link>Followers</elegant-link>
            <elegant-link>Following</elegant-link>
        </nav>
    </div>
</template>

<script>
import ElegantLink from "./ElegantLink.vue";
export default {
  components: {
    ElegantLink
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";

.nav {
  &--elegant a:hover {
    width: 10px;
    border-bottom: 3px solid $primary-color;
    color: $primary-color !important;
  }

  .active {
    width: 10px;
    border-bottom: 3px solid $primary-color;
    color: $primary-color !important;
  }
}
</style>
