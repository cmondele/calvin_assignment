var person = {
    firstName: "Calvin",
    lastName: "mondele",
    age: 30,
    education: "fine-art",
    gender: "male",
    address : {
        street: "113 Gilman Circle Apt. 3",
        city: "Colchester",
        state: "vermont",
        zipcode: 05446,
    },
    siblings:[ {
        name: "Maxi",
        age: 34,
        gender: "male",
        married: true,
    }, 
    {
        name: "Livie",
        job: "fine-artist",
        gender: "female",
        height: 5.9,
        education: {
            degree : "bachelor of art",
            major: "sculpting",
            school: "academies des beaux-arts",
            graduationYear: 2009,
            
    }
    }],  
}
fullName = `${person.firstName} ${person.lastName}`;
console.log(fullName);
console.log(person.siblings);




