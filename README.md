This demo show how to use the Nativescript Ably plugin

It assumes the plugin is on the same directory as the demo, by looking at ../nativescript-ably folder. 
You can clone in https://github.com/atende/nativescript-ably
You probaly need to compile the typescript source

    git clone https://github.com/atende/nativescript-ably
    git clone https://github.com/atende/nativescript-ably-demo
    cd nativescript-ably
    tsc
    cd ../nativescript-ably-demo
    


Install the things

    tns install
    tns platform add android

Run the code

    tns livesync android --watch

Get a Key in: https://jsbin.ably.io/opapoc/202/edit

The code is using JSON.stringify to send and receive messages. 

If the jsbin don't have this change, use the code below:

```
$(function() {
  var channelName = 'technology';

  function setupChat(userName) {
    var $root = $('#' + userName);
    var ably = new Ably.Realtime('I2E_JQ.IoeWDw:WrRgJ5LEUCCIm5Tp'),
        channel = ably.channels.get(channelName),
        textField = $root.find('input[type=text]'),
        sendMessage = function() {
          if (textField.val().length > 0) {
            channel.publish('chat', JSON.stringify({ msg: textField.val(), from: userName }));
            textField.val('');
            textField.blur();
          }
        };

    channel.subscribe('chat', function(message) {
      var msg = JSON.parse(message.data).msg;
      var from = JSON.parse(message.data).from
      var li = $('<li></li>').
                  text(msg).
                  append('<div class="from">' + from + '</div>').
                  append('<div class="time">' + moment(message.timestamp).format('h:mm:ss a') + '</div>');
      $root.find('ul.messages').prepend(li);
    });

    ably.connection.on('connected', function() {
      $root.find('button').text('Send').attr('disabled', false); // we are ready to chat
    });

    textField.on('keypress', function(e) {
      if(e.which === 13) sendMessage();
    });
    $root.find('button').on('click', sendMessage);
  }

  setupChat('Jack');
  setupChat('Jill');
});

```

Connect and send messages. Have fun