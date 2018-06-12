window.setInterval(function(){

    var randomColor = 'rgb(' + 255 + ',' + (Math.floor(Math.random() * 255)) + ',' + 242 + ')';
    
    $('span').css({
      'color' : randomColor,
    });

  }, 500);


$().ready(function(){
	$("#sendBtn").click(function(){
		alert("Ainda não estou recebendo mensagens por aqui, mas você pode me enviar um e-mail: espeditomesquita@gmail.com");
	});

	/*$("nav").hide();
	$("a").click(function(){
		$("nav").show();
	});
	$("#home").click(function(){
		$("nav").hide();
	});*/


	$('a[href^="#"]').click(function(){
	$("html, body").animate({
		scrollTop: $( $.attr(this, "href")).offset().top
	}, 600);

	return false;
});


});


