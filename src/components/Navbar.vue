 <template>
  <b-navbar toggleable type="dark" class="nav sidenav">
    <b-navbar-brand href="#"> </b-navbar-brand>
  
    <b-navbar-toggle target="navbar-toggle-collapse" class="menu">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>       
     
     <Logout/> 
      </template>
      
    </b-navbar-toggle>
    
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <router-link class="nav-item nav-link" to="/Home">{{$store.getters.ObtenerIni}}</router-link>
        </b-nav-item>
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/Rules"
            >{{$store.getters.ObtenerReg}}</router-link
          ></b-nav-item
        >
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/Info"
            >{{$store.getters.ObtenerInfo}}</router-link
          ></b-nav-item
        >
        <b-nav-item href="#">
          <router-link class="nav-item nav-link" to="/Contact"
            >{{$store.getters.ObtenerCont}}</router-link
          ></b-nav-item
        >
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/About"
            >{{$store.getters.ObtenerNoso}}</router-link
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import Logout from '../components/Logout';
export default {
  name: "Navbar",
  props: {},
  components:{
    Logout
  }
};
</script>

