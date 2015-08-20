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

  var actOneSceneTwo = [
    {from: 'left', text: 'Hey'},
    {from: 'left', text: 'Are you there'},
    {from: 'right', text: 'Hey...'},
    {from: 'right', text: 'Yeah'},
    {from: 'left', text: 'Look I’m sorry about what I said the other night. It was wrong. I’m going through a lot right now'},
    {from: 'right', text: 'Josh we can’t do this every time. I’m sorry but it’s over.', pause: 300},
    {from: 'left', text: 'Please just give me one more chance'},
    {from: 'right', text: "It's too late. I didn’t tell you this but I got a job offer in Canada and I’m leaving next month.", pause: 200},
    {from: 'left', text: 'What really? When did you find out?'},
    {from: 'right', text: "A couple of weeks ago."},
    {from: 'left', text: "So that's it? You're just gonna leave? What about Ashley she's your best friend"},
    {from: 'right', text: "Sorry I have to go. Bye"},
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
    }, (message.text.length / 10) * 1000);
  }
  setTimeout(function() {
    document.getElementById('mainText').textContent = '';
    nextMessage();
  }, 10 * 1000);
}());
