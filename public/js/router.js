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
    var user = new UserModel({});
    user.setURL(sessionStorage.getItem('userID'));
    user.fetch();
    console.log(user);
    var DashView = new DashboardView({activeUser: user});
    this.renderSubview(DashView);
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
