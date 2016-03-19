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
  newGameForm: [
    '<div class="col-sm-6 col-sm-offset-3">',
      '<button name="to-new-game-form">Create game</button>',
      '<form class="new-game-form hide">',
        '<input type="text" name="player-1" placeholder="player 1">',
        '<input type="text" name="player-2" placeholder="player 2">',
        '<input type="text" name="player-3" placeholder="player 3">',
        '<button name="submit-new-game" type="submit">Submit</button>',
      '</form>',
    '</div>'
  ].join('')
};
