<template>
  <div class='hello'>
    <h1>{{message}}</h1>
    <input v-model="valueTo" />
     <button @click="saveMe()">save</button>
     <button @click="getMe()">get</button>
     
  </div>

</template>

<script>
//experimental usage
export default {
  name: 'Storage',
  data () {
    return {
        message: "this is storage",
        valueTo: ""
    }
  },
  methods: {
     saveMe: function(){
         localStorage.setItem("token", this.valueTo);
     },
     getMe: function(){
         console.log(localStorage.getItem("token"));
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
