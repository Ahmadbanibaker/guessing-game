'use strict';
let correct = 0;
let userwelcome = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcome);
 function knowme(){
let knowme = prompt ('Do we know each other ?');
switch(knowme.toLowerCase()) {
    case 'yes':
      alert ('Glad to hear about you ');
      correct++;
     // console.log(knowme);
      break;
    case'no':
      alert('I whish that we can know each other ');
     // console.log(knowme);
      break;
    default:
      alert('You did not answer ');
      //console.log(knowme);
  }
}
knowme();
function likemansaf(){
  let likemansaf = prompt ('Do you think I like mansaf? ');
switch(likemansaf.toLowerCase()) {
    case 'yes':
      alert (' yes , who does not like it ^-^  ');
      correct++;
     // console.log(like);
      break;
    case 'no':
      alert(' actuallay , I do like mansaf alot ');
     // console.log(like);
      break;
    default:
      alert('You did not answer :(');
      //console.log(like);
  }
}
  likemansaf();
  function likemansaf(){
  let likefootball = prompt ('Do you think I watch football ?  ');
  switch(likefootball.toLowerCase()) {
      case 'yes':
        alert ('That is right , actually I am a big fan ');
        correct++;
       // console.log(learn);
        break;
      case 'no':
        alert(' actually I am a big fan :) ');
       // console.log(learn);
        break;
      default:
        alert('You did not answer ');
        //console.log(learn);
    }
  }
  likemansaf();
  function likewinter(){
    let likewinter =prompt ('Do you think I like winter season ? ');
    switch(likewinter.toLowerCase()) {
        case 'yes':
          alert ('yes I do , it is much better than summer for me :) ');
          correct++;
         // console.log(thing);
          break;
        case 'no':
          alert(' sorry , I do like winter ');
         // console.log(thing);
          break;
        default:
          alert('You did not answer ');
          //console.log(thing);
      }
    }
    likewinter();
    function likemovies(){
      let likemovies = prompt('Do you thinck I like movies or not ?  ');
    switch(likemovies.toLowerCase()) {
        case 'yes':
          alert (' yes , I like them ^-^  ');
          correct++;
         // console.log(last);
          break;
        case 'no':
          alert(' unfortunately I do like them ');
         // console.log(last);
          break;
        default:
          alert('You did not answer : (');
          //console.log(last); 
      }
    }
    likemovies();

      alert('Thanks for your answers :) '+ userwelcome); 

      function guessnumber(){
      let guess = prompt('Guess a number between 1 and 10');
      let numGuess = Number(guess);
      let answer = 7;
      

      for (let i = 0; i < 4; i++ ){
        if (answer === numGuess){
          alert('That is correct')
          correct++;
          break;
        } else if (numGuess < answer){
          numGuess = parseInt(prompt('Too low, guess again'));
        }else 
        numGuess = parseInt(prompt('That is too high, guess again'));
      }
        alert('The correct answer is 7')
    }
    guessnumber(); 
      
      
function favfood(){
  let favfood = ['mansaf', 'mushi', 'shawarma', 'dolma', 'pizza','pasta']

  for(let y = 0; y < 6; y++){
    let foodGuess = prompt ('Can you guess my favorite food ?');
    if (favfood.includes( foodGuess)){
      alert('You are correct ');
      correct++;
      break;
    }else{
      alert('sorry , please try again');
    }
  }
}
favfood();

alert('You got ' + correct + '/7');