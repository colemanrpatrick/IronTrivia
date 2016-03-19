module.exports = {
  question: [
      '<div class="col-sm-8">',
        '<%=question%>',
      '</div>',
  ].join(''),
  loginForm: [
    '<div class="col-sm-6 col-sm-offset-3">',
      '<form class="login">',
        '<input name="username" type="text" placeholder="User Name">',
        '<input name="password" type="password" placeholder="Password">',
        '<button name="login">Login</button>',
      '</form>',
    '</div>'
  ].join(''),
  addForm: [
    '<div class="col-sm-6 col-sm-offset-3">',
      '<button class="to-adduser" name="newUser">New User</button>',
      '<form class="addUser hide">',
        '<input name="username" type="text" placeholder="User Name">',
        '<input name="password" type="password" placeholder="Password">',
        '<input name="passwordConfirm" type="password" placeholder="Confirm Password">',
        '<button name="addUser">Add User</button>',
      '</form>',
    '</div>'
  ].join('')
}
