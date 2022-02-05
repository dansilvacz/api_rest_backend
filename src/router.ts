import { Router } from "express";
import purchaseController from "./controllers/purchaseController";

const router = Router();

router.get("/compras", purchaseController.listAll);
router.get("/compras/:id", purchaseController.listOne);
router.post("/compras", purchaseController.create);
router.put("/compras/:id", purchaseController.update);
router.delete("/compras/:id", purchaseController.destroy);

export = router;
