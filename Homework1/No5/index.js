const fortuneJobs = ['Actor', 'Dancer', 'Barista','Architect','Programmer','Politician'];
const fortuneCities = ['Podgorica', 'Belgrade', 'Paris', 'Moscow', 'London'];
const fortuneNames = {male: ['Janko', 'Marko', 'John', 'Henry'], female: ['Ana', 'Lana', 'Mila','Louise', 'Chloe']};
const fortuneNumber = [1,2,3,4,5,6,7,8,9,10];

function tellFortune(name,gender,years){


    for (var i = 0; i < fortuneJobs.length; i++){
        var job = fortuneJobs[Math.floor(fortuneJobs.length * Math.random())];
    };




    for (var j = 0; j < fortuneCities.length; j++){
        var city = fortuneCities[Math.floor(fortuneCities.length * Math.random())];
    };




    for (var genderName in fortuneNames ){
        if (gender === "M"){
            var genderName = fortuneNames.female[Math.floor(fortuneNames.female.length * Math.random())];
        }else if (gender === "F"){
            var genderName =  fortuneNames.male[Math.floor(fortuneNames.male.length * Math.random())];
        }
        break;
    };

    for (var l = 0; l < fortuneNumber.length; l++){
        if(years > 18){
            var number = fortuneNumber[Math.floor(fortuneNumber.length * Math.random())];
        }else if(years < 18){
            var number = fortuneNumber[Math.floor(fortuneNumber.length * Math.random())] + (18 - years);
        }
    };


    return name + ' you will be ' + job +  ' in ' +  city + ', and you will marry ' + genderName +' in ' + number + ' years.';
};

console.log(tellFortune('Novak','M',23));