module.exports = {
  header:[
    '<div class="container">',
      '<span><%= username %></span>',
      '<button>logout</button>',
    '</div>'
  ].join(""),
  question: [
      '<div class="col-sm-8">',
        '<%=question%>',
      '</div>',
  ].join(''),
  loginForm: [
    '<div class="col-md-6 col-md-offset-3">',
      '<form class="login form-group">',
        '<input class="col-md-12 col-sm-12 col-xs-12" name="username" type="text" placeholder="User Name">',
        '<input class="col-md-12 col-sm-12 col-xs-12" name="password" type="password" placeholder="Password">',
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
    '<div class="col-md-6 col-md-offset-3">',
      '<button name="newUser">Sign Up</button>',
      '<form class="addUser form-group hide">',
        '<input class="col-md-12 col-sm-12 col-xs-12" name="username" type="text" placeholder="User Name">',
        '<input class="col-md-12 col-sm-12 col-xs-12" name="password" type="password" placeholder="Password">',
        '<input class="col-md-12 col-sm-12 col-xs-12" name="passwordConfirm" type="password" placeholder="Confirm Password">',
        '<button name="addUser">Add User</button>',
      '</form>',
    '</div>'
  ].join(''),
  login: [
    '<h1>Iron Trivia</h1>',
    '<div class="loginForm row"></div>',
    '<div class="addUserForm row"></div>'
  ].join(''),
  dashView: [
    '<div class="join-game-container row"></div>',
    '<div class="add-game-container row"></div>'
  ].join(''),
  newGameForm: [
    '<div class="col-md-6 col-md-offset-3">',
      '<button name="to-new-game-form">Create game</button>',
      '<form class="new-game-form form-group hide">',
        '<input class="col-md-12 col-sm-12 col-xs-12" type="text" name="player-1" placeholder="player 1">',
        '<input class="col-md-12 col-sm-12 col-xs-12" type="text" name="player-2" placeholder="player 2">',
        '<input class="col-md-12 col-sm-12 col-xs-12" type="text" name="player-3" placeholder="player 3">',
        '<button name="submit-new-game" type="submit">Submit</button>',
      '</form>',
    '</div>'
  ].join(''),
  joinGame: [
    '<article>',
      '<h2>game id: <%= id %></h2>',
      '<h3>Players:</h3>',
      '<% _.each(scoreList, function(el, idx) {)',
      '<p><%= el.user %></p>',
      '<% }) %>',
      '<button>join game</button>',
    '</article>'
  ].join('')
};
