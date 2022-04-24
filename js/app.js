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
    //   this.tableReadout = renderToDom(); -did not work
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

// Code Fellows TA Justin helped me with these next two arrow functions

locationCatalog.forEach(location => {
    new StoreConstructor(location[0], location[1], location[2], location[3]);
})
console.log(allStores);

StoreConstructor.prototype.renderToDom = function () {
    // get on screen
    const containerElem = document.getElementById('franchiseLocations');

    // article
    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    // heading = this prints the name of the store location
    const headingElem = doument.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.name;

    // ul
    const ulElem = docment.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i = 0; i < this.hours.length; i++) {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const timeSlot = hours[i];
        const cookiesSoldThisHour = this.simulatedCookiesPurchasedEachHour[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }
    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.grandTotalCookies;
};

allStores.forEach(store => {
    store.generateRandomCustomersPerHour()
    store.generateSimulatedCookiesPurchasedEachHour()
    store.generateGrandTotalCookies()
    store.renderToDom()  // calling this function here did not work and I don't know why!!! HELP!!!
});