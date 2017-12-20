<template>
<div> Cars Culture
  <button @click="Mercedees()">Click here to check the cars!</button>


      <div id="Shoes" class="shoes" data-ride="Shoes1">
        <ol class="carousel-indicators">
          <li data-target="#Shoes" data-slide-to="0" class="active"></li>
          <li data-target="#Shoes1" data-slide-to="1"></li>
          <li data-target="#Shoes2" data-slide-to="2"></li>
        </ol>
        <div class="">
          <div class="Shoes">
            <img class="Shoes width-20px" src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/Shoes/CatNav/p._V293117552_.jpg" alt="First slide">
          </div>
          <div class="Shoes1">
            <img class="Shoes1 w-20" src="https://rukminim1.flixcart.com/image/1408/1408/shoe/y/6/e/wonder-13-45-asian-grey-original-imaenr72gssfxrbj.jpeg?q=90" alt="Second slide">
          </div>
          <div class="Shoes2">
            <img class="Shoes2 w-20" src="https://static.pexels.com/photos/267320/pexels-photo-267320.jpeg" alt="Third slide">
          </div>
        </div>
        <a class="Shoes" href="https://www.6pm.com/shoess" role="Mercedees" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="Shoes1" href="#https://www.6pm.com/shoes" role="Mercedees" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Mercedees',
    data () {
      return {
        tasks: []
      }
    },
    methods: {
      Mercedees: function() {
        var me=this;
        this.axios.get('http://pm102api.moronium.com:12222/tasks/')
          .then(function (response) {
            //  console.log(response.data.tasks[0].title)
            me.tasks=response.data.tasks;

          })
          .catch(function (error) {
            console.log(error);
          });s
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
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: middle;
  }
</style>
