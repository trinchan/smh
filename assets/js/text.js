(function() {
  var messages = [
    {from: 'left', text: 'Hey man, how you holding up?'},
    {from: 'right', text: 'I just can\'t get over her Ted'},
    {from: 'left', text: 'Mmmm that\'s tough'},
    {from: 'right', text: 'Like she was the one', pause: 200},
    {from: 'left', text: 'Oh totes she was the one'},
    {from: 'right', text: 'But now she\'s not the one', pause: 200},
    {from: 'left', text: 'Yeah no, she\'s not the one. Never could be'},
    {from: 'right', text: 'But I want her to be the one', pause: 200},
    {from: 'left', text: 'She\'d be a great one'},
    {from: 'right', text: 'I just still miss her'}
  ];
  function nextMessage() {
    var message = messages.shift();
    var className = 'bubble' + (message.from === 'left' ? '' : ' bubble-alt');
    document.getElementById('mainText').innerHTML += '<div class="' + className + '">' +
                                                        '<div class="textLoad"></div>' +
                                                    '</div>';
    setTimeout(function() {
      var bubbles = document.getElementsByClassName(className);
      bubbles[bubbles.length - 1].textContent = message.text;
      if (messages.length) {
        setTimeout(nextMessage, messages[0].pause || (4 * Math.random() * 1000));
      }
    }, (message.text.length / 15) * 1000);
  }
  setTimeout(function() {
    document.getElementById('mainText').textContent = '';
    nextMessage();
  }, 10 * 1000);
}());
