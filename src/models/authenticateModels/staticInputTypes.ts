export interface rawInterface {
  [key: number]: string
}

export interface staticInputModel {
  numberOfInputBoxes: number,
  raw: rawInterface
}

export interface inputBinderModel {
  disabled: boolean
  isAuthenticating: boolean,
  hasPreviouslyTriedAuthentication: boolean
}
