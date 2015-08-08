//get date
var d = new Date();
document.getElementById("date").innerHTML = d;

// JQuery code:
$(document).ready(function() {
var cursor;
$(document).bind("ready click", function() { 
 $('#command').focus(); 
    cursor = window.setInterval(function() {
       if ($('#cursor').css('visibility') === 'visible') {
          $('#cursor').css({ visibility: 'hidden' });
          } else {
                   $('#cursor').css({ visibility: 'visible' });  
                 }  
  }, 300); // cursor blinking speed
});

$('#command').keyup(function() {
  $('input').val('');
  $('#cmd span').text($(this).val());
});
  
$('#command').blur(function() {
   clearInterval(cursor);
   $('#cursor').css({ visibility: 'visible' });    
});
  
 // disable carriage return 
$('#command').keydown(function(e){
   var s = $('#command').val();
    while (s.indexOf("\n") > -1)
     s = s.replace("\n","");
   $('#command').val(s);
});
  
  $.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
    };
  
var d = new Date();
  
 var empty = "";
 var resp1 = "contact";
 var resp2 = "ls";
 var resp3 = "whoami";
 var resp4 = "--help";
 var wopr = "WOPR";
 var Lightman1 = "Love to. How about Global Thermonuclear War?";
 var Lightman2 = "Later. Let's play Global Thermonuclear War.";
  
$(document).enterKey(function () {
  if($("#command").val() === empty){
    $("p").multiline(" ");
  } 
  else if($("#command").val() === resp1) {
    $("p").multiline("Send me an email: gabe.montalvo5@gmail.com\n\nFollow me on Twitter: @1528h\n\nGitHub: gmontalvo5416");
  }
  else if($("#command").val() === resp2) {
    $("p").multiline(d.toLocaleString() + " ~/.\n\n" + d.toLocaleString() + " ~/..");
  } 
  else if($("#command").val() === resp3) {
    $("p").text(navigator.userAgent);
  }
  else if($("#command").val() === resp4) {
    $("p").multiline("List of commands: \n\n\n- contact \n\n- whoami\n\n- WOPR");
  }
  else if($("#command").val() === wopr) {
    $("p").multiline(" ");
    type("  Shall we play a game?");
  }
  else if($("#command").val() === Lightman1) {
    type("  Wouldn't you prefer a nice game of chess?"); 
  }
  else if($("#command").val() === Lightman2) {
    type("  Fine.");
  }
  else {
      $(document).cmdError();
    }
});
  
//  backspace event 
$('html').on('keydown' , function(event) {

        if(! $(event.target).is('p')) {
            console.log(event.which);
           //event.preventDefault();
           if(event.which == 8) {
            $("p").text(" ");
         }
     }
});
  
  
  
  
  
(function( $ ){
  $.fn.cmdError = function() {

  $("p").text($("#command").val() + ": " + "Command not found");	
  
   var t = setTimeout(function() {
    $("p").fadeOut();
   }, 3000 ); 
    
   setTimeout(function() {
    $( "p" ).promise().done(function() {
    $( "p" ).text("");
    $( "p" ).fadeIn( "fast" );
    });
   }, 3000); 
    
  }; 
 })( jQuery );
  
 function type (str) {
    str = str.split('').reverse();
    !function inner () {
      var delay = Math.random() * 300 + 10;
      input.value += str.pop();
      if (str.length) setTimeout(inner, delay);
      else setTimeout(prepend, delay);
    }();
  }

function prepend (e) {
    if (e) e.preventDefault();
    var instruction = form.input.value;

form.reset();
    body.scrollTop = body.scrollHeight;
    input.focus();
  }

var body = document.body;
  var form = body.querySelector('form');
  var input =  form.querySelector('input');

});

$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        });
    });
};
