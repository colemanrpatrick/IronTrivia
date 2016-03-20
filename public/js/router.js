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
var UserModel = require('./userModel');

module.exports = Backbone.Router.extend({
  subview:null,
  routes:{
    "":"home",
    "home":"home",
    "dashboard": "dashboard",
    "game": "game",
    "score": "score"
  },
  home:function(){
    var LogContView = new LoginContainerView();
    this.renderSubview(LogContView);
  },
  game: function(){
    if(sessionStorage.getItem('user')) {
      var GameContView = new GameContainerView();
      this.renderSubview(GameContainerView);
    }
  },
  dashboard: function(){
<<<<<<< HEAD
    console.log("this works!");
    this.renderSubview();
    console.log("this works!");

    var user = new UserModel({});
    user.fetch({id: sessionStorage.getItem('userID')});
    console.log(user);
    var DashView = new DashboardView({activeUser: user});
    this.renderSubview(DashView);

=======
    if(sessionStorage.getItem('user')){
      var DashView = new DashboardView();
      this.renderSubview(DashView);
    }
>>>>>>> 7d462b9b61d071a137a847a3330410a275b6e989
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
