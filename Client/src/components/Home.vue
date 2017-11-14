<template>
  <div class='hello'>
    <a href="#" class="btn btn-danger">click here</a>
    <h1>{{message}}</h1>     
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        message: "this is home"
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
