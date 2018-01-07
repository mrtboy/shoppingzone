<template>
  <div>
    <button @click="getPost()">Click Me!</button>
    <textarea rows="10" cols="20" v-model="post.title"></textarea>
    <textarea rows="10" cols="20" v-model="post.id"></textarea>
    <textarea rows="10" cols="20" v-model="post.userId"></textarea>
    <textarea rows="10" cols="20" v-model="post.body"></textarea>

    <button @click="getPosts()">Click me As Well!</button>
    <div v-for="sadi in posts">
      <textarea rows="10" cols="20" v-model="sadi.title"></textarea>
      <textarea rows="10" cols="20" v-model="sadi.id"></textarea>
      <textarea rows="10" cols="20" v-model="sadi.userId"></textarea>
      <textarea rows="10" cols="20" v-model="sadi.body"></textarea>
    </div>
    <button @click="createPost()">THis is post!</button>
  </div>
</template>

<script>
  export default {
    name: 'TestApi',
    data () {
      return {
        userId: ["Sadi"],
        id: ["Farzin"],
         title: ["SadamHossain"],
        post:{
            id: 0, body:"empty", userId:0, title:"empty"
        },
        posts: []
      }
    },

    methods: {
      getPost: function(){
        let me=this;
        this.axios.get('https://jsonplaceholder.typicode.com/posts/11')
          .then(function(result){
            me.post.title = result.data.title;
            me.post.userId = result.data.userId;
            me.post.id = result.data.id;
            me.post.body = result.data.body;
          })
          .catch(function(error){
            console.log(error);
          })
      },
      getPosts:function(){
        let me=this;
        this.axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function(result){
            me.posts = result.data;
//            console.log(me.posts);
          })
          .catch(function(error){
            console.log(error);
          })
      },
      createPost:function(){
        let me=this;
        this.axios.post('https://jsonplaceholder.typicode.com/posts',{
            userId: 201, title: "Sadi", body:"LoL!"
        })
          .then(function(result){
           console.log(me.post.body);
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
