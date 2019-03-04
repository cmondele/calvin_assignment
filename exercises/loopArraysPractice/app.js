var computerStore = ["Staple", "walmart",
    "Target", "Best-Buy", "Apple", "V-tech", "walmart"]
var counter = 0;

for (var i = 0; i < computerStore.length; i++) {
    if (computerStore[i] === "walmart") {
        counter++;
    }

}
console.log(counter);


//====================//

function playerAge() {

    var basketBallTeam = [{
        name: "Calvin",
        age: 30,
        height: 6.0,
        weight: "170lb",
    },
    {
        name: "Jackson",
        age: 28,
        height: 6.9,
        citizenship: "spain",
    },
    {
        name: "Robert",
        age: 27,
        height: 6.0,
        weight: "170lb",
    },
    {
        name: "John Smith",
        age: 17,
        height: 6.9,
        citizenship: "spain",
    }
    ]
    for (var i = 0; i < basketBallTeam.length; i++ ){
        if(basketBallTeam[i].age < 18){
            console.log(`${basketBallTeam[i].name} Is younger than 18`)
        }else{
            console.log(`${basketBallTeam[i].name} Is greater than 17`)
        }
         // console.log(basketBallTeam[i].age);
    }

 }
 playerAge()

