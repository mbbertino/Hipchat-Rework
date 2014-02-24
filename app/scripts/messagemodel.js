var Message = Backbone.Model.extend({
	defaults: {
		
		"username": "Inmate #9",
		"messageText": "Write your message here",
		"messageDate": _.now(),
		"appId": "Yard Talk",
		"options": {} 
	}
});

var MessagesCollection = Backbone.Collection.extend({
	model: Message,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/messages',
	// is this what we need to do below?
	// url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
  
 initialize: function() {
  console.log('initializing collection');
  	// this.listenTo(this, "save", function(newMessage){
	    
	  //   new MessageView({ model: newMessage });
  	// });

  		// listenTo(this, "add", function(newMessage){
    // console.log('collection heard "ADD" event fired on itself', newMessage);

  // } );
 },
});