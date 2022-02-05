import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { PurchaseRepository } from "../repositories/purchaseRepository";

const create = async (req: Request, res: Response) => {
  const purchaseRepository = getCustomRepository(PurchaseRepository);
  /**
   * receber o que o client mandar, registrar no banco de dados
   *
   * retornar pra ele que foi salvo com sucesso
   */

  const { nome_cliente, nome_vendedor, nome_produto, quantidade, valor } =
    req.body;

  const newPurchase = purchaseRepository.create({
    nome_cliente,
    nome_produto,
    nome_vendedor,
    quantidade,
    valor,
  });
  await purchaseRepository.save(newPurchase);

  res.json(newPurchase);
};
const listAll = async (req: Request, res: Response) => {
  const purchaseRepository = getCustomRepository(PurchaseRepository);
  const todasAsCompras = await purchaseRepository.find();
  res.json(todasAsCompras);

  /**
   * listar para o cliente todas as compras que estão no banco de dados
   */
};

const listOne = async (req: Request, res: Response) => {
  const purchaseRepository = getCustomRepository(PurchaseRepository);
  const id = req.params.id; //:limao compras/limaoverde = req.params.limao
  const compra = await purchaseRepository.findOne({ id });

  /**
   * listar apenas a compra que o cliente solicitar por parametro na rota
   */

  res.json(compra);
};

const update = async (req: Request, res: Response) => {
  const purchaseRepository = getCustomRepository(PurchaseRepository);
  const id = req.params.id;
  const body = req.body;

  await purchaseRepository.update({ id }, body);
  res.json({ message: "Sua compra foi atualizada com sucesso" });

  /**
   * Receber as alterações que o cliente quer fazer
   *  no produto específico e atualizar no banco de dados destroy
   */
};
const destroy = async (req: Request, res: Response) => {
  const purchaseRepository = getCustomRepository(PurchaseRepository);
  const id = req.params.id;

  await purchaseRepository.delete({ id });
  res.json({ message: "Sua compra foi excluida com sucesso" });

  /**entendi
   * recebe por parametro a compra que ele quer apagar
   */
};

export default {
  create,
  listAll,
  listOne,
  update,
  destroy,
};
