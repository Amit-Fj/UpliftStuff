"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const Ignition_1 = require("./Ignition");
//call the makeIgnition function and assign it to ignition varible
const ignition = Ignition_1.makeIgnition();
//use the ignition varible to access the startApi property of the makeIgnition function( which is also of type function)
ignition.startApi();
