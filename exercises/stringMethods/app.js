var myString = "hello";

var hello = "hello";

var greeting = 'World';

var goodMorning = 'Hello world';
oneStirng = myString + greeting;



function upperAndLower(myString){
    return myString.toUpperCase() + myString.toLowerCase();
}

function capitalizeFirstString(myString){
    return myString[i].toUpperCase();
}

function capitalizeFirstString(hello){
    return hello.slice(0,1).toUpperCase() + hello.slice(1,2).toLowerCase();
}

function capitalizeFirstTwoLetterOfString(myString){
    return myString.slice(0,2).toUpperCase() + myString.substr(2).toLowerCase();
}

function upperFirstWord(friend){
    friend = friend.toLowerCase().split(' ');

    for(var i = 0; i < friend.length; i++){
        friend[i] = friend[i].split(' ');
        friend[i][0] = friend[i][0].toUpperCase();
        friend[i] = friend[i].join('');
    }
    return friend.join(' ');
}
upperFirstWord('hey friends! practice practice practice!');

console.log(upperAndLower(myString));
console.log(myString.indexOf('llo'));
console.log(goodMorning.indexOf(' world'));
console.log(capitalizeFirstString(hello));
console.log(goodMorning.slice(0,5));
console.log(capitalizeFirstTwoLetterOfString(myString));
console.log(myString.toUpperCase(),greeting.toLowerCase());
console.log(upperFirstWord('hey friends! practice practice practice!'));