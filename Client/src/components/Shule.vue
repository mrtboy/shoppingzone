<template>
  <div id="app">
    <b-container>
      <b-jumbotron header="Bootstrap Vue"
                   lead="Bootstrap 4 Components for Vue.js 2">
        <p>For more information visit our website</p>
        <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn>
      </b-jumbotron>

      <b-form-group horizontal
                    :label-cols="4"
                    description="Let us know your name."
                    label="Enter your name">

        <b-form-input v-model.trim="name"></b-form-input>
      </b-form-group>

      <b-alert variant="success" :show="showAlert">
        Hello {{ name }}
      </b-alert>


      </b-container>
        <div style="width:100%"><div><div><div style=";border-style:none"><div class="footer-top-socials">
         <div class="container">
          <div class="row">
            <div class="col-md-12">
            <div class="col-md-6 footer-logo pull-left">
              <img alt="Sadam" class="sadam-logo" id="footer-logo" src="https://en-support.files.wordpress.com/2013/07/wordpress-follow-social-buttons.png"></div>
            </div>
        </div>
      </div>
    </div>
      <div class="footer">
        <div class="container">
          <div class="row">
           
              <div class="col-md-3 col-sm-6">
                <h3>
                  About</h3>
                <ul class="list">
                  <li>
                    <a href="#">About Us</a></li>
                  <li>
                    <a href="#" target="_blank">Press Office</a></li>
                  <li>
                    <a href="#">LaLaLand</a></li>
                  <li>
                    <a href="#">Code of Ethics</a></li>
                  <li>
                    <a href="#">Terms and Conditions</a></li>
                  <li>
                    <a href="#">Community Guidelines</a></li>
                  <li>
                    <a href="#" target="_blank">HR Quality</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <h3>
                  Connect</h3>
                <ul class="list">
                  <li>
                    <a href="#">Contact Us</a></li>
                  <li>
                    <a href="#">Apps</a></li>
                  <li>
                    <a href="#">Social</a></li>
                  <li>
                    <a href="#" target="_blank">Channel Finder</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <h3>
                  Our Channels</h3>
                <ul class="list">
                  <li>
                    <a href="#" target="_blank">Pakistani Sadam</a></li>
                  <li>
                    <a href="#" target="_blank">El Dorado</a></li>
                  <li>
                    <a href="#" target="_blank">Du bist Arabisch?</a></li>
                  <li>
                    <a href="#" target="_blank">Ich bin Sadam!</a></li>
                  <li>
                    <a href="#" target="_blank">Mangrio ich mein nach name!</a></li>
                  <li>
                    <a href="#" target="_blank">Ich liebe Schila!</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <h3>
                  Our Network</h3>
                <ul class="list">
                  <li>
                    <a href="#" target="_blank">Jetty</a></li>
                  <li>
                    <a href="#" target="_blank">El Conquistador for Studies</a></li>
                  <li>
                    <a href="#" target="_blank">El Moor Media Institute</a></li>
                  <li>
                    <a href="#" target="_blank">El Husain Centre for Public Liberties &amp; Autocracy Rights</a></li>
                  <li>
                    <a href="#" target="_blank">Longlive Forum</a></li>
                  <li>
                    <a href="#" target="_blank">Sadam Film Festival</a></li>
                  <li>
                    <a href="#" target="_blank">El Sadam bin Almany Learning</a></li>
                  <li>
                    <a href="#" target="_blank">Sadam Hotel Partners</a></li>
                </ul>
              </div>
            
            <div class="col-md-4 col-sm-12 col-xs-12 footer-copyright">
              <p>
                © 2017 Sadam Network</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        &nbsp;</p>
    </div></div><!--PageLoadedSucessfully--></div></div>
  </div>
</template>

<script>
  export default {
    name: 'Schule',
    data () {
      return {
        name: ''
      }
    },
    methods: {
      showAlert() {
        return this.name.length > 4 ? true : false;
      }
    }
  }

</script>


<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .footer {
    position: relative;
    bottom: -60px;
    margin-top: -60px !important;
  }


</style>
