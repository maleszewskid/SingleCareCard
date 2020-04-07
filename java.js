var x = 126243456;
var list = [];
for (var i =0; i < 100; i++ ){
    list[i] = x+i;
}
$(".btn").on("click", function (){ 
    $(".auth").html("AUTH # " + list[Math.floor(Math.random() * list.length)])

})

$(window).on('load',function(){
    $('#myModal').modal('show');
});
  