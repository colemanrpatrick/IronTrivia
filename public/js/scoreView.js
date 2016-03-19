var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
module.exports = Backbone.View.extend({
  tagName: '.userBar',
  temp: _.template(temp.score),
  init: function () {},

  render: function () {
    var toDom = this.template(this.model.toJSON());
    this.$el.html(toDom);
    return this;
  }

});
