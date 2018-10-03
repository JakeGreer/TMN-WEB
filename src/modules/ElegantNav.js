const elegantNav = {
  state: {
    prevTab: "Music",
    active: {
      Music: true,
      Playlists: false,
      Followers: false,
      Following: false
    }
  },
  mutations: {
    setTab(state, name) {
      state.active[this.prevTab] = false;
      this.prevTab = name;
      state.active[name] = true;
    }
  }
};
export default elegantNav;
