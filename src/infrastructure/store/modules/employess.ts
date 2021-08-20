import {ActionContext, ActionTree,MutationTree } from 'vuex'
export const namespace:Boolean=true;

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {commit<K extends keyof Mutations>(key: K,payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>}


//State

export type Employess ={ employesId: Number, phone: String, email: String, name: String }
export type State = {employes: Employess}
export const state: State = {employes:{employesId: 1, phone: "00967-733122038", email: "saeed@gmail.com", name: "saeed alabidi"}}



//mutations
 
export enum MutationType {SetEmployes = 'SET_EMPLOYES'}
export type Mutations = {[MutationType.SetEmployes](state: State, employes: Employess): void}
export const mutations: MutationTree<State> & Mutations = {[MutationType.SetEmployes](state, employes) {state.employes=employes}}


//Action


export enum ActionTypes {GetEmployes = 'GET_EMPLOYES'}
export type Actions = {[ActionTypes.GetEmployes](context: ActionAugments,employes:Employess): void}
export const actions: ActionTree<State, State> & Actions = {
    
    [ActionTypes.GetEmployes]({ commit },employes:Employess) {
      commit(MutationType.SetEmployes, employes)
    }

  }