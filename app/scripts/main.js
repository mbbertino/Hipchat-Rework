$(document).ready(function(){

	window.messages = new MessagesCollection();

	 messages.fetch({
        success: function(){
          messages.each(function(item){
            new preLoadedMessageView({model: item});
          })
        },
        error: function(){
            console.log('Error with messages.fetch!')
        }
    })

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
