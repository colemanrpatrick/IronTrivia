var Backbone = require('backbone');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');
var QuestionModel = require('./questionModel');
var QuestionView = require('./questionView');
var LoginModel = require('./loginModel');
var LoginView = require('./loginView');
var UserModel = require('./userModel');
var AddUserView = require('./addUserView');

module.exports = Backbone.Router.extend({
  subview:null,
  routes:{
    "":"home",
    "home":"home",
    "game": "game"
  },
  home:function(){
    var LogView = new LoginView();
    var AddUsrView = new AddUserView();
    this.renderSubview(LogView);
  },
  game: function(){
    var QModel = new QuestionModel();
    QModel.fetch().then((function(data){
      this.renderSubview(new QuestionView({model: QModel}));
    }).bind(this));
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
