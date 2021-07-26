'use strict';
let userwelcome = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcome);

let knowme = prompt ('Do we know each other :)');
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

  let like = prompt ('Do you like programing ');
switch(like.toLowerCase()) {
    case 'yes':
      alert ('So you are one of the team  ');
     // console.log(like);
      break;
    case 'no':
      alert('I think you must re thing of it  ');
     // console.log(like);
      break;
    default:
      alert('You did not answer :(');
      //console.log(like);
  }
  let learn = prompt ('Do you like to play football  ');
  switch(learn.toLowerCase()) {
      case 'yes':
        alert ('Me Too , nice to hear that  ');
       // console.log(learn);
        break;
      case 'no':
        alert('I think you must tye it , it is good for your health  ');
       // console.log(learn);
        break;
      default:
        alert('You did not answer ');
        //console.log(learn);
    }
    let thing =prompt ('Do you thing that I made a good decision to start this way ');
    switch(thing.toLowerCase()) {
        case 'yes':
          alert ('Thanks for your encouragement ');
         // console.log(thing);
          break;
        case 'no':
          alert('I will be so happy to know why ? ');
         // console.log(thing);
          break;
        default:
          alert('You did not answer ');
          //console.log(thing);
      }
      let last = prompt('Do you like to learn about programming ? ');
    switch(last.toLowerCase()) {
        case 'yes':
          alert ('I will be  glad to Teach you  ');
         // console.log(last);
          break;
        case 'no':
          alert('I respict your choice  ');
         // console.log(last);
          break;
        default:
          alert('You did not answer : (');
          //console.log(last);
      }

      alert('Thanks for your answers :) '+ userwelcome);      