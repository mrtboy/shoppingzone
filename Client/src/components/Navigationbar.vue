<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <router-link class="navbar-brand text-warning title" :to="'/'">SHOPPING ZONE <span class="sr-only">(current)</span></router-link>
  <router-link class="navbar-brand subtitle" :to="'/'">Customer Trusted Place<span class="sr-only">(current)</span></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="'/search'">Search <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item" v-if="signedin">
        <router-link class="nav-link" :to="'/manage/products'">Manage Products</router-link>                
      </li>
       <li class="nav-item" v-if="signedin">
        <router-link class="nav-link" :to="'/contactUs'">Contact Us</router-link>                
      </li>
      <li class="nav-item" v-if="signedin">
        <router-link class="nav-link" :to="'/about'">About Us</router-link>                
      </li>
    </ul>    
      <router-link v-show="signupVisibility" class="btn btn-outline-primary my-2 my-sm-0 m-2" :to="'/register'"  v-if="!signedin">Sign up</router-link>
      <router-link v-show="signinVisibility" class="btn btn-outline-success my-2 my-sm-0 m-2"  v-if="!signedin" :to="'/login'">Sign in</router-link>                      
      <button class="btn btn-outline-warning my-2 my-sm-0 m-2 text-warning"  v-if="signedin" @click="logoff()">Log out</button>                
      <router-link v-show="signinVisibility" class="btn btn btn-secondary rounded mw-100 fa fa-user white" v-if="signedin" :to="'/profile'"></router-link>                
      </div>
</nav>
</template>



<script>
export default {
  name: 'Navigationbar',
  data () {
    return {
        message: "this is home",
        signupVisibility: true,
        signinVisibility: true,
        signedin: true
    }
  },
  methods: {
    isSignedIn: function(){
      return this.$auth.isSignedIn();
    },
    logoff: function() {
      this.$auth.removeToken();
      this.signedin = this.isSignedIn(); 
      this.$router.push("/");
    },
    test: function(){
      this.$toasted.show('rocket science');
    },
    test1: function(){
        this.$authInspector.tokenExist();
    },
    testen: function() {
        
    }  
  },
  mounted: function() {  
    //logic to show menus and button based on user login status
    this.signedin = this.isSignedIn(); 
     if(this.$router.history.current.path == "/login")
        this.signinVisibility = false;
    else
    this.signinVisibility = true;
    if(this.$router.history.current.path == "/register")
        this.signupVisibility = false;
    else
    this.signupVisibilitys = true;
  },
  watch: {
        '$route': function(value) {
          //a watch for changes on route

            this.signedin = this.isSignedIn();
            if(value.path == "/login")
                this.signinVisibility = false;
            else
                this.signinVisibility = true;

            if(value.path == "/register")
                this.signupVisibility = false;
            else
                this.signupVisibility = true;

            if(value.path == "/manage/products/add")
            {
                 this.axios.delete(this.$gc.getBaseUrl("resources/clear"), { headers: this.$auth.AH() })
                           .then(function(data){
                                     })
                           .catch(function(error, data){                                    
                 })              
            }
        }
    }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-family: 'Russo One', sans-serif;
}
.subtitle {
  font-family: 'Cabin Sketch', cursive;  
  font-size: 14px;
  position: absolute;
  top: 28px;
  left: 24px;  
}
</style>
