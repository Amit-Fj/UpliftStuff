import { runExpress } from "./runExpress";
import { familyRoutes } from "./routing/familyRoutes";

export function makeIgnition() {
  return {
    startApi: startApi
  };
}

function startApi() {
    //the runExpress is called here and is passed a port and another function ie. familyRoutes.
  runExpress(Number(process.env.PORT), familyRoutes);
} 