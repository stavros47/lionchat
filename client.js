$(function(){
  //declare variables
  var socket = io.connect();
  var $messageForm = $('#messageForm');
  var $message = $('#message');
  var $chat = $('#chat');
  var $messageArea = $('#messageArea');
  var $userFormArea = $('#userFormArea');
  var $userForm = $('#userForm');
  var $users = $('#users');
  var $username= $('#username');

  //When the message form is submitted
  $messageForm.submit(function(event){
    event.preventDefault();
    socket.emit('send message', $message.val());
    $message.val('');
  });

  //When we get new message from the server we append the new message to chat
  socket.on('new message', function(data){
    $chat.append('<div class="well">'+'<strong>'+data.user+':</strong> '+data.msg+'</div>');
  });

  //When the user form is submitted
  $userForm.submit(function(event){
    event.preventDefault();
    socket.emit('new user', $username.val(), function(data){
      if(data){
        $userFormArea.hide();
        $messageArea.show();
      }
    });
    $username.val('');
  });

  socket.on('get users', function(data){
    var html = '';
    //iterate the data(users array)
    for(i = 0; i < data.length; i++){
      html += '<li class="list-group-item">'+ data[i] +'</li>';
    }
    $users.html(html);
  });

});
