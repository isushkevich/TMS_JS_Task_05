"use strict";


// 1: Клиенты
const clients = [{
        name: 'Marta',
        balance: 100,
        age: 23,
        alcoholName: 'martini',
        alcoholCount: 3
    },
    {
        name: 'Bob',
        balance: 100,
        age: 16,
        alcoholName: 'vodka',
        alcoholCount: 3
    },
    {
        name: 'Jessica',
        balance: 80,
        age: 32,
        alcoholName: 'beer',
        alcoholCount: 15
    },
    {
        name: 'Richard',
        balance: 60,
        age: 53,
        alcoholName: 'whiskey',
        alcoholCount: 4
    },
    {
        name: 'Sally',
        balance: 200,
        age: 24,
        alcoholName: 'wine',
        alcoholCount: 5
    },
    {
        name: 'Martin',
        balance: 50,
        age: 19,
        alcoholName: 'martini',
        alcoholCount: 4
    },
    {
        name: 'Anna',
        balance: 75,
        age: 35,
        alcoholName: 'vodka',
        alcoholCount: 10
    },
    {
        name: 'Conan',
        balance: 130,
        age: 42,
        alcoholName: 'beer',
        alcoholCount: 10
    },
    {
        name: 'Steve',
        balance: 35,
        age: 20,
        alcoholName: 'whiskey',
        alcoholCount: 2
    },
    {
        name: 'Claudia',
        balance: 65,
        age: 17,
        alcoholName: 'wine',
        alcoholCount: 2
    }
];


// 2: Цены
const alcoholStorage = {
    martini: 12.3,
    vodka: 8.4,
    beer: 1.8,
    whiskey: 15.5,
    wine: 7.5
}


// INIT
function INIT(arr) {
    arr.forEach(person => checkCustomer(person));
}


// 3. Функция, принимающая покупателя
const checkCustomer = customer => {
    let priceOfOne = pricePerBottle(customer.alcoholName);
    let totalOrder = priceTotal(customer.alcoholCount, priceOfOne);
    let canDrink = isLegalDrinkingAge(customer.age);
    let canBuy = isAbleToBuy(customer.balance, totalOrder);

    if (canDrink && canBuy) {
        customer.balance -= totalOrder;
        console.log(`${customer.name}, here's your order: ${customer.alcoholName.toUpperCase()} in a quantity of ${customer.alcoholCount} bottles. You're charged $${totalOrder}.`);
    } else if (!canDrink) {
        console.log(`Sorry ${customer.name}, you are under the legal drinking age (${customer.age}).`);
    } else {
        console.log(`Sorry ${customer.name}, you need $${totalOrder}, but only have $${customer.balance}.`);
    }
}

// 4. Проверка возраста
const isLegalDrinkingAge = age => age >= 18;

// 5. Стоимость алкоголя за штуку
const pricePerBottle = alcName => alcoholStorage[alcName];

// 6. Стоимость алкоголя за несколько бутылок
const priceTotal = (quantity, price) => Number((quantity * price).toFixed(2));

// 7. Хватит ли денег
const isAbleToBuy = (balance, price) => balance >= price;


INIT(clients);