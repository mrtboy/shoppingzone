<template>
  <div>




    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nav class="navbar navbar-dark bg-primary">
        <!-- Navbar content -->
      </nav>s
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <!-- Navbar content -->
      </nav>
    </nav>

    <nav class="navbar navbar-dark bg-dark">
      <!-- Navbar content -->
    </nav>

    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-4 col-form-label">Fisrtname</label>
        <div class="col-sm-8">cd cleint
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


        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="validationServer01">First name</label>
            <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Write your first name" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationServer02">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Please write your last name" required>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="validationServer03">City</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="Kie, Paris , Hamburg" required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer04">State</label>
            <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="Germmay, France , Spain" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer05">Zip</label>
            <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Please type Zip" required>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>














    <button type="button" class="btn btn-primary">Products</button>
    <button type="button" class="btn btn-secondary">Help</button>
    <button type="button" class="btn btn-success">Contact</button>
    <button type="button" class="btn btn-danger">SOcial Media Center</button>
    <button type="button" class="btn btn-warning">LOcations</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">ABout us </button>
    <button type="button" class="btn btn-dark">Company profile</button>

    <button type="button" class="btn btn-link">Link</button>


    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="/static/img/Googlemap.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Guide about Location</h4>
        <p class="card-text">Please! Find us .</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>


    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="/static/img/bg-masthead.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Sea View</h4>
        <p class="card-text">You can't cross the sea merely by standing and staring at the water.s</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'Product',
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
