'use strict';

const restaurant = {
    name: 'Carbon',
    location: 'Pahartoli, Raozan',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 24,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex, mainIndex, time, address}) {
        console.log(`Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories);

const {name: resturantName, openingHours: hours, categories: tags} = restaurant;

console.log(resturantName, hours, tags);
const {menu = [], starterMenu: starters = []} = restaurant;

console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);


// Nested Objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o , c);