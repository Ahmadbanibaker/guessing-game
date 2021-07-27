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
  let likefootball = prompt ('Do you like to play football  ');
  switch(likefootball.toLowerCase()) {
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