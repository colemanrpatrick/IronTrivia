var Backbone = require('backbone');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');
var QuestionModel = require('./questionModel');
var QuestionView = require('./questionView');
var LoginModel = require('./loginModel');
var LoginView = require('./loginView');
var UserModel = require('./userModel');
var AddUserView = require('./addUserView');
var LoginContainerView = require('./loginContainerView');

module.exports = Backbone.Router.extend({
  subview:null,
  routes:{
    "":"home",
    "home":"home",
    "dashboard": "dashboard",
    "game": "game"
  },
  home:function(){
    var LogContView = new LoginContainerView();
    this.renderSubview(LogContView);
  },
  game: function(){
    var QModel = new QuestionModel();
    QModel.fetch().then((function(data){
      this.renderSubview(new QuestionView({model: QModel}));
    }).bind(this));
  },
  dashboard: function(){
    this.renderSubview();
    console.log("this works!");
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
