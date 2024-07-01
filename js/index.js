
let SecTop =  $("#about").offset().top;


$(window).scroll(function(){

    let scrolTop =  $(window).scrollTop()
    // console.log(scrolTop)
    // console.log(SecTop+"sss")

if(scrolTop > SecTop){
    $(".navbar").css("background-color","rgba(53, 53, 53, 0.5)"
       
    )
}else{
    $(".navbar").css("background-color","transparent"
       
    )
}
})