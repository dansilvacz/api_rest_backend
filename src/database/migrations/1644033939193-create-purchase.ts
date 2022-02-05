import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPurchase1644033939193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchase",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nome_cliente",
            type: "varchar",
          },
          {
            name: "nome_vendedor",
            type: "varchar",
          },
          {
            name: "nome_produto",
            type: "varchar",
          },
          {
            name: "quantidade",
            type: "int",
          },
          {
            name: "valor",
            type: "int",
          },
          {
            name: "created_at",
            type: "date",
          },
          {
            name: "updated_at",
            type: "date",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("purchase");
  }
}
