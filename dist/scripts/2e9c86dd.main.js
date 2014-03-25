var Message=Backbone.Model.extend({defaults:{username:"Inmate #9",messageText:"Write your message here",messageDate:_.now(),appId:"Yard Talk",options:{}}}),MessagesCollection=Backbone.Collection.extend({model:Message,url:"http://tiny-pizza-server.herokuapp.com/collections/messages",initialize:function(){console.log("initializing collection")}}),FriendView=Backbone.View.extend({className:"friend-item",createTemplate:_.template($("#friend-template").text()),initialize:function(){$(".js-friends-list").prepend(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes)),this.$el.find(".js-friend-timestamp").html(new Date(parseInt(this.$el.find(".js-friend-timestamp").html())).toLocaleTimeString())}}),preLoadedFriendView=Backbone.View.extend({className:"friend-item",createTemplate:_.template($("#friend-template").text()),initialize:function(){$(".js-friends-list").append(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes)),this.$el.find(".js-friend-timestamp").html(new Date(parseInt(this.$el.find(".js-friend-timestamp").html())).toLocaleTimeString())}}),MessageView=Backbone.View.extend({className:"message-unit",createTemplate:_.template($("#message-template").text()),initialize:function(){$(".js-message-list").prepend(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes)),this.$el.find(".js-timestamp").html(new Date(parseInt(this.$el.find(".js-timestamp").html())).toLocaleTimeString())}}),preLoadedMessageView=Backbone.View.extend({className:"message-unit",createTemplate:_.template($("#message-template").text()),initialize:function(){$(".js-message-list").append(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes)),this.$el.find(".js-timestamp").html(new Date(parseInt(this.$el.find(".js-timestamp").html())).toLocaleTimeString())}}),UserView=Backbone.View.extend({className:"user-item",createTemplate:_.template($("#user-template").text()),events:{"click .js-submit-btn":"submitMessage","focus .js-msg-input":"expandField"},initialize:function(){$(".js-user-panel").html(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes))},expandField:function(){$(".js-msg-input").toggleClass("expand")},submitMessage:function(){$(".js-msg-input").toggleClass("expand");var a=$(".js-msg-input").val(),b=$(".user-name-title").find("h2").html(),c=new Message({messageText:a,username:b});messages.add(c),new MessageView({model:c}),c.save(),$(".js-msg-input").val("Write your message here")}});$(document).ready(function(){window.messages=new MessagesCollection,setInterval(function(){messages.fetch({success:function(){$(".js-message-list").empty(),messages.each(function(a){new preLoadedMessageView({model:a})}),console.log("fetching")},error:function(a,b){console.log(b.description)}})},1e4),$(".jumbotron").on("click",".js-login-btn",function(){$(".js-content").toggleClass("hidden"),$(".jumbotron").toggleClass("hidden");var a=$(".js-username-login").val(),b=new Message({username:a});new UserView({model:b})})});