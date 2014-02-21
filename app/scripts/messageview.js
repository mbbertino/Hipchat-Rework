var MessageView = Backbone.View.extend({

	className: 'message-unit',

	createTemplate: _.template($("#message-template").text()),

	initialize: function(){
		$('.js-message-list').prepend(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
	},
})