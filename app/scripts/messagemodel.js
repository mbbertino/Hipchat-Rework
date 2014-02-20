var Message = Backbone.Model.extend({
	defaults: {
		
		"username": "Inmate #9",
		"messageText": "Write your message here",
		"messageDate": new Date(_.now()).toLocaleTimeString(),
		"appId": "Yard Talk",
		"options": {} 
	}
});

var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'https://tiny-pizza-server.herokuapp.com'
});