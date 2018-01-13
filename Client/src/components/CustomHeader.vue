<template>
	
</template>

<script>
//this is just a template and is not being used by the application
export default {
  name: 'CustomHeader',
  data () {
    return {
        message: "this is home"
    }
  },
  methods: {
    test: function(){
      this.$toasted.show('rocket science');
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
