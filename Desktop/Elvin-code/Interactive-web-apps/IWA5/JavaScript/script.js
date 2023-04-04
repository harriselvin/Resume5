const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
const RSA_SHIPPING = 400;
const NAM_SHIPPING = 600;
const OTHER_SHIPPING = 800;
const MIN_COST_FREE_SHIPPING = 1000;

let location = 'RSA';
let currency = 'R';
let customers = 1;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let shipping = null;
let totalCost = shoes + toys + shirts + batteries + pens;

if (location === 'RSA') {
  shipping = RSA_SHIPPING;
  if (totalCost >= MIN_COST_FREE_SHIPPING && customers === 1) {
    shipping = 0;
  }
} else if (location === 'Namibia') {
  shipping = NAM_SHIPPING;
  if (totalCost >= MIN_COST_FREE_SHIPPING && customers === 1) {
    shipping = 0;
  }
} else if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = OTHER_SHIPPING;
}

if (shipping === 0 && customers !== 1 ? console.log(FREE_WARNING) : console.log('Price:', currency, totalCost + shipping));
