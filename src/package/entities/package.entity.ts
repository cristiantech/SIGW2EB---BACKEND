// package.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  trackingNumber: string;

  @Column()
  source: string;

  @Column({type: 'varchar'})
  state: string;

  @Column()
  address: string;

  @Column('float', { nullable: true })
  latitude: number;

  @Column('float', { nullable: true })
  longitude: number;

  @ManyToOne(() => User, (user) => user.packages)
  user: User;
}
