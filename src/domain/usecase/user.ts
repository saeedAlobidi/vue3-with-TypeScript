
import * as userEntity from '../entities/user'

class UserUsecase implements userEntity.UserUsecase {

  repos: userEntity.UserRepository;

  constructor(repos: userEntity.UserRepository) {
    this.repos = repos;
   }

  async getUser(id:number|string) {
    
    //1- get data from server
    let result =await this.repos.get(id) 
    
    //2- check any  requirnment
    let data=new userEntity.UserBuilder().builder(result.data as userEntity.User).build(); 
    


    //3-update database
    if(data.status) 
    this.repos.setUserdb(data.data as userEntity.User)
      
  }





}


export default UserUsecase