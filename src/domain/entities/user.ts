type UserResult = { status: Boolean, message: String, data:any }
type User = { userId: Number, id: Number, title: String, completed: Boolean }


class UserBuilder {
    userInfo:User=new NullObject();
    result:UserResult | undefined;
    builder(user: User) {
        this.userInfo = user; 
        return this;
    }

    build(){
        if(this.userInfo.id==0)
        return this.result={status: false, message: "id is required failed!", data:this.userInfo}

        if(this.userInfo.userId==0)
        return this.result={status: false, message: "userId is required failed!", data:this.userInfo}

        if(this.userInfo.title=="")
        return this.result={status: false, message: "title is required failed!", data:this.userInfo}

        if(this.userInfo.completed==null)
        return this.result={status: false, message: "completed is required failed!", data:this.userInfo}
        
        return this.result={status: true, message: "all your business requirements is checked", data:this.userInfo}

         
    }
} 




interface UserRepository { 
    get(id: number|string):Promise<UserResult>
    setUserdb(user: User): void
}


interface UserUsecase { 
     
    getUser(id:number|string): void

}

class NullObject implements User{
    userId: Number=0;
    id: Number=0;
    title: String="";
    completed: Boolean=false;

}

export   {UserResult,User,UserBuilder,UserRepository,UserUsecase}