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
        let customersPerHour = (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
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

StoreConstructor.prototype.renderRowToDom = function () {

    const ulElem = document.createElement('tr');
    articleElem.appendChild(ulElem);
    const liElemFirst = document.createElement('td');
    ulElem.appendChild(liElemFirst)
    liElemFirst.textContent = this.name;

    // table data cells
    for (let i = 0; i < hours.length; i++) {
        const liElem = document.createElement('td');
        ulElem.appendChild(liElem);
        const cookiesSoldThisHour = this.simulatedCookiesPurchasedEachHour[i];
        liElem.textContent = `${cookiesSoldThisHour}`;
    }

    // total sales column on the right
    const liElem = document.createElement('td');
    ulElem.appendChild(liElem);
    liElem.textContent = this.grandTotalCookies;

};


//MAIN LOGIC STARTS HERE

// Code Fellows TA Justin helped me with these next two arrow functions
locationCatalog.forEach(location => {
    new StoreConstructor(location[0], location[1], location[2], location[3]);
})
console.log(allStores);

// get on screen
const containerElem = document.getElementById("franchiseLocations");

// create a table
const articleElem = document.createElement('Table');
containerElem.appendChild(articleElem);

// create a table header
const headingElem = document.createElement('tr');
articleElem.appendChild(headingElem);

const hourDatumFirst = document.createElement('th');
headingElem.appendChild(hourDatumFirst);
hourDatumFirst.textContent = "City";

for (let i = 0; i < hours.length; i++) {
    const hourDatum = document.createElement('th');
    headingElem.appendChild(hourDatum);
    hourDatum.textContent = hours[i];
}
const hourDatumLast = document.createElement('th');
headingElem.appendChild(hourDatumLast);
hourDatumLast.textContent = "Total";

allStores.forEach(store => {
    store.generateRandomCustomersPerHour();
    store.generateSimulatedCookiesPurchasedEachHour();
    store.generateGrandTotalCookies();
    store.renderRowToDom();
});

// create a table footer
// const footerElem = document.createElement('tfoot');
// .appendChild(footerElem);
// footerElem.textContent('this is the footer');                                      // PLACEHOLDER TEXT WRITE FXN FOR THIS 


//alternate strategy psuedocode
//populate store information to all stores  (ln 48 - 53 - globally being
//  create table (ln 54-59)
//  create a header row (doesnt exist yet but likely starts at 61 - 64)
//  for each store in allstores (ln 91-96)
//      create a row (ln 95 renderRowToDom)
//      populate name and hours as cell data (see render row to dom function)
//      populate cookies total as final cell in row (see end of render row to dom function)
//  create final row with totals (doesnt exist yet)



    // // list items -- junk pile
    // for (let i = 0; i < hours.length; i++) {
    //     const liElem = document.createElement('td');
    //     ulElem.appendChild(liElem);
    //     const storeName = this.name;
    //     const timeSlot = hours[i];
    //     const cookiesSoldThisHour = this.simulatedCookiesPurchasedEachHour[i];
    //     liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
