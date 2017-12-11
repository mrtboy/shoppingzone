<template>
  <div class="container">
    <div class="row">

      <div class="col-md-6">

  <form>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-4 col-form-label">Fisrtname</label>
      <div class="col-sm-8">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-4 col-form-label">Lastname</label>
      <div class="col-sm-8">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-4 col-form-label">Area Code</label>
      <div class="col-sm-8">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
      </div>
    </div>
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
        <button type="submit" class="btn btn-primary" style="width: 10rem" >Sign up</button>
      </div>
    </div>
  </form>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Products',
    data () {
      return {
        items: [
          { id: 1, name: 'notebook' },
          { id: 2, name: 'Mobile' },
          { id: 3, name: 'Laptop' },
          { id: 4, name: 'Desktop' },
          { id: 5, name: 'Keyboard' },
          { id: 6, name: 'Printer' },
          { id: 7, name: 'Mouse' },
          { id: 8, name: 'Alexa' }
        ],
        cart: []
      }
    },
    methods: {
      addToCart: function(item) {
        this.cart.push(item);
      },
      remove: function(item) {
        let index=this.cart.indexOf(item);
        if(index !== -1)
          this.cart.splice(index, 1);
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
