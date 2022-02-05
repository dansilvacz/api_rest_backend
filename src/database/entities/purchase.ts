import {
  Entity,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "purchase" })
export class Purchase {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome_cliente: string;

  @Column()
  nome_vendedor: string;

  @Column()
  nome_produto: string;

  @Column()
  quantidade: number;

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  attCreatedAt() {
    this.created_at = new Date();
  }

  @BeforeUpdate()
  attUpdatedAt() {
    this.updated_at = new Date();
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
