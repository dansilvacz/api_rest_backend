import { EntityRepository, Repository } from "typeorm";
import { Purchase } from "../database/entities/purchase";

@EntityRepository(Purchase)
export class PurchaseRepository extends Repository<Purchase> {}
