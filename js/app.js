"Use strict"

let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

let seattleData = ['Seattle', 23, 65, 6.3];
let tokyoData = ['Tokyo', 3, 24, 1.2];
let dubaiData = ['Dubai', 11, 38, 3.7];
let parisData = ['Paris', 20, 38, 2.3];
let limaData = ['Lima', 2, 16, 4.6];

let locationCatalog = [seattleData, tokyoData, dubaiData, parisData, limaData]
let allStores = [];
let hourlyFranchiseSalesArr = [];

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

    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    const cellDataFirst = document.createElement('td');
    tableRow.appendChild(cellDataFirst)
    cellDataFirst.textContent = this.name;

    // table data cells
    for (let i = 0; i < hours.length; i++) {
        const cellDataElem = document.createElement('td');
        tableRow.appendChild(cellDataElem);
        const cookiesSoldThisHour = this.simulatedCookiesPurchasedEachHour[i];
        cellDataElem.textContent = `${cookiesSoldThisHour}`;
    }

    // total sales column on the right
    const storeTotalDatum = document.createElement('td');
    tableRow.appendChild(storeTotalDatum);
    storeTotalDatum.textContent = this.grandTotalCookies;
};

// Code Fellows TA Justin helped me with the two arrow functions used in this code base
locationCatalog.forEach(location => {
    new StoreConstructor(location[0], location[1], location[2], location[3]);
})
console.log(allStores);

// get on screen
const containerElem = document.getElementById("franchiseLocations");

// create a table
const table = document.createElement('Table');
containerElem.appendChild(table);

// create a table header
const headingElem = document.createElement('tr');
table.appendChild(headingElem);

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


// footer row 
// find the sum of each hour's sales across all franchise locations 
// then plug each hourly sum into a table data cell

// with EXTREME thanks to my sister for helping me figure out how to structure this nested loop and noodle out the greatestGrandTotal (lines 112-124)!!
for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    //find each stores generated cookies for this hour i
    allStores.forEach(store => {
        sum += store.simulatedCookiesPurchasedEachHour[i];
    });
    hourlyFranchiseSalesArr.push(sum);
}

let greatestGrandTotal = 0;
for (let i = 0; i < hourlyFranchiseSalesArr.length; i++) {
    greatestGrandTotal += hourlyFranchiseSalesArr[i];
};

const hourlyFranchiseSalesRow = document.createElement('tr');
table.appendChild(hourlyFranchiseSalesRow);

const hourlyFranchiseSalesLabel = document.createElement('th');
hourlyFranchiseSalesRow.appendChild(hourlyFranchiseSalesLabel);
hourlyFranchiseSalesLabel.textContent = "Totals";

for (let i = 0; i < hours.length; i++) {
    const hourlyFranchiseSales = document.createElement('th');
    hourlyFranchiseSalesRow.appendChild(hourlyFranchiseSales);
    hourlyFranchiseSales.textContent = hourlyFranchiseSalesArr[i];
}

const grandestTotalSoldElem = document.createElement('th');
hourlyFranchiseSalesRow.appendChild(grandestTotalSoldElem);
grandestTotalSoldElem.textContent = greatestGrandTotal;

// Lab 9 stuff here -- add a button, add event & event handling to add a new store

function clickHandler() {
    alert("I was clicked");
}
const buttonElem = document.getElementById('addNewStoreBtn');
buttonElem.addEventListener('click', clickHandler);