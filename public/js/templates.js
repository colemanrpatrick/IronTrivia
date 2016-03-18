module.exports = {
  question: [
      '<div class="col-sm-8">',
        '<%=question%>',
      '</div>',
  ].join(''),
  loginForm: [
    '<div class="col-sm-6 col-sm-offset-3">',
      '<form>',
        '<input name="username" type="text" placeholder="User Name">',
        '<input name="password" type="password" placeholder="Password">',
        '<button name="login">Login</button>',
        '<button name="newUser">New User</button>',
      '</form>',
    '</div>'
  ].join(''),
  userTemp:[
    "<div>",
    "<%= username =%>",
    "<%= score =%>",
    "</div>"
  ].join('')
};
