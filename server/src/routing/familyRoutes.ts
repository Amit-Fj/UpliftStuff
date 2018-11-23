import { Router } from "express";

export function familyRoutes(router: Router) {
  router.get("/", (req, res) => {
    res.send("its working");
  });
}
