// Закусочная
// Сеть фастфудов предлагает несколько видов гамбургеров:
//
//  маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
////
// Гамбургер может быть с одним из нескольких видов начинок:
//
//     сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
//
//// Можно добавить добавки:
//
//     посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).
////
// Напишите программу, расчитывающую стоимость и калорийность гамбургера.
//
//     Пример работы кода:
//
// // маленький гамбургер с начинкой из сыра
//     var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

Hamburger.SIZE_SMALL = {
    'price': 50,
    'calories': 20
};
Hamburger.SIZE_BIG = {
    'price': 100,
    'calories': 40
};
Hamburger.STUFFING_CHEESE = {
    'price': 10,
    'calories': 20
};
Hamburger.STUFFING_SALAD = {
    'price': 20,
    'calories': 5
};
Hamburger.STUFFING_POTATO = {
    'price': 15,
    'calories': 10
};
Hamburger.TOPPING_MAYO = {
    'price': 20,
    'calories': 5
};
Hamburger.TOPPING_SPICE = {
    'price': 15,
    'calories': 0
};

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    this.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    this.getToppings = function () {
        return this.toppings;
    };
    this.getSize = function () {
        return this.size;
    };
    this.getStuffing = function () {
        return this.stuffing;
    };

    this.calculatePrice = function () {
        var size = this.getSize();
        var price = size['price'];

        var stuffing = this.getStuffing();
        price += stuffing['price'];

        var toppings = this.getToppings();
        toppings.forEach(function(item) {
            price += item['price'];
        });
        // for (var i = 0; i < this.toppings.length; i++) {
        //     var toppings = this.getToppings();
        //
        //     price+=toppings[i].price;
        // }
        return price;
    };
    this.calculateCalories = function () {
        var size = this.getSize();
        var calories = size['calories'];

        var stuffing = this.getStuffing();
        calories += stuffing['calories'];

        for (var i = 0; i<this.toppings.length; i++) {
            var toppings = this.getToppings();
            calories+= toppings[i].calories;
        }
        return calories;
    };
}

// // маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
hamburger.addTopping (Hamburger.TOPPING_MAYO);
// console.log(hamburger.toppings);
// // спросим сколько там калорий
console.log("Calories: " + hamburger.calculateCalories());
// // сколько стоит
console.log("Price: " + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger.toppings);
// console.dir(hamburger.addTopping(Hamburger.TOPPING_SPICE));
// // А сколько теперь стоит?
console.log("Price with spice: " + hamburger.calculatePrice());













