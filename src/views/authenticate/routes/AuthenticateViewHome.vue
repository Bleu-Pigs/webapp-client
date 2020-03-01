<template>
  <div class="AuthenticateViewHome" ref="el">
    <div class="topNav">
      <div class="helpLink">
        <h1>Need help? <b>Join us on Discord</b></h1>
      </div>
    </div>
    <div class="childWrapper">
      <div class="container">
        <div class="header">
          <h1 class="headerComponent utility-opacity-zero">Bleu Pigs Authentication</h1>
          <h2 class="headerComponent utility-opacity-zero">
            To authenticate with Bleu Pigs you must verify your Roblox and Discord accounts. By
            verifying your Roblox account you will gain access to the studio toolset which allows
            you
            to upload scripts and modules directly to the Bleu Pigs server for usage in-game.
          </h2>
        </div>
        <div class="body">
          <div class="card utility-opacity-zero" @click="navigate">
            <div class="iconContainer">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="usersJoin">
                  <g>
                    <path fill="currentColor"
                          d="M96 224a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64zm480 32h-64a63.81 63.81 0 0 0-45.1 18.6A146.27 146.27 0 0 1 542 384h66a32 32 0 0 0 32-32v-32a64.06 64.06 0 0 0-64-64zm-512 0a64.06 64.06 0 0 0-64 64v32a32 32 0 0 0 32 32h65.9a146.64 146.64 0 0 1 75.2-109.4A63.81 63.81 0 0 0 128 256zm480-32a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64z"
                          class="secondary"></path>
                    <path fill="currentColor"
                          d="M396.8 288h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 128 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 396.8 288zM320 256a112 112 0 1 0-112-112 111.94 111.94 0 0 0 112 112z"
                          class="primary"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div class="mainContainer">
              <div class="cardContainerBody">
                <div class="cardText">
                  <h1>First time authentication</h1>
                  <h2>Authenticating with BP for the first time</h2>
                </div>
                <div class="cardArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="nextArrow">
                    <g>
                      <path fill="currentColor"
                            d="M24 215h286.4l41.6 41-41.59 41H24c-13.3 0-24-11-24-24.63v-32.82A24.22 24.22 0 0 1 24 215z"
                            class="secondary"></path>
                      <path fill="currentColor"
                            d="M246.31 38.52c.24.23.48.47.71.71L441 238.56a25 25 0 0 1 0 34.78L247 472.77a23.38 23.38 0 0 1-33.11.7c-.24-.22-.47-.46-.7-.7L191.06 450a25.13 25.13 0 0 1 .4-35.18L352.19 256 191.46 97.2a24.94 24.94 0 0 1-.4-35.18l22.15-22.78a23.38 23.38 0 0 1 33.1-.72z"
                            class="primary"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="card utility-opacity-zero">
            <div class="iconContainer">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="userRejoin">
                  <g>
                    <path fill="currentColor"
                          d="M512 160v192a96 96 0 0 1-96 96h-84a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h84a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32h-84a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h84a96 96 0 0 1 96 96z"
                          class="secondary"></path>
                    <path fill="currentColor"
                          d="M369 273L201 441c-15 15-41 4.5-41-17v-96H24a23.94 23.94 0 0 1-24-24v-96a23.94 23.94 0 0 1 24-24h136V88c0-21.5 26-32 41-17l168 168a24.2 24.2 0 0 1 0 34z"
                          class="primary"></path>
                  </g>
                </svg>
              </div>
            </div>

            <div class="mainContainer">
              <div class="cardContainerBody">
                <div class="cardText">
                  <h1>Studio re-authentication</h1>
                  <h2>Authenticating another instance of Studio</h2>
                </div>
                <div class="cardArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="nextArrow">
                    <g>
                      <path fill="currentColor"
                            d="M24 215h286.4l41.6 41-41.59 41H24c-13.3 0-24-11-24-24.63v-32.82A24.22 24.22 0 0 1 24 215z"
                            class="secondary"></path>
                      <path fill="currentColor"
                            d="M246.31 38.52c.24.23.48.47.71.71L441 238.56a25 25 0 0 1 0 34.78L247 472.77a23.38 23.38 0 0 1-33.11.7c-.24-.22-.47-.46-.7-.7L191.06 450a25.13 25.13 0 0 1 .4-35.18L352.19 256 191.46 97.2a24.94 24.94 0 0 1-.4-35.18l22.15-22.78a23.38 23.38 0 0 1 33.1-.72z"
                            class="primary"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import router from "@/router";
  import animate from "animejs";
  import {namespace} from "vuex-class";
  import AuthenticateView from "@/views/authenticate/AuthenticateView.vue";

  const animationStore = namespace('AnimationStoreAuth');

  Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
  ]);

  @Component
  export default class AuthenticateViewHome extends Vue {

    private static transitionPrimarySidebarMS: number = 400;

    mounted() {
      setTimeout(this.routeEnterGuard, 50);
    }

    private navigate = (): void => {
      router.push("/1");
    };

    @animationStore.Action setState!: (state: boolean) => void;

    private elementCollection = () => {
      let el = <HTMLElement>this.$refs.el;
      return {
        helpLink: el.querySelectorAll(".topNav .helpLink h1"),
        headers: el.querySelectorAll(".childWrapper .container .header .headerComponent"),
        cards: el.querySelectorAll(".childWrapper .body .card")
      };
    };

    public routeEnterGuard = (): void => {
      let elementCollection = this.elementCollection();
      let animationTimeline = animate.timeline()
        .add({
          targets: [elementCollection.headers],
          opacity: [0, 1],
          translateY: ["-5px", "0px"],
          easing: "cubicBezier(.5, .05, .1, .3)",
          duration: 200
        })
        .add({
          targets: elementCollection.cards,
          opacity: [0, 1],
          translateY: ["5px", "0px"],
          easing: "cubicBezier(.5, .05, .1, .3)",
          duration: 200
        }, 0);

      this.setState(true);
      animationTimeline.play();
    };

    public routeLeaveGuard = (callback: Function): void => {
      console.log("Setting to false!");
      this.setState(false);

      let elementCollection = this.elementCollection();
      let animationTimeline = animate.timeline()
        .add({
          targets: [elementCollection.headers],
          opacity: 0,
          translateY: "-5px",
          easing: "cubicBezier(.5, .05, .1, .3)",
          duration: 200
        })
        .add({
          targets: elementCollection.cards,
          opacity: 0,
          translateY: "5px",
          easing: "cubicBezier(.5, .05, .1, .3)",
          duration: 200,
          complete: () => callback()
        }, 0);

      animationTimeline.play()
    };

    beforeRouteLeave(to: Vue, from: Vue, next: Function) {
      this.setState(false);
      setTimeout(
        () => this.routeLeaveGuard(next),
        AuthenticateViewHome.transitionPrimarySidebarMS
      );
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/config/config.styl"

  .utility-opacity-zero
    opacity: 0

  .AuthenticateViewHome
    height: 100vh
    background: #F5F6F9
    display: grid
    grid-template-rows: 100px 1fr
    grid-template-columns: 1fr

    .topNav
      display: flex
      justify-content flex-end
      align-items: center
      width: 100%

      .helpLink
        height: 100%
        margin-right: 60px
        display: flex
        align-items: center

        h1
          font-weight: 500
          font-size: 16px
          font-family: 'Poppins', sans-serif
          color: lighten(#6F727E, 40%)

          b
            color: $colours.blue.bp

    .childWrapper
      display: flex
      justify-content: center
      align-items: center

      .container
        width: 65%
        height: 80%
        display: flex
        flex-direction: column

        .header
          width: 100%

          h1
            font-weight: 500
            font-size: 30px
            font-family: 'Poppins', sans-serif
            color: #6F727E

          h2
            font-weight: 500
            font-size: 20px
            font-family: 'Poppins', sans-serif
            color: #A4A5A8

        .body
          display: flex
          flex-direction: column
          margin-top: 50px

          .card
            height: 140px
            width: 100%
            background: #ffffff
            border-radius: 15px
            display: grid
            grid-template-columns: 130px 1fr
            grid-template-rows: 1fr
            box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1);
            border: 1.4px solid rgba($colours.blue.bp, 0)
            transition: background 400ms cubic-bezier(0, .8, .13, 1)

            &:hover
              background: #EDF4FF
              border: 1.4px solid rgba($colours.blue.bp, 0.75)
              cursor: pointer

              .mainContainer
                .cardContainerBody
                  .cardArrow
                    .nextArrow
                      transform: translateX(0px)
                      opacity: 1

                  .cardText
                    h1
                      color: #6F727E

                    h2
                      color: lighten(#6F727E, 10%)

              .iconContainer
                .icon
                  border: 1.4px solid rgba($colours.blue.bp, 0)
                  background: $colours.blue.bp
                  box-shadow: 0 10px 18px rgba($colours.blue.bp, 0.1), 0 5px 5px rgba($colours.blue.bp, 0.1);

                  .usersJoin
                  .userRejoin
                    .primary
                      fill: $colours.grey.g0

                    .secondary
                      fill: $colours.grey.g0
                      opacity: 0.5

            &:nth-child(n+2)
              margin-top: 40px

            .mainContainer
              display: flex
              align-items: center

              .cardContainerBody
                height: 50%
                width: 100%
                margin-right: 30px
                display: grid
                grid-template-columns: 1fr 70px

                .cardArrow
                  display: flex
                  align-items: center
                  justify-content: center

                  .nextArrow
                    width: 20px
                    opacity: 0
                    transform: translateX(-10px)
                    transition: opacity 400ms cubic-bezier(0, .8, .13, 1),
                      transform 400ms cubic-bezier(0, .8, .13, 1)

                    .primary
                      fill: $colours.blue.bp
                      transition: fill 400ms cubic-bezier(0, .8, .13, 1)

                    .secondary
                      fill: $colours.blue.bp
                      transition: fill 400ms cubic-bezier(0, .8, .13, 1)

                .cardText
                  h2
                    font-family: 'Poppins', sans-serif
                    font-weight: 400
                    font-size: 16px
                    color: lighten(#6F727E, 40%)
                    margin-top: 5px
                    transition: color 400ms cubic-bezier(0, .8, .13, 1)

                  h1
                    font-weight: 500
                    font-size: 20px
                    font-family: 'Poppins', sans-serif
                    color: lighten(#6F727E, 30%)
                    text-transform: uppercase
                    margin: 0
                    transition: color 400ms cubic-bezier(0, .8, .13, 1)

            .iconContainer
              display: flex
              justify-content: center
              align-items: center

              .icon
                border-radius: 10px
                border: 1.4px solid rgba($colours.blue.bp, 0.4)
                width: 50%
                height: 50%
                display: flex
                justify-content: center
                align-items: center
                transition: background 400ms cubic-bezier(0, .8, .13, 1)

                .usersJoin
                .userRejoin
                  width: 28px
                  transform: box-shadow 400ms cubic-bezier(0, .8, .13, 1)

                  .primary
                    fill: $colours.blue.bp
                    transition: fill 400ms cubic-bezier(0, .8, .13, 1)

                  .secondary
                    fill: $colours.blue.bp
                    opacity: 0.5
                    transition: fill 400ms cubic-bezier(0, .8, .13, 1)

</style>
