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
        '<button class="login-button" name="login">Login</button>',
      '</form>',
    '</div>'
  ].join(''),
  userTemp:[
    "<div>",
    "<%= username =%>",
    "<%= score =%>",
    "</div>"
  ].join(''),
  addForm: [
    '<div class="col-sm-6 col-sm-offset-3">',
      '<button name="newUser">create an account</button>',
      '<form class="addUser hide">',
        '<input name="username" type="text" placeholder="User Name">',
        '<input name="password" type="password" placeholder="Password">',
        '<input name="passwordConfirm" type="password" placeholder="Confirm Password">',
        '<button name="addUser">Add User</button>',
      '</form>',
    '</div>'
  ].join(''),
  login: [
    '<div class="loginForm row"></div>',
    '<div class="addUserForm row"></div>'
  ].join(''),
  dashView: [
    '<div class="join-game-container row"></div>',
    '<div class="add-game-container row"></div>'
  ].join(''),
};
