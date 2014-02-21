var FriendView = Backbone.View.extend({

	className: 'friend-item',

	createTemplate: _.template($("#friend-template").text()),

	initialize: function(){
		$('.js-friend-list').prepend(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
	},
})