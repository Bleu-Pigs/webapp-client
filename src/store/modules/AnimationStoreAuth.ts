import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})

class AnimationStoreAuth extends VuexModule {
  public displaySidebar: boolean = true;

  @Mutation
  public toggleDisplayState(): void {
    this.displaySidebar = !this.displaySidebar;
  }

  @Mutation
  public setDisplayState(state: boolean){
    this.displaySidebar = state;
  }

  @Action
  public setState(displayState: boolean): void {
    this.context.commit('setDisplayState', displayState)
  }

  @Action
  public toggleState(): void {
    this.context.commit('toggleDisplayState')
  }
}

export default AnimationStoreAuth
