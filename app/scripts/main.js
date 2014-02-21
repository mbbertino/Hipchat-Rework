$(document).ready(function(){

	window.messages = new MessagesCollection();

	$('.jumbotron').on('click', '.js-login-btn', function() {
		$('.js-content').toggleClass("hidden");
		$('.jumbotron').toggleClass("hidden");

		var userName = $(".js-username-login").val();

		var newUser = new Message({
			username: userName
		});

		new UserView({model: newUser}) 
	});
})
