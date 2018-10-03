<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mx-auto login-component">
        <form @submit-prevent="submitLogin">
          <div class="row">
              <div class="col-md-12">
                  <div class="login-panel text-center">
                    <h3>Login</h3>
                  </div> 
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 text-center">
                  <input ref="emailText" type="text" class="input" v-bind:class="[emailSuccess]" name="username" placeholder="Email/Username" @input="validateEmail" autofocus required />
                  <span><i v-bind:class="[emailIcon]"></i></span>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 text-center">
                  <input ref="passwordText" type="password" class="input" v-bind:class="[passwordSuccess]" name="password" placeholder="Password" @input="validatePassword" pattern=".{6,25}" required />
                  <span><i v-bind:class="[passwordIcon]"></i></span>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 text-center">
                  <span class="error" v-if="errorMessage">{{errorMessage}}</span>
                  <button class="btn login-button" :disabled="submitDisabled">Sign In</button>
              </div>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img id="landing-background" src="/public/images/music-background.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      emailSuccess: "",
      passwordSuccess: "",
      emailIcon: "",
      passwordIcon: "",
      submitDisabled: true
    };
  },
  methods: {
    validateEmail: function() {
      if (this.$refs.emailText.checkValidity()) {
        this.emailSuccess = "email-success";
        this.emailIcon = "fa fa-check";
        if (this.$refs.passwordText.checkValidity())
          this.submitDisabled = false;
      } else {
        this.emailSuccess = "email-invalid";
        this.emailIcon = "fa fa-times";
        this.submitDisabled = true;
      }
    },
    validatePassword: function() {
      if (this.$refs.passwordText.checkValidity()) {
        this.passwordSuccess = "password-success";
        this.passwordIcon = "fa fa-check";
        if (this.$refs.emailText.checkValidity()) this.submitDisabled = false;
      } else {
        this.passwordSuccess = "password-invalid";
        this.passwordIcon = "fa fa-times";
        this.submitDisabled = true;
      }
    },
    submitLogin: function() {
      let email = this.$refs.emailText.value.trim();
      let password = this.$refs.passwordText.value.trim();
      this.$emit("loginCredentials", {
        email: email,
        password: password
      });
    }
  },
  mounted() {
    this.$refs.videoElement.playbackRate = 0.2;
  }
};
</script>

<style lang="scss" >
@import "styles/font-awesome/scss/_variables.scss";
@import "styles/index.scss";

#landing-background {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.login {
  &-component {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff;
  }
  &-button {
    background: $primary-color;
    color: black;
    border-radius: 0;
    box-shadow: none;
    border: none;
    font-weight: bold;
    padding: 10px 15px;
    margin-bottom: 25px;
  }
  &-panel {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 25px;
    background: $primary-color;
    margin-left: -15px;
    margin-right: -15px;
  }
}
.error {
  color: "#b60505";
}
</style>
