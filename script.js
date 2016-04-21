$(function(){
		$('form input, form textarea').on('keydown', function(){
			$(this).parent().removeClass("error-r");
			$(this).parent().removeClass("error-in");
		});

	$("form input[type=button]").on('click', function(){
		var nameElm = $('.name');
  		var name = nameElm.find('input').val();
  		nameElm.removeClass('error-r');
  		nameElm.removeClass('error-min');
  		if(!name){
  			nameElm.addClass('error-r');
  		} else if(name.length < 2){
  			nameElm.addClass('error-min');
  		}

  		var emailElm = $(".email");
  		var email = emailElm.find('input').val();
  		emailElm.removeClass('error-r');
  		emailElm.removeClass('error-in');
  		if(!email){
  			emailElm.addClass('error-r');
  		}else if(!validateEmail(email)){
  			emailElm.addClass('error-in');
  		}

  		var subjectElm = $(".subject");
  		var subject = subjectElm.find('input').val();
  		subjectElm.removeClass('error-r');
  		if(!subject){
  			subjectElm.addClass('error-r');
  		}
  		var messageElm = $(".message");
  		var message = messageElm.find('textarea').val();
  		messageElm.removeClass('error-r');
  		if(!message){
  			messageElm.addClass('error-r');
  		}
  	});
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}