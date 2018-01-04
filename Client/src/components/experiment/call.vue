<template>
  <div>
    <label>
      Email
    </label>
    <input type="text">
    <button @click="Sadam()"> call Api </button>
    <div>
      <input type="text" v-model="body">
      <textarea rows="4" cols="50" v-model="body">

</textarea>
      <textarea rows="4" cols="50" v-model="title">
  </textarea>

      <div v-for="animal in animals">
        <input v-model="animal.name">
        <input v-model="animal.weight">
        <input v-model="animal.color">
      </div>

    </div>
    <div>
      <button @click="Sadams()">Sadam Calls everything!</button>
      <div v-for="molavi in pakistanis">
        <textarea v-model="molavi.title"></textarea>
        <textarea v-model="molavi.id"></textarea>
        <textarea v-model="molavi.userId"></textarea>
        <textarea v-model="molavi.body"></textarea>
      </div>
    </div>
  </div>

</template>



<script>
  export default {
    name: 'call',
    data () {
      return {
        body:"Hello WOrld",
        title:"Hello",
        animals: [
          {
            name : "horse",
            weight : 100,
            color : "brown",
          },
          {
            name : "monkey",
            weight : 70,
            color : "white",
          },
          {
            name : "lion",
            weight : 90,
            color : "grey",
          },
          {
            name : "cat",
            weight : 50,
            color : "black",
          }

        ],
        pakistanis: []
      }
    },
    methods: {
      Sadam: function() {
        var me=this;
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            console.log(response.data.body)
            me.title=response.data.title;
            me.body=response.data.body;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      Sadams: function() {
        var me=this;
        this.axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
//            console.log(response.data.body)
            me.pakistanis=response.data;
//            me.body=response.data.body;
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


