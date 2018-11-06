/*
  Light Switch

  1. Start by defining a variable, lights, and set it equal to the string 'on'

  2. Next, define a function, flipTheSwitch

  3. flipTheSwitch should run when #light-switch is clicked

  Add the following if/else statement within the flipTheSwitch function:

  4. If the lights === 'on'

    - Set lights = 'off'
    - Add the CSS class 'dark' to both the <body> and <button> elements

  5. Else

    - Set lights = 'on'
    - Remove the CSS class 'dark' from both the <body> and <button> elements
*/

var lights = 'on'

$('#light-switch').click(flipTheSwitch)

function flipTheSwitch (){
  if (lights === 'on') {lights = 'off'
    $('body, button').addClass('dark')
  } else {
    lights = 'on'
    $('body, button').removeClass('dark')
  }
}

/*
if(count === 5) {$('body').css('backgroundColor', 'red')
}
else if(count === 10) {$('body').css('backgroundColor', 'green')  
}
  $('p').addClass('bold-text')
{$('body').css('backgroundColor', 'green')
}

$('#light-switch').click(flipTheSwitch) 
*/
