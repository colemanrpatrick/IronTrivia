var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates');
var $ = require('jquery');
var UserModel = require('./userModel');
var GameCollection = require('./gameCollection');
var GameCollectionView = require('./gameCollectionView');
var QuestionModel = require('./questionModel');
var QuestionView = require('./questionView');

module.exports = Backbone.View.extend({
  activeUser: null,
  collection: null,
  el: '.dashboard',
  template: _.template(template.gameView),
  initialize: function(){
    this.$el.append(this.render().el);
    var QModel = new QuestionModel();
    QModel.fetch().then((function(data){
      var QView = new QuestionView({model: QModel});
    }).bind(this));
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }

});
