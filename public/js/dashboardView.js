var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var $ = require('jquery');
var DashboardAddGameView = require('./dashAddGameView');
var DashboardAddGameFormModel = require('./dashAddGameFormModel');
var UserModel = require('./userModel');
var GameCollection = require('./gameCollection');
var GameCollectionView = require('./gameCollectionView');

module.exports = Backbone.View.extend({
  activeUser: null,
  collection: null,
  el: '.dashboard',
  template: _.template(tmpl.dashView),
  initialize: function(){
    this.$el.append(this.render().el);
    var DashAddFormView = new DashboardAddGameView();
    var GameCol = new GameCollection();
    GameCol.fetch(); 
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }

});
