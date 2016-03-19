
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var scoreModel = require('./scoreModel');

modules.exports = backbone.View.extend({
  el: '.userBar',
  initialize: function () {
    this.addAll();
  },

  addOne: function (el) {
      var modelView = new scoreView({model: el});
      this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});

})
