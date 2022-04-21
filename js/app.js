"Use strict"

let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

let seattleData = ['Seattle', 23, 65, 6.3];
let tokyoData = ['Tokyo', 3, 24, 1.2];
let dubaiData = ['Dubai', 11, 38, 3.7];
let parisData = ['Paris', 20, 38, 2.3];
let limaData = ['Lima', 2, 16, 4.6];

let locationCatalog = [seattleData, tokyoData, dubaiData, parisData, limaData]
let allStores = [];

function StoreConstructor(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.simulatedCookiesPurchasedEachHour = [];
    this.randomCustomersPerHour = [];
    this.grandTotalCookies = [];
    allStores.push(this);
};

StoreConstructor.prototype.generateRandomCustomersPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let customersPerHour = Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
        this.randomCustomersPerHour.push(Math.floor(customersPerHour));
    }
};

StoreConstructor.prototype.generateSimulatedCookiesPurchasedEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let cookiesPerHour = (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer);
        this.simulatedCookiesPurchasedEachHour.push(Math.floor(cookiesPerHour));
    }
};

StoreConstructor.prototype.generateGrandTotalCookies = function () {
    let totalCookieAccumulator = 0;
    for (let i = 0; i < hours.length; i++) {
        totalCookieAccumulator += this.simulatedCookiesPurchasedEachHour[i];
    }
    this.grandTotalCookies.push(totalCookieAccumulator);
};

locationCatalog.forEach(location => {
    new StoreConstructor(location[0], location[1], location[2], location[3]);
})
console.log(allStores);

allStores.forEach(store => {
    store.generateRandomCustomersPerHour()
    store.generateSimulatedCookiesPurchasedEachHour()
    store.generateGrandTotalCookies()
})

// This is how we push all this info over to the Sales.html sheet

const storeDataContainer = 0;
const article = 0;
const storeName = 0;
const ulElem = 0;
const liElem = 0;
const liElem2 = 0;

// // seattle -- turn this into a loop
// for (let i = 0; i < storeLocations; i++) {
//     storeDataContainer = document.getElementById(storeLocations[i]);
//     article = document.createElement('article');
//     storeDataContainer.appendChild(article);
//     storeName = document.createElement("h3");
//     article.appendChild(TitleCase(storeLocations[i]));
//     (TitleCase(storeLocations[i])).textContent = (storeLocations[i]).name;
//     ulElem = document.createElement('ul');
//     article.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//         liElem = document.createElement('li');
//         ulElem.appendChild(liElem);
//         liElem.textContent = hours[i] + ": " + seattle.simulatedCookiesPurchasedEachHour[i] + " cookies";
//     }
//     const liElem2 = document.createElement('li');
//     ulElem.appendChild(liElem2);
//     liElem2.textContent = "Total: " + seattle.grandTotalCookies + " cookies";
// };