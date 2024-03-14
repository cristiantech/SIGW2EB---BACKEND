import { User } from '../../users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 250})
  title: string;

  @Column({ type: 'varchar', length: 100 })
  author: string;

  @Column({ type: 'int' })
  year: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
  updatedAt: Date;

  @ManyToOne(() => User, user => user.books)
  users: User;
}
