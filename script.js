console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach (function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'cyan') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'black';

    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'black';

    }
    if (e.target.id === 'slate') {
      body.style.backgroundColor = 'slategray';
      body.style.color = 'white';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'rgb(223, 223, 110)';
      body.style.color = 'black';

    }

    if (e.target.id === 'pink') {
      body.style.backgroundColor = 'rgb(235, 72, 145)';
      body.style.color = 'white';
    }

    if (e.target.id === 'purple') {
      body.style.backgroundColor = 'rgb(241, 98, 241)';
      body.style.color = 'black';
    
    }

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'rgb(77, 75, 75)';
      body.style.color = 'white';

    }
    
    if (e.target.id === 'green') {
      body.style.backgroundColor = 'rgb(119, 225, 119)';
      body.style.color = 'black';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'rgb(102, 102, 239)';
      body.style.color = 'white';
    }
  });
});

