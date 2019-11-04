// var myCurrentAge = prompt('How old are you?', 16);
// var teenagerStr = 'I am under 25';
// var adultStr = 'I am over 25';
// var ifResult;

// if (myCurrentAge < 25) {
// //     ifResult = teenagerStr;
// // } else {
// //     ifResult = adultStr;

// // }
// // var ternaryResult = (myCurrentAge < 25) ? teenagerStr : adultStr;
// // alert('ifResult =' + ifResult + 'when myCurrentAge =' + myCurrentAge);

// // var confirmResult = confirm(
// //     'Does it correct result ?',
// //     'Is it correct' + 'ternaryResult', ifResult, 'when myCurrentAge =', myCurrentAge);

// // console.log('ifResult equals', ifResult, 'when myCurrentAge =', myCurrentAge);
// // console.log('confirmResult', confirmResult);

// var animal = prompt('Please enter animal', 'cat')

// switch (animal) {
//     case 'cat':
//         alert('Meow Meow');
//         break;
//     case 'dog':
//         alert('Uph uph');
//         break;
//     case 'cow':
//     case 'cow subtype':
//         alert('moooo');
//         break;
//     case 'horse':
//         alert('ia ia');
//         break;




//     default:
//         alert('You are DEBIL');
//         break;
// }




var name = 'Vitalii'
name.toUpperCase();



var weekDay = prompt('Please enter week day');
var weekDayResult;
switch (weekDay) {
    case '0':

    case '7':
        weekDayResult = 'Sunday';
        break;

    case '1':
        weekDayResult = 'Monday';

        break;
    case '2':
        weekDayResult = 'Tuesday';
        break;
    case '4':
        weekDayResult = 'wedn'
        break;

    default:
        weekDayResult = 'Input is  not valid';
        break;
}
alert(weekDayResult);