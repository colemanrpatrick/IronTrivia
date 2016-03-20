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
var DashboardView = require('./dashboardView');
var GameCollection = require('./gameCollection');
var GameCollectionView = require('./gameCollectionView');
var GameContainerView = require('./gameContainerView');

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
    if(sessionStorage.getItem('userID')) {
      var GameContView = new GameContainerView();
      this.renderSubview(GameContainerView);
    }
  },
  dashboard: function(){
    if(sessionStorage.getItem('userID')){
      var DashView = new DashboardView();
      this.renderSubview(DashView);
    }
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
