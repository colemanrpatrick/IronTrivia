var Backbone = require('backbone');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');

module.exports = Backbone.Router.extend({
  subview:null,
  routes:{
    "":"home",
    "home":"home"
  },
  home:function(){
    // write home function in here
    },
    renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
});
