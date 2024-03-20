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

  @Column('varchar', { nullable: true })
  latitude: string;

  @Column('varchar', { nullable: true })
  longitude: string;

  @ManyToOne(() => User, (user) => user.packages)
  user: User;
}
