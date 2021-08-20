import {ActionContext, ActionTree,MutationTree } from 'vuex'
export const namespace:Boolean=true;

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {commit<K extends keyof Mutations>(key: K,payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>}


//State

export type User ={ userId: Number, id: Number, title: String, completed: Boolean }
export type State = {user: User}
export const state: State = {user:{userId: 1, id: 1, title: "hi this is saeed ^_*", completed: true}}



//mutations
 
export enum MutationType {Setuser = 'User/SET_USER'}
export type Mutations = {[MutationType.Setuser](state: State, user: User): void}
export const mutations: MutationTree<State> & Mutations =
 {
   [MutationType.Setuser](state, user) {Object.assign(state.user,user)}
  
  }


//Action


export enum ActionTypes {GetUser = 'User/GET_USER'}
export type Actions = {[ActionTypes.GetUser](context: ActionAugments,User:User): void}
export const actions: ActionTree<State, State> & Actions = {
    
    [ActionTypes.GetUser]({ commit },User:User) {
      
      commit(MutationType.Setuser, User)
    }

  }