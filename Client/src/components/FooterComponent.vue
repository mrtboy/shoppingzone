<template>
    <footer class="foot bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <router-link  :to="'/'">Home</router-link>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link  :to="'/manage/products/add'">Sell</router-link>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link  :to="'/manage/products/index'">My Products</router-link>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link  :to="'/manage/products/statistics'">Statistics</router-link>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link  :to="'/contactUs'">Contact Us</router-link>
              </li>
               <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <router-link  :to="'/about'">About Us</router-link>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">&copy; Shopping Zone 2017. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
</template>



<script>
//master footer of the application
// import "../assets/styles/homeStyle.css"
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.foot {
  padding-top: 4rem;
  padding-bottom: 4rem;
}


.title {
  font-family: "Russo One", sans-serif;
}
.subtitle {
  font-family: "Cabin Sketch", cursive;
  font-size: 14px;
  position: fixed;
  top: 28px;
  left: 24px;
}
</style>