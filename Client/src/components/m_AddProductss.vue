<template>
  <div style="padding:30px">

    <h1>Product</h1>
    <br>
    <h1>Name</h1>
    <br>
    <input type="text" v-model="product.name" />
    <br>
    <br>
    <h1>Price</h1>
    <br>
    <input type="text" v-model="product.price" >
    <br>
    <h1>Condition</h1>
    <br>
    <input type="text" v-model="product.condition" />
    <br>
    <h1>Description</h1>
    <br>
    <input type="text" v-model="product.description" />
    <br>
    <br>
    <button @click="showProduct()" class="btn btn-primary">save</button>
    <button @click="post()" class="btn btn-primary">post</button>



  </div>

</template>

<script>
  export default {
    data() {
      return {
        product: {
          name: "",
          price: 0,
          condition: "",
          description: ""
        }
      }

    },
    methods: {
      showProduct: function () {
        console.log(this.product.name)
        this.axios.defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bH7kYsUgMtncuSAPE00rZfAzJzz4YPBTgjBGDGcu488";
        this.axios.post('http://pm102api.moronium.com:12222/products', this.product)
          .then(function(data){
            console.log(data)

          }).catch(function(error){
            console.log(error);
        })
      },
    post: function(){
        let me=this;
      this.axios.defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.bH7kYsUgMtncuSAPE00rZfAzJzz4YPBTgjBGDGcu488";
        this.axios.get('http://pm102api.moronium.com:12222/products', this.product)
          .then(function(data){
            me.tasks = data.value;
          })
          .catch(function(error){
            console.log(error);
          })
      }






    }

  }


</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
