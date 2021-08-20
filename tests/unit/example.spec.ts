import {UserBuilder} from '../../src/domain/entities/user'


describe('HelloWorld.vue', () => {
  it('return true if all business requirement is correct', () => {
      
    let data=new UserBuilder().builder({userId: 1, id: 1, title: "hi this is saeed ^_*", completed: true}).build(); 

    expect(data.status).toBe(true)
  })


  it('return false if id equal 0', () => {
      
    let data=new UserBuilder().builder({userId: 1, id: 0, title: "hi this is saeed ^_*", completed: true}).build(); 
    expect(data.status).toBe(false)
  })

 

  //todo finish all test case 
})
