import "./env";
import {makeIgnition} from "./Ignition";

//call the makeIgnition function and assign it to ignition varible
const ignition = makeIgnition();

//use the ignition varible to access the startApi property of the makeIgnition function( which is also of type function)
ignition.startApi();