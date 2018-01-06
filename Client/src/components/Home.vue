<template>
 <div>
  
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5">Find the nearest items to you</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="email" class="form-control form-control-lg" placeholder="Enter your item name here...">
                </div>
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>

    <section class="showcase">
      <div class="p-2">
        <div class="row no-gutters">
          <div class="col-lg-4 order-lg-2 text-white showcase-img hidemeImg rounded"  style="background-image: url('/static/img/Asset_Map_1.png');"></div>
          <div class="col-lg-8 order-lg-1 my-auto showcase-text text-center hidemeTxt">
            <h2>Shopping from the Neighbourhood</h2>
            <p class="lead mb-0">Save money and time if your neighbor have your product to sell!</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-4 text-white showcase-img hidemeImg" style="background-image: url('/static/img/sell.jpg');"></div>
          <div class="col-lg-8 my-auto showcase-text text-center hidemeTxt">
            <h2>Selling your product(s)</h2>
            <p class="lead mb-0">look at the Neighbors wish lists from other users, maybe you have a product and you can sell it to them.</p>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-4 order-lg-2 text-white showcase-img hidemeImg" style="background-image: url('/static/img/chat.jpg');"></div>
          <div class="col-lg-8 order-lg-1 my-auto showcase-text text-center hidemeTxt">
            <h2>Chat live!</h2>
            <p class="lead mb-0">Don't need to give your phone number or any other social network account. We provide the communication interface here.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import "../assets/styles/homeStyle.css"

export default {
  name: "Home",
  data() {
    return {
      message: "this is home"
    };
  },
  methods: {
    test: function() {
      this.$toasted.show("rocket science");
    }
  }
};
import "../assets/js/homeScript";
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
