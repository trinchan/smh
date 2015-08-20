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
    {from: 'right', text: 'I just still miss her'},
    {from: 'right', text: 'still miss her', pause: 3000},
    {from: 'left', text: 'I\'m here for you brother'},
    {from: 'right', text: 'But like I just don\'t know why, you know?', pause: 100},
    {from: 'right', text: 'Like if you\'re gonna exist and be there, then like why would you not do something for finding that', pause: 100},
    {from: 'left', text: 'Totally'},
    {from: 'right', text: 'You get what I\'m saying?'},
    {from: 'left', text: 'Honestly, no but that\'s alright, keep on keepin on', pause: 3000},
    {from: 'left', text: ''},
    {from: 'left', text: '', pause: 2000},
    {from: 'right', text: 'Duck my life'},
    {from: 'left', text: 'Duck?'},
    {from: 'right', text: 'Ugh autocorrect. WHY IS THE WORLD AGAINST ME?!?>!'},
    {from: 'right', text: 'AGAINST US?!', pause: 100},
    {from: 'left', text: '', pause: 2000},
    {from: 'right', text: 'still miss her'}
  ];

  var actOneSceneTwo = [
    {from: 'right', text: 'Hey'},
    {from: 'right', text: 'Are you there'},
    {from: 'left', text: 'Hey...'},
    {from: 'left', text: 'Yeah'},
    {from: 'right', text: 'Look I\'m sorry about what I said the other night. It was wrong. I\'m going through a lot right now'},
    {from: 'left', text: 'We can\'t keep doing this every time. I\'m sorry but it\'s over.', pause: 300},
    {from: 'right', text: 'Please just give me one more chance'},
    {from: 'left', text: "It's too late. I didn\'t tell you this but I got a job offer in Canada and I\'m leaving next month.", pause: 200},
    {from: 'right', text: 'What really? When did you find out?'},
    {from: 'left', text: "A couple of weeks ago."},
    {from: 'right', text: "So that's it? You're just gonna leave? What about Ashley she's your best friend"},
    {from: 'left', text: "Sorry I have to go. Bye"},
  ];

  var messageContainer = document.getElementById('mainText');

  function nextMessage() {
    var message = messages.shift();
    var className = 'bubble' + (message.from === 'left' ? '' : ' bubble-alt');
    messageContainer.innerHTML += '<div class="' + className + '">' +
                                                        '<div class="textLoad"></div>' +
                                                    '</div>';
    var typingTime = 1000 * (message.text.length ? message.text.length / 10 : Math.random() * 5);
    setTimeout(function() {
      var bubbles = document.getElementsByClassName(className);
      if (message.text) {
        bubbles[bubbles.length - 1].textContent = message.text;
      } else {
        bubbles[0].parentNode.removeChild(bubbles[bubbles.length - 1]);
      }
      messageContainer.scrollTop = messageContainer.scrollHeight;
      if (messages.length) {
        setTimeout(nextMessage, messages[0].pause || (4 * Math.random() * 1000));
      }
    }, typingTime);
  }
  setTimeout(function() {
    document.getElementById('mainText').textContent = '';
    nextMessage();
  }, 10 * 1000);
}());
