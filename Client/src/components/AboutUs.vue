<template>
  <div>
    <h1>About Us</h1>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px .1px #4;"
                controls
                indicators

                :interval="2000"
                img-width="200"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="/static/aboutus/1.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="100" height="800"
             src="/static/aboutus/2.jpg" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="100" height="800"
             src="/static/aboutus/6.jpg" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="100" height="800"
             src="/static/aboutus/4.jpg" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="100" height="800"
             src="/static/aboutus/5.jpg" alt="image slot">
      </b-carousel-slide>

    </b-carousel>


    <div class="container">
      <h1>Information</h1>

      <blockquote>

        <h2>Overview</h2>

        <p>Proposal  Introduction Design and develop “shopping on the way” web application
          with Node.js and mongodb. The main idea is to focus on need of customer on
          specific item and in other side help buyer and seller to find each other as
          soon as possible.
          How it works? People are very busy with work and study to check the websites
          every minutes to find the product that they need to get it at best price and
          nearest location. This application always listening to customer request to
          find the product as soon as the item put for sale in nearest location.
          For example, someone need second hand coffeemaker, then she or he create the
          request to application to notify him or her when someone around me want to sell
          this item with expectation price range. This application send notification to
          customer as soon as product is available in range of area that customer can
          personally receive it.
          Some of the Advantages: • Avoid travel long instant to store • Save money and
          time to send item with post • Control product in place before pay • Help small
          businesses to promote their product in area • Help citizen to sell the items
          in house that they don’t use anymore
          Propose technical solution  Node.js and express framework with mongodb are can
          be used in server side.
          Javascript, HTML5, Bootstrap 3 or 4, JQuery can be used in client side.
          Mocha, should and supertest can be used for unit testing
        </p>


        <h1>How it works</h1>

        <p>People are very busy with work and study to check the websites every minutes to
          find the product that they need to get it at best price and nearest location.
          This application always listening to customer request to find the product as soon as
          the item put for sale in nearest location. For example, someone need second hand coffeemaker,
          then she or he create the request to application to notify him or her when someone around me
          want to sell this item with expectation price range. This application send notification to
          customer as soon as product is available in range of area that customer can personally receive it. </p>
        <h1>Some of the Advantages: </h1>

        <p>Avoid travel long instant to store • Save money and time to send item with post •
          Control product in place before pay • Help small businesses to promote their product in area •
          Help citizen to sell the items in house that they don’t use anymore </p>

        <h1>Technologies</h1>

        <p>Propose technical solution  Node.js and express framework with mongodb are
          can be used in server side.
          Javascript, HTML5, Bootstrap 3 or 4, JQuery can be used in client side.
          Mocha, should and supertest can be used for unit testing
        </p>

        <footer>@ shoppingZone </footer>
      </blockquote>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- Location -->
    <div>
      <h1 style="font-size:36px; color:black">Location</h1>


      <a href="https://www.google.de/maps/place/Fachhochschule+Kiel/@54.3325347,10.1787875,17z/data=!3m1!4b1!4m5!3m4!1s0x41620151589bf8cb:0x67eb759431c88232!8m2!3d54.3325316!4d10.1809815
">

        <center style=" margin: 50px;">
          <img src="/static/img/map.JPG"  class="img-rounded"  alt="image" width="800" height="600">
        </center>

      </a></h3>

    </div>
  </div>


</template>


<script>
  export default {
    data () {
      return {

      }
    },

    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>
<!-- carousel-1.vue -->
<style scoped>
  div
  {

    padding: 20px;
    height:1000px ;
    width: 1500px;
    margin: auto;

  }
  b-carousel-slide{
    height: 100%;
    width: 100%;
  }
  b-carousel
  {
    height: 100%;
    width: 100%;
  }
  h1{
    text-align:center ;
    font-weight: bold;
    padding: 10px;
  }



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
</style>
