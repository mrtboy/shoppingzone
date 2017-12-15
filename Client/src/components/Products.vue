<template>

  <div class="container">
    <router-link class="card-link" :to="'/AddProduct'">AddProduct<span class="sr-only">(current)</span></router-link>
    <div></div>
      <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <img class="card-img-top" src="http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05474585.png" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">This is the best Laptop at 80 euros! Das ist Sonderangebot!</p>
            <router-link class="card-link" :to="'/Products'">Products detail!<span class="sr-only">(current)</span></router-link>
            <router-link class="card-link" :to="'/Products'">Contact Seller!<span class="sr-only">(current)</span></router-link>
          </div>
        </div>
      </div>
        <div class="col-sm-3">
          <div class="card">
            <img class="card-img-top" src="https://www.msi.com/asset/resize/picture/us/news-s/news_1501543761597fbd5188382-png/405.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">This is the best Laptop for Programmers! Das kostet 800 euro!</p>
              <router-link class="card-link" :to="'/Products'">Products detail!<span class="sr-only">(current)</span></router-link>
              <router-link class="card-link" :to="'/Products'">Contact Seller!<span class="sr-only">(current)</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'Products',
    data () {
      return {

        items: [
          { id: 1, name: 'notebook' },
          { id: 2, name: 'Mobile' },
          { id: 3, name: 'Laptop' },
          { id: 4, name: 'Desktop' },
          { id: 5, name: 'Keyboard' },
          { id: 6, name: 'Printer' },
          { id: 7, name: 'Mouse' },
          { id: 8, name: 'Alexa' }
        ],
        cart: []
      }
    },
    methods: {
      addToCart: function(item) {
        this.cart.push(item);
      },
      remove: function(item) {
        let index=this.cart.indexOf(item);
        if(index !== -1)
          this.cart.splice(index, 1);
      },
      //this this the addProduct function which will redirect to AddProduct page
      addProduct: function () {
          //Just for testing work
      }



      }
    }


</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
</style>
