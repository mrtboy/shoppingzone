//book.js
module.exports=function () {
    var ratepoints=0;
    return{
        rate: function(points){
            ratepoints= points;

        },
        getpoints: function(){
            return ratepoints;
        }
    }
}