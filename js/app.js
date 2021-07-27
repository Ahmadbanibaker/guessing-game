'use strict';
let userwelcome = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcome);

let knowme = prompt ('Do we know each other ?');
switch(knowme.toLowerCase()) {
    case 'yes':
      alert ('Glad to hear about you ');
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

  let likemansaf = prompt ('Do you think I like mansaf? ');
switch(likemansaf.toLowerCase()) {
    case 'yes':
      alert (' yes , who does not like it ^-^  ');
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
  let likefootball = prompt ('Do you think I watch football ?  ');
  switch(likefootball.toLowerCase()) {
      case 'yes':
        alert ('That is right , actually I am a big fan ');
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
    let likewinter =prompt ('Do you think I like winter season ? ');
    switch(likewinter.toLowerCase()) {
        case 'yes':
          alert ('yes I do , it is much better than summer for me :) ');
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
      let likemovies = prompt('Do you thinck I like movies or not ?  ');
    switch(likemovies.toLowerCase()) {
        case 'yes':
          alert (' yes , I like them ^-^  ');
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
      alert('Thanks for your answers :) '+ userwelcome); 
      function question6(){
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
    question6(); 
      
      
function question7(){
  let favfood = ['Mansaf', 'Sushi', 'shawarma', 'Dolma', 'Pizza','Pasta']

  for(let y = 0; y < 6; y++){
    let foodGuess = prompt ('Can you guess my favorite food ?');
    if (foodGuess.toLowerCase){
      alert('You are correct ');
      correct++;
      break;
    }else{
      alert('sorry , please try again');
    }
  }
}
question7();

alert('You got ' + correct + '/7');