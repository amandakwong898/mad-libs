var submit = $('.submit');
submit.on("click", addText);

function addText() {
  event.preventDefault();
  var story = $('.story');

  var time = $('#time').val();
  var breakfast = $('#breakfast').val();
  var location = $('#location').val();
  var transportation = $('#transportation').val();
  var adj1 = $('#adj1').val();
  var verbing = $('#verbing').val();
  var adverb = $('#adverb').val();
  var lunch = $('#lunch').val();
  var adj2 = $('#adj2').val();
  var verb = $('#verb').val();

  story.text(`This morning, I woke up at ${time} and ate ${breakfast}
    for breakfast. I got to ${location} by ${transportation}
    and saw everyone waiting for me. The people at WeWork
    looked especially ${adj1} today. They were ${verbing}
    and smiling very ${adverb}. For lunch, I ate ${lunch} and I have
    to say, it was ${adj2}. After, I went home and I could
    finally ${verb}.`);
    
    $('form').remove();

}
