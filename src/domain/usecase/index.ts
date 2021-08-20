
import userUsecase from './user'
import  repos from '../repository'
const user=new userUsecase(repos.userRepos)
export default {user}

 

