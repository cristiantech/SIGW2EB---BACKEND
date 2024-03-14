import { Book } from '../../books/entities/book.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  idUser: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false })
  lastname: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 150, nullable: false })
  password: string;

  @Column({ length: 50, nullable: false })
  role: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
  updatedAt: Date;

  @OneToMany(() => Book, book => book.users)
  books: Book[];
}
