var UserView = Backbone.View.extend({

	className: 'user-item',

	createTemplate: _.template($("#user-template").text()),

	events: {
		"click .js-submit-btn": "submitMessage"
	},

	initialize: function(){
		$('.js-user-panel').html(this.el);
		this.render();

	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
		
	},

	submitMessage: function(){

	}


})