<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <button @click="delProduct()">delete product</button>
        <button @click="editProduct()">Edit Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testingEditDelProduct',
  data () {
    return {
     carts:[],
      product: {
           name: "",
           price: 0,
           condition: "",
           description: ""
         }
    }
  },
  methods: {
       editProduct: function() {
        var me=this;
        this.axios.defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bH7kYsUgMtncuSAPE00rZfAzJzz4YPBTgjBGDGcu488";
        this.axios.put('http://pm102api.moronium.com:12222/products/',this.product)
          .then(function (response) {
            console.log(response.data.product);
            me.tasks=response.data.product;

          })
          .catch(function (error) {
            console.log(error);
          });
      },
      delProduct: function() {
        var me=this;
        this.axios.defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bH7kYsUgMtncuSAPE00rZfAzJzz4YPBTgjBGDGcu488";
        this.axios.delete('http://pm102api.moronium.com:12222/products/',this.product)
          .then(function (response) {
            console.log(response.data.product);
            me.tasks=response.data.product;

          })
          .catch(function (error) {
            console.log(error);
          });
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
