var FriendView = Backbone.View.extend({

	className: 'friend-item',

	createTemplate: _.template($("#friend-template").text()),

	initialize: function(){
		$('.js-friends-list').prepend(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
		this.$el.find('.js-friend-timestamp').html(new Date(parseInt(this.$el.find('.js-friend-timestamp').html())).toLocaleTimeString())
	},
})

var preLoadedFriendView = Backbone.View.extend({

	className: 'friend-item',

	createTemplate: _.template($("#friend-template").text()),

	initialize: function(){
		$('.js-friends-list').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes))
		this.$el.find('.js-friend-timestamp').html(new Date(parseInt(this.$el.find('.js-friend-timestamp').html())).toLocaleTimeString())
	},
})