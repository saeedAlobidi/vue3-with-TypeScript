
import * as userEntity from '../entities/user'




class UserRepose implements userEntity.UserRepository {

   baseUrl: string;
  api: any;
  store: any;
  constructor(api: any,store:any, baseUrl: string) { 
    this.api = api;
    this.store = store;
    this.baseUrl = baseUrl;
   }
 

  get(id: string | number): Promise<userEntity.UserResult> {
    return this.api.get(this.baseUrl + "/" + id)
  }
  setUserdb(user: userEntity.User): void {
    this.store.dispatch('User/GET_USER', user)
  } 

 

}


export default UserRepose