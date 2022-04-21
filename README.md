# Code 201 LAB - 06

## Cookie-stand
I built an app with a direct and powerful purpose. It does all of the things that it accomplishes well. I should describe the purpose and functionality so those that visit my README understand the app

### Author: Vida Powell

### Links and Resources
* [Setting Up a New 201 Code Project](https://codefellows.github.io/code-201-guide/curriculum/class-02/project-setup)
* [README Template](https://codefellows.github.io/code-201-guide/curriculum/class-02/README-template.html)
* [Eric Meyer's reset.css](https://meyerweb.com/eric/tools/css/reset/)

### Reflections and Comments
* How did this go, overall?
4/11/2022: I've spent over an hour just reading through the specs and initial setup documentation then another chunk of time breaking the project down and planning out the work. I was not expecting this much of a time sink on the front end but hopefully it pays off with things progressing more smoothly tomorrow.

* What observations or questions do you have about what you’ve learned so far?
4/11/2022: I don't yet have any observations or questions, I've just not gotten far enough into the project for that yet at this point but I'll revisit the question when I re-submit.

* How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
4/11/2022: This project is far from complete; hopefully I'll get some more of it done in the morning before class. I'll revisit the question upon re-submitting.

4/12/2022 AM: At the end of day 1 I had the code setup below; the next morning I reviewed a couple of Constructor Function vids on youtube and see that I can re-work this to something much cleaner by employing Constructor Functions (yesterday's lecture that struck me as being akin "off the boat you go *shove!*" swimming lesson). 

'use strict'

var seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  ranCustPerHour: function (minHourlyCustomers,maxHourlyCustomers,avgCookiesPerCust) {
    return (math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) * this.avgCookiesPerCust);
  }
}
  console.log(`shoe`); //test

// var tokyo = {
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   avgCookiesPerCust: 1.2,
//   ranCustomersPerHour: ,
// }

// var dubai = {
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   avgCookiesPerCust: 3.7,
//   ranCustomersPerHour: ,
// }

// var paris = {
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   avgCookiesPerCust: 2.3,
//   ranCustomersPerHour: ,
// }

// var lima = {
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   avgCookiesPerCust: 4.6,
//   ranCustomersPerHour: ,
// }

