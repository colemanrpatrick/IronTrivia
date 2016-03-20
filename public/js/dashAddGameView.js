var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var $ = require('jquery');
var GameModel = require('./gameModel');
var UserModel = require('./userModel');

module.exports = Backbone.View.extend({
  activeUser: null,
  collection: null,
  el: '.add-game-container',
  template: _.template(tmpl.newGameForm),
  initialize: function(){
    this.$el.append(this.render().el);
    this.model = new GameModel({});
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    'click button[name="to-new-game-form"]': 'showForm',
    'click button[name="submit-new-game"]': 'createGame'
  },
  showForm: function(event){
    event.preventDefault();
    this.$el.find('.new-game-form').fadeIn().toggleClass('hide');
  },
  buildGameModel: function(){

    console.log();
  },
  createGame: function(event){
    event.preventDefault();
    var that = this;
    var player2 = this.$el.find('input[name="player-1"]').val();
    var player3 = this.$el.find('input[name="player-2"]').val();
    var player4 = this.$el.find('input[name="player-3"]').val();
    this.activeUser = new UserModel();
    this.activeUser.setURL(sessionStorage.getItem('userID'));
    this.activeUser.fetch().then(function(data){
      that.model.set({
        id: null,
        playerNames: [
          data.userName,
          player2,
          player3,
          player4
      ],
        scoreList: null
      });
      that.$el.find('input').val('');
      that.model.save({}, {
        error: function(error){
        console.log("Game creation Error", error);
      }, success: function(data){
        console.log("Game Created", data);
        // Backbone.history.navigate("dashboard", {trigger: true, replace: true});
      }});
    });
  }
});
