#!/usr/bin/env node
'use strict';
const ora = require('ora');
const chalk = require('chalk');
const colors = require('colors');
const open = require('opener');
const emoji = require('node-emoji');

// Used italian language for these two var
// to avoid var conflicts

// Month
const mese = require('./libs/month');
// Festivity
const festa = require('./libs/festivity');

// Declaring
var d, today, month, year;

// Asssigning
d = new Date();
today = d.getDate();
year = d.getFullYear();

var status = false;

var spinner = new ora({
  text: 'Getting festivities...',
  spinner: 'dots',
  color: 'yellow'
});

spinner.start();


if ( mese() == festa('christmas').month && today == festa('christmas').day ) {
  setTimeout(function () {
    spinner.text = "🎅🏼 Ho! Ho! Ho!" + " It's " + "Christmas! ".bold;
    spinner.succeed()
    status = true;
  }, 500);
} else if ( mese() == festa('halloween').month && today == festa('halloween').day) {
  setTimeout(function () {
    spinner.text = "👻💀" + " It's HALLOWEEN! " + "💀👻";
    spinner.succeed()
    status = true;
  }, 500);
} else if ( mese() == festa('valentines').month && today == festa('valentines').day) {
  setTimeout(function () {
    spinner.text = "Love is in the air... 💝" ;
    spinner.succeed();
    status = true;
  }, 500);
} else if ( mese() == festa('epifany').month && today == festa('epifany').day) {
  setTimeout(function () {
    spinner.text = "📯 It's epifany! 📯";
    spinner.succeed();
    status = true;
  }, 500);
} else if ( mese() == festa('newyear').month && today == festa('newyear').day) {
  setTimeout(function () {
    spinner.text = "Happy new year! It's " + year + "!!!";
    spinner.succeed();
    status = true;
  }, 500);
} else {
  spinner.text = "Oh no... It's a common day...";
  spinner.fail()
}
