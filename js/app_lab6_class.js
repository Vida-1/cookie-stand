'use strict'


//from class

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm']

const seattle = {
  title: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)
    let total = 0;
    for (let i=0; i< hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
//    this.randomCookiesPerHour [i] = Math.ceil(this.avgCookiesPerCust * randomCustomersPerHour))  //this is a float times an int which will result in a float
      const totalCookiesSold = Math.ceil(this.avgCookiesPerCust * randomCustomersPerHour))  //this is a float times an int which will result in a float
      this.randomCookiesPerHour [i] = cookiesSold;
      total += cookiesSold;
}
  this.totalCookiesSold = total;
//    return null; //TODO
  },
        render: function () {
            // get on screen
            const containerElem = cocument.getElementByID('cookie-stand-locations');

            // article
            const articleElem = document.createElement('article');
            containerElem.appendChild (articleElem);

            // heading
            const headingElem = coument.createElement('h2');
            articleElem.appendChild(headingElem);
            headingElem.textContent = this.title;
            
            // ul
            const ulElem = docment.createElement ('ul');
            articleElem.appendChild(ulElem);
            
            // list items
            for(let i=0; i<this.randomCookiesPerHour.length; i++) {
              const liElem= document.createElement('li');
                ulElem.appendChild(liElem);
                const timeSlot = hours[i];
                const cookiesSoldThisHour = this.randomCookiesPerHour [i];
                liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
            }
            // total sales
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            liElem.textContent = 'Total: ' + this.totalCookiesSold;
        }
};

seattle.generateRandomCookiesPerHour();
seattle.render();



function randomInRange(min,max) {
  const span = max - min + 1;  //the one is to address that Math.random never gets all the way to one -without the 1 you'll get an 'off by one' error thrown
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}

const lima = {
  title: "Lima",
  minCustomers: ,
  maxCustomers: ,
  avgCookiesPerCustomer: ,
  randomCookiesPerHour: [],
  generateRandomCookiesPerHour: function () {
    // generate values to populate randomCookiesPerHour
    // array should have slots for 6am through 7pm (and maybe totals)

    for (let i=0; i< hours.length; i++) {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      this.randomCookiesPerHour [i] = Math.ceil(this.avgCookiesPerCust * randomCustomersPerHour))  //this is a float times an int which will result in a float
    }
    return null; //TODO
  }
}

seattle.generateRandomCookiesPerHour();

// this is all my own code

// function RandomCustPerHour (){  //Constructor function


// }




//  var seattle = {
//    minHourlyCustomers: 23,  //int
//    maxHourlyCustomers: 65, // int
//    avgCookiesPerCust: 6.3, // int
//    generateRandCustPerHour: function (minHourlyCustomers,maxHourlyCustomers,avgCookiesPerCust) {  // a method to calculate the ranCustPerHour for each city
//      return (math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) * this.avgCookiesPerCust);
//    }
//  }

//  console.log(`shoe`); //test

// storeArray.push ()
//  // somehow I want to push the generated random customer per hour into storeArray []
 
// let storeArray =[`Seattle`,23,65,6.3,seaRCH,`Tokyo`,3,24,1.2,tokRCH,`Dubai`,11,38,3.7,dubRCH,`Lima`,2,16,4.6,limRCH];

// const tokyo = {
//    city: storeArray[6],
//    minHourlyCustomers: storeArray[7],
//    maxHourlyCustomers: storeArray [8],
//    avgCookiesPerCust: storeArray [9]
//    ranCustomersPerHour: tokRCH
// }

// // var dubai = {
// //   minHourlyCustomers: 11,
// //   maxHourlyCustomers: 38,
// //   avgCookiesPerCust: 3.7,
// //   ranCustomersPerHour: ,
// // }

// // var paris = {
// //   minHourlyCustomers: 20,
// //   maxHourlyCustomers: 38,
// //   avgCookiesPerCust: 2.3,
// //   ranCustomersPerHour: ,
// // }

// // var lima = {
// //   minHourlyCustomers: 2,
// //   maxHourlyCustomers: 16,
// //   avgCookiesPerCust: 4.6,
// //   ranCustomersPerHour: ,
// // }

