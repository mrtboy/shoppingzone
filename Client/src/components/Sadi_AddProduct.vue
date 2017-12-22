<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="card m-5 p-2" style="width: 30rem;">
        <div class="card-body">
          <h4 class="card-title">Adding New Product</h4>
          <h6 class="card-subtitle mb-4 text-muted ">please enter your Product information Below</h6>

          <form>
            <div class="form-group row">
              <img src="http://designsbysarahbryan.com/wp-content/uploads/2010/01/dbs_blinkie-size-200X200.jpg" class="rounded float-right" alt="...">
              <div class="col-sm-8">
                <button type="button" class="btn btn-primary" @click="uploadImg()">Image of the Product</button>
              </div>
               
            </div>
            <div class="form-group row">
              <label for="name" class="col-sm-4 col-form-label">Name</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="ProductName">
              </div>
            </div>
            <div class="form-group row">
              <label for="name" class="col-sm-4 col-form-label">Category</label>
              <div class="col-sm-8">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select</button>
                  <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="form-group row">
              <label for="name" class="col-sm-4 col-form-label">Price</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="Put the Price of the Product">
              </div>
            </div>
            <div class="form-group row">
              <label for="name" class="col-sm-4 col-form-label">Product Description:</label>
              <div class="col-sm-8">
                <textarea class="form-control" rows="5" id="Product Description" placeholder="Product Decription"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-4 col-form-label">Condition</label>
              <div class="col-sm-8">
                <input type="checkbox" aria-label="Checkbox for following text input">
                <span class="input-group">
                  <label for="condition" class="col-sm-4 col-form-label">used</label>
                </span>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-12 col-md-6">
                <button type="submit" class="btn btn-primary" style="width: 10rem" @click="SubmitProduct()" >Submit</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: 'AddProduct',
    data () {
      return {
        item: []
      }
    },
    methods: {
      submitProduct: function () {

      },
      uploadImg: function(){

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
