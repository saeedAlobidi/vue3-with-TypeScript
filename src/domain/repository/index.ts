
import constraint from '@/constraints/environment' 
import store from '@/infrastructure/store'
import api from '@/infrastructure/services' 
import User from './user'

const userRepos=new User(api.API,store,constraint.server.url);

export default {userRepos}

 

