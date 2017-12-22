<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="card m-5 p-2" style="width: 30rem;">
        <div class="card-body">
          <h4 class="card-title">Adding New Product</h4>
          <h6 class="card-subtitle mb-4 text-muted ">please enter your Product information Below</h6>

          <form id="productForm" method="post" class="form-horizontal">
           <div class="form-group">
            <label class="col-xs-3 control-label">Product name</label>
              <div class="col-xs-5">
                <input type="text" class="form-control" name="name" />
              </div>
           </div>

        <div class="form-group">
          <label class="col-xs-3 control-label">Description</label>
          <div class="col-xs-8">
              <textarea name="description" class="form-control" rows="5"></textarea>
          </div>
        </div>

        <div class="form-group">
          <label class="col-xs-3 control-label">Price</label>
          <div class="col-xs-3 inputGroupContainer">
            <div class="input-group">
                <input type="text" class="form-control" name="price" />
                <span class="input-group-addon">$</span>
              </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-xs-3 control-label">Category</label>
              <div class="col-xs-5 selectContainer">
                <select class="form-control" name="size">
                  <option value="">Choose a Category</option>
                  <option value="s">Small (S)</option>
                  <option value="m">Medium (M)</option>
                  <option value="l">Large (L)</option>
                  <option value="xl">Extra large (XL)</option>
                </select>
              </div>
        </div>

        <div class="form-group">
          <label class="col-xs-3 control-label">Condition</label>
          <div class="col-xs-5 selectContainer">
            <select class="form-control" name="condition">
                <option value="">Choose a Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
            <label class="col-xs-3 control-label">Availablity</label>
              <div class="col-xs-5">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" />
                    Product Available
                </label>
                <div class="form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="">
                      Product Not Available anymore!
                  </label>
                </div>
              </div>
           </div>

        <div class="form-group">
             <label class="col-xs-3 control-label">Address</label>
          <div class="col-xs-8">
              <textarea name="address" class="form-control" rows="5"></textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="col-xs-5 col-xs-offset-3">
              <button type="submit" class="btn btn-default" @click="submitProduct()">Submit</button>
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
