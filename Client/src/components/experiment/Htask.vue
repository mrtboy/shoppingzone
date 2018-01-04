<template>
  <div>
  hello htask
    <button @click="hitler()">Hitler Calls everything!</button>
    <div v-for="task in tasks">
      <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1995344.jpg"  alt="Card image cap">
        <div class="card-body">
          <p class="card-text">{{task.title}}</p>
        </div>
      </div>
  </div>
  </div>

</template>

<script>
  export default {
    name: 'Htask',
    data () {
      return {
        tasks: []
      }
    },
    methods: {
      hitler: function() {
        var me=this;
        this.axios.get('http://pm102api.moronium.com:12222/tasks/')
          .then(function (response) {
           //  console.log(response.data.tasks[0].title)
            me.tasks=response.data.tasks;

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
  .sadam-task{
    background-color: #987654;
    color: #fff;
    width: 250px;
    height: 100px;
    text-align: center;
    vertical-align: middle;
  }
</style>
