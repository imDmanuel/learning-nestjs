import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Coffee, (coffee) => coffee.flavours)
  coffees: Coffee[];
}
