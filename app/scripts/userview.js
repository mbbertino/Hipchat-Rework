var UserView = Backbone.View.extend({

	className: 'user-item',

	createTemplate: _.template($("#user-template").text()),

	events: {
		"click .js-submit-btn": "submitMessage",
		"focus .js-msg-input": "expandField"
	},

	initialize: function(){
		$('.js-user-panel').html(this.el);
		this.render();

	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
		
	},

	expandField: function(){
			console.log("worked");
			$('.js-msg-input').toggleClass("expand");
	},

	submitMessage: function(){
		$('.js-msg-input').toggleClass("expand");
		
		var msgText = $('.js-msg-input').val();
		var uName = $('.user-name-title').find('h2').html();

		var newUser = new Message({
			messageText: msgText,
			username: uName,
			messageDate: new Date(_.now()).toLocaleTimeString()
		});

		new MessageView({model: newUser}) 
	}
})