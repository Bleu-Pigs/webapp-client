<template>
  <label>
    <input class = "inputBox"
       v-for = "ibn in staticInputs.numberOfInputBoxes"
       maxlength = "1"
       v-bind:key = "ibn"
       v-model="staticInputs.raw[ibn]"
       v-focus="ibn"
       v-on:keyup.number="focusInput($event.target, 'next', ibn)"
       v-on:keyup.backspace="focusInput($event.target, 'previous', ibn)"/>
  </label>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {DirectiveOptions} from "vue";

  import { staticInputModel } from "@/models/authenticateModels/staticInputTypes"
  import {inputsPropagatedModel} from "@/models/authenticateModels/authenticateTypes";

  const focusDirective: DirectiveOptions = {
    inserted: function (el, binding): void {
      if (binding.value === 1) {
        return (<HTMLInputElement>el).focus();
      }
    }
  };

  @Component({
    directives: {
      focus: focusDirective
    }
  })

  export default class StaticInputContainer extends Vue {
    @Prop({default: 5}) readonly computedAuthenticationLength!: number;
    @Prop({required: true}) readonly mutableCallback!: Function;

    private staticInputs: staticInputModel = {
      numberOfInputBoxes: this.computedAuthenticationLength,
      raw: {}
    };

    public mutateInputs(): void{
      let authKey: string = Object.keys(this.staticInputs.raw).join("");
      let isValid: boolean =
          authKey.length === this.computedAuthenticationLength &&
          !isNaN(Number(authKey));

      this.mutableCallback(<inputsPropagatedModel>{
        vueInstance: this,
        rawInputs: this.staticInputs.raw,
        authKey: authKey,
        isValid: isValid,
      })
    }

    private propagateInputData = (): void => {
      this.mutateInputs()
    };

    private focusInput = (
      {nextElementSibling, previousElementSibling}: HTMLInputElement,
      direction = "next",
      ibn: number
    ): void => {
      if (nextElementSibling && direction === "next") {
        (<HTMLInputElement>nextElementSibling).focus();
      } else if (previousElementSibling && direction === "previous"){
        let previousElement = (<HTMLInputElement>previousElementSibling);
        this.staticInputs.raw[ibn - 1] = "";
        previousElement.focus();
      }
      this.propagateInputData()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/config/config.styl"

  .inputBox
    width: 50px
    height: 50px
    margin: 5px
    border: 0
    border-radius: 3px
    background: lighten($colours.blue.bp, 10%)
    font-size: 25px
    color: white
    text-align: center

    &:focus
      outline:none

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      -moz-appearance: textfield
      margin: 0
</style>
