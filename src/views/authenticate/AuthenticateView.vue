<template>
  <div class = "🔑" ref="el">
    <div class = "sidebarPrimary">
      <template v-if = "immutableData.displaySidebar">
        <div class = "topNav">
          <div class = "childNavLogoWrapper">
            <img class = "bpLogo" src = "@/assets/static/icons/bpLogoAndTextWhite.svg"/>
          </div>
        </div>
        <div class = "sidebarWrapper">
          <div class = "container">
            <h1>Welcome to Bleu Pigs, the next gen Script Builder</h1>
            <h2>
              Bleu Pigs SB is a modern Script Builder, reinvented for efficiency and robustness
            </h2>
            <div class = "illustrationContainer">
              <img src = "@/assets/static/illustrations/undraw_hacker_mindset_gjwq.svg"/>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class = "mainSection">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import { namespace } from 'vuex-class'
  import animate from "animejs";

  const animationStore = namespace('AnimationStoreAuth');

  @Component
  export default class AuthenticateView extends Vue {

    private static transitionPrimarySidebarMS: number = 400;

    private immutableData = {
      displaySidebar: true,
      gridTemplates: {
        stateFalse: ["0px 1fr", "600px 1fr"],
        stateTrue: ["600px 1fr", "0px 1fr"]
      },
      colourTemplates: {
        white: "#ffffff",
        blue: "#4169E0"
      },
      keyframeClassTemplates: {
        clipAway: "clipAway",
        clipIn: "clipIn"
      }
    };

    @animationStore.State public displaySidebar!: boolean;

    @Watch('displaySidebar')
    private displaySidebarObserver(state: boolean, oldState: boolean){
      if (state === oldState) return;

      let el = <HTMLElement> this.$refs.el;
      let sidebar = <HTMLElement> el.getElementsByClassName("sidebarPrimary")[0];

      sidebar.classList.remove(
        this.immutableData.keyframeClassTemplates.clipIn,
        this.immutableData.keyframeClassTemplates.clipAway
      );

      this.setDisplay({
        state: state,
        elements: {
          el: el,
          sidebar: sidebar
        },
        grid: state ?
          this.immutableData.gridTemplates.stateFalse : this.immutableData.gridTemplates.stateTrue,
        background: state ?
          this.immutableData.colourTemplates.blue : this.immutableData.colourTemplates.white
      })
    }

    private setDisplay(computedState: any){
      if (!computedState.state){
        computedState.elements.sidebar.classList.add(
          this.immutableData.keyframeClassTemplates.clipAway
        );
      }

      setTimeout(
        () => {
          if (!computedState.state){
            this.immutableData.displaySidebar = computedState.state;
            computedState.elements.sidebar.style.background = computedState.background;
          }

          animate({
            targets: computedState.elements.el,
            gridTemplateColumns: computedState.grid,
            easing: "cubicBezier(.5, .05, .1, .3)",
            duration: 300,
            complete: () => {
              if (computedState.state){
                this.immutableData.displaySidebar = computedState.state;
                computedState.elements.sidebar.style.background =
                  this.immutableData.colourTemplates.blue;
                computedState.elements.sidebar.classList.add(
                  this.immutableData.keyframeClassTemplates.clipIn
                );
              }
            }
          })
        },

        AuthenticateView.transitionPrimarySidebarMS
      )
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/config/config.styl"

  @keyframes clipAway
    0%
      clip-path: ellipse(100vw 120vh at 0% 0%)

    100%
      clip-path: ellipse(0% 0% at 0% 0%)

  @keyframes clipIn
    0%
      clip-path: ellipse(0% 0% at 0% 0%)

    100%
      clip-path: ellipse(100vw 120vh at 0% 0%)

  .🔑
    height: 100vh
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: 600px 1fr

    .clipAway
      animation-name: clipAway
      animation-duration: 400ms
      -moz-animation-timing-function: cubic-bezier(0, .8, .13, 1)

    .clipIn
      animation-name: clipIn
      animation-duration: 400ms
      -moz-animation-timing-function: cubic-bezier(0, .8, .13, 1)

    .sidebarPrimary
      background: $colours.blue.bp
      clip-path: ellipse(100vw 120vh at 0% 0%)

      .topNav
        padding-top: 50px
        padding-left: 50px

        .childNavLogoWrapper
          width: 60%
          height: 60%
          display: flex
          justify-content: center
          align-items: center

          .bpLogo
            width: 100%

      .sidebarWrapper
        display: flex
        justify-content: center
        align-items: center

        .container
          padding-top: 25px
          padding-left: 50px
          width: 100%
          height: 100%
          display: flex
          flex-direction: column

          .illustrationContainer
            padding-top: 40px
            width: 94%

            img
              width: 85%

          h1
            font-weight: 500
            font-size: 40px
            font-family: 'Poppins', sans-serif
            color: $colours.grey.g1

          h2
            font-weight: 500
            font-size: 25px
            font-family: 'Poppins', sans-serif
            color: $colours.grey.g1
            opacity: 0.5
</style>
