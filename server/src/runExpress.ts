import * as http from "http";
import * as express from "express";
import { Router } from "express";
import * as cors from "cors";

//case of function passed around until it gets called here-----defineRoutes(router);

// the defineRoutes parameter is expecting a familyRoute function
function setupExpress(defineRoutes: (routr: Router) => void) {
  const server = express();
  const router = Router();

  //the familyRoute function is called here and was expecting a router which is given here, 
  //familyRoute function was passed around as a parameter from runExpress function
  defineRoutes(router);

  server.use("/", router);

  return server;
}

//runExpress function takes a port and a function
// So is passed a familyRoute function with a router when it is called
export function runExpress(
  port: number,
  definingRoutes: (routr: Router) => void
) {
  //the familyRoute function is passed into setupExpress function
  const server = setupExpress(definingRoutes);
  const listener = server.listen(port, () => {
    console.info(`Started server on port ${port}`);
  });
}