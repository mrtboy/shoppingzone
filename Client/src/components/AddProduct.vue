<template>
  <div class="container-fluid">
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-12 col-md-6">
          <button type="submit" class="btn btn-primary" style="width: 10rem" >Sign in</button>
        </div>
        <div class="col-sm-12 col-md-6">
          <a href="#" class="card-link">need an account?</a>
        </div>
      </div>
    </form>

  </div>

</template>

<script>
  export default {
    name: 'AddProduct',
    data () {
      return {

      }
    },
    methods: {

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
