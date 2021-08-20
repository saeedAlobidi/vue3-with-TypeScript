
import { defineComponent, ref,reactive, computed } from "vue";
import { useStore } from "vuex";
import HelloWorld from "../../components/display/HelloWorld.vue"; // @ is an alias to /src

import usecase from "@/domain/usecase";
const brain= defineComponent({
components: { HelloWorld},

  setup() {
    const store = useStore();
    let user = computed(() =>{return  store.state.userModules.user})  
    const getData=async()=> usecase.user.getUser(1);   

    return {   user,  getData};
  }

  
});


export default brain;