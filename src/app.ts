import { Item } from "./item";

const elem = document.getElementById("output");
var aBook = new Item('JavaScript本', 2500);
aBook.say(elem);