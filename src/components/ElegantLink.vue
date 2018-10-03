<template>
    <a v-bind:class="{ active: isActive }" @click="setActive"><slot></slot></a>
</template>
<script>
export default {
  data() {
    return {
      text: this.$slots.default[0].text
    };
  },
  methods: {
    setActive() {
      this.$store.commit("setTab", this.text);
    }
  },
  computed: {
    isActive() {
      return this.$store.state.elegantNav.active[this.text];
    }
  }
};
</script>
