<!-- header -->
<template>

  <nav class="navbar  navbar-expand-xl bg-dark   navbar-dark sticky-top">

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <!--Brand-->
      <a class="navbar-brand" href="#"> Logo</a>

      <!--Links in left site-->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/#/m_aboutus">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">...</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:8080/#/contactus">Contact Us</a>

        </li>

      </ul>

      <!-- links in right site -->
      <ul class="navbar-nav ml-auto">
        <!-- search button -->
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>

        <li class="nav-item">

          <!-- sign Up button-->
          <router-link v-show="signupVisibility" class="   btn btn-outline-primary my-2 my-sm-2 m-2" :to="'register'">Sign up</router-link>



          <!-- Login button -->
          <router-link v-show="signinVisibility" class="  btn btn-outline-success my-2 my-sm-2 m-2" :to="'login'">Sign in</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>


<script>
  export default {
    name: 'Mheader',
    data () {
      return {
        message: "this is home",
        signupVisibility: true,
        signinVisibility: true
      }
    },
    methods: {
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
        console.log(value.path);
        if(value.path == "/login")
          this.signinVisibility = false;
        else
          this.signinVisibility = true;
        if(value.path == "/register")
          this.signupVisibility = false;
        else
          this.signupVisibility = true;
      }
    }
  }
</script>


<!--Add'scoped'attribute tol imit CSS to this component only-->

<style>

  div{
    padding: 11px;
  }
  nav{

  }
</style>

