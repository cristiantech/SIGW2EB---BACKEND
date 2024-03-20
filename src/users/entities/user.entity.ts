// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Package } from '../../package/entities/package.entity';
import { Notification } from '../../notification/entities/notification.entity';
import { Message } from '../../message/entities/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mail: string;

  @OneToMany(() => Package, (pack) => pack.user)
  packages: Package[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}