
$(document).ready(function(){

window.messages = new MessagesCollection();

	setInterval(function() {
		messages.fetch({
			success: function(collection) {
				$('.js-message-list').empty(),
				messages.each(function(newMessage){
					new preLoadedMessageView({model: newMessage})
				})
				console.log('fetching')
			},
			error: function(collection, error) {
				console.log(error.description);
			}
		});
	}, 10000)

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


