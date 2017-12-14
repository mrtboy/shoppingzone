<div id="app" class="container" style="padding-top: 2em;">
  <input v-model="searchText">

  <table class="table table-striped" v-if="posts">
    <thead>
    <tr>
      <th>Title</th>
      <th>Product Type</th>
    </tr>
    </thead>
    <tr v-for="post in itemsSearched">
      <td>{{post.title.rendered}}</td>
      <!-- this part is probably not correct -->
      <td v-for="post._embedded['wp:term'][1] in itemsSearched"></td>
    </tr>
  </table>
</div>
<script>
var vm = new Vue({
el: '#app',
data: {
message: 'hello world',
searchText: '',
posts: []
},
computed : {
itemsSearched : function(){
var self = this;
if( this.searchText == ''){
return this.posts;
}
return this.posts.filter(function(post){
return post.title.rendered.indexOf(self.searchText) >= 0;
//what to put here to filter the tags ??
});
}
},
created: function(){
$.get('https://wordpress-dosstx.c9users.io/wp-json/wp/v2/products/' + '?_embed=true')
.done(function(data) {
vm.posts = data;
});
}
});
</script>s
