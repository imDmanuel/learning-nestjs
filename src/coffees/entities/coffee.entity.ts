import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavour } from './flavour.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Flavour, (flavour) => flavour.coffees, {
    cascade: true,
  })
  flavours: Flavour[];
}
