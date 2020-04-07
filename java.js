var x = 126243456;
var list = [];
for (var i =0; i < 100; i++ ){
    list[i] = x+i;
}
// $(".btn").on("click", function (){ 
//     $(".auth").html("AUTH # " + list[Math.floor(Math.random() * list.length)])
// })
$(".btn1").on("click", function (){ 
    $(".btn1").remove();
    // $("#info").append("Show this card information to the pharmacist every time you fill a prescription. Save up to 80% on your prescription medications. Savings valid exclusively at CVS, Target, Longs Drugs, Walmart, Kroger, Fry's, Harris Teeter, Walgreens, and Duane Reade pharmacies. This card information is NOT insurance. Your privacy is protected. We do not rent or sell personal information. By using this card information you have agreed to the terms and conditions found at singlecare.com/term-and-conditions. For more information or to order more free cards, please contact us at singlecare.com/rx or call toll-free at 1-844-833-6393. ");
    // $("#info").append("<hr>");
    // $("#info").append("&copy;2018 SingleCare Administrators");
    window.print();
})
$(window).on('load',function(){
    $(".auth").html("AUTH # " + list[Math.floor(Math.random() * list.length)])
    $('#myModal').modal('show');
});
  