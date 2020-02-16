import StaticInputContainer from "@/components/auth/injects/staticInputContainer.vue";
import {rawInterface} from "@/models/authenticateModels/staticInputTypes";

export interface inputsPropagatedModel {
  vueInstance: StaticInputContainer,
  rawInputs: rawInterface,
  authKey: string,
  isValid: boolean
}

export interface authenticationContainerModel {
  authKey: null | string,
  responseData: Object
}
