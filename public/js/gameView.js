var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var GameModel = require('./gameModel');
var UserModel = require('./userModel');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  collection: null,
  tagName: 'article',
  className: 'game-select',
  template: _.template(templates.joinGame),
  initialize: function(){
    this.$el.append(this.render().el);
  },
  events: {
    'click button[name="join-game"]': 'joinGame'
  },
  joinGame: function(event){
    event.preventDefault();
    that = this;
    var user = new UserModel(JSON.parse(sessionStorage.getItem('user')));
    console.log(user.model);
    user.set({
      isReady: true
    });
    user.setURL(user.toJSON().id);
    user.save({},{
      error: function(error){
        console.log("UserError", error);
      },
      success: function(data){
        console.log("UserSuccess", data);
        that.model.setURL(this.model.toJSON().id);
        setInterval(500, function(){
          if(this.model.save()){
            Backbone.history.navigate("game", {trigger: true, replace: true});
          }
        });
      }
    });
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

});
