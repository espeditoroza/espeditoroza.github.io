window.setInterval(function(){

    var randomColor = 'rgb(' + 255 + ',' + (Math.floor(Math.random() * 255)) + ',' + 242 + ')';
    
    $('span').css({
      'color' : randomColor
    });

  }, 500);


$().ready(function(){
	$("#sendBtn").click(function(){
		swal ( "Que pena" ,  "Ainda não estou recebendo mensagens por aqui, mas você pode me enviar um e-mail para: espeditomesquita@gmail.com" ,  "error" )
		return false;
	});
	$(".lightbox").fancybox();
	$('a[href^="#"]').click(function(){
	$("html, body").animate({
		scrollTop: $( $.attr(this, "href")).offset().top
	}, 600);

	return false;
});


});
