<template>
  <div class="🔑">
    <div class = "authenticateContainer">
      <div class = "authenticateWrapper">
        <div class = "logoContainer">
          <img alt="Bleu Pigs Logo" src="~@/assets/static/bpLogoWhite.svg"/>
          <h1>Authenticate with <b>Bleu Pigs</b></h1>
        </div>
      </div>
      <div class = "inputContainer">
        <div class = "inputWrapper">
          <staticInputContainer
            :computedAuthenticationLength = "computedAuthenticationLength"
            :mutableCallback = "inputsPropagated"
          />
          <button :disabled = "inputBinder.disabled">
            <template v-if = "inputBinder.isAuthenticating">
              <div class = "authenticatingSpinnerWrapper">
                <div class="authenticatingSpinner"></div>
              </div>
            </template>
            <template v-else>
              Studio Authenticate
            </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import StaticInputContainer from "@/components/auth/injects/staticInputContainer.vue";
  import {inputBinderModel} from "@/models/authenticateModels/staticInputTypes"
  import {
    authenticationContainerModel,
    inputsPropagatedModel
  } from "@/models/authenticateModels/authenticateTypes";

  @Component({
    components: {
      StaticInputContainer
    }
  })

  export default class AuthenticateView extends Vue {
    private computedAuthenticationLength: number = 5;
    private inputBinder: inputBinderModel = {
      disabled: true,
      isAuthenticating: false,
      hasPreviouslyTriedAuthentication: false
    };
    private authenticationContainer: authenticationContainerModel = {
      authKey: null,
      responseData: {}
    };

    private inputsPropagated = (
        propagatedInputData: inputsPropagatedModel
    ): void => {
      if (propagatedInputData.isValid){
        this.inputBinder.disabled = false;
        /**
         * To provide a seamless experience, the system should try and authenticate the users
         * credentials as soon as their input is of length n. If they initially provide an
         * invalid code, we should not automatically try and authenticate as that may aggravate
         * the process.
         */
        if (!this.inputBinder.hasPreviouslyTriedAuthentication){
          this.inputBinder.isAuthenticating = true;
          this.inputBinder.hasPreviouslyTriedAuthentication = true;
        }

        this.authenticationContainer.authKey = propagatedInputData.authKey;
      }
    }
  };
</script>

<style lang="stylus">
  @import "~@/assets/config/config.styl"

  @keyframes authenticateSpin
    0%
      transform: rotate(0deg)

    100%
      transform: rotate(360deg)

  .🔑
    background: $colours.grey.g10
    height: 100vh

    .authenticateContainer
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: 0.75fr 1fr
      grid-gap: 50px
      height: 100%
      width: 100%

      .authenticateWrapper
        display: flex
        justify-content: center
        align-items: flex-end

        .logoContainer
          display: flex
          justify-content: center
          align-items: center
          flex-direction: column

          img
            width: 100px

          h1
            color: white
            font-size: 20px
            font-weight: 600
            font-family: 'Poppins', sans-serif
            padding-top: 25px

            b
              font-weight: 600

      .inputContainer
        display: flex
        justify-content: center
        align-items: flex-start

        .inputWrapper
          display: flex
          align-items: center
          justify-content: center
          flex-direction: column

          button
            width: 290px
            height: 50px
            margin: 25px
            outline: 0
            border: 0
            border-radius: 3px
            font: 'Open Sans', sans-serif
            font-size: 17px
            font-weight: 600
            background: $colours.blue.bp
            color: $colours.grey.g1
            transition: background 200ms cubic-bezier(0, .8, .13, 1),
                        color 150ms cubic-bezier(0, .12, .8, 1.3)

            &:hover
              background: darken($colours.blue.bp, 5%)
              cursor: pointer

            .authenticatingSpinnerWrapper
              width: 100%
              height: 100%
              display: flex
              justify-content: center
              align-items: center

              .authenticatingSpinner
                display: inline-block
                border: 3px solid rgba(0, 0, 0, 0.1)
                border-left-color: $colours.grey.g1
                border-radius: 50%
                width: 20px
                height: 20px
                animation: authenticateSpin 1.2s linear infinite;

          button[disabled]
            background: lighten(@background, 3%)
            color: lighten(@background, 20%)
            transition: background 200ms cubic-bezier(0, .8, .13, 1),
                        color 150ms cubic-bezier(0, .12, .8, 1.3)

            &:hover
              cursor: auto
</style>
