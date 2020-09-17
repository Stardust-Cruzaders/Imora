/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity('residences')
class Residence {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  residence_name: string;

  @Column()
  description: string;

  @Column('varchar', { array: true })
  images: string;

  @Column('boolean')
  available: boolean;

  @Column()
  zipcode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  numberr: string;

  @Column()
  residence_type: string;

  @Column()
  residence_place: string;

  @Column('decimal')
  price: number;

  @Column('boolean')
  allow_pets: boolean;

  @Column('boolean')
  allow_smokers: boolean;

  @Column('boolean')
  wifi: boolean;

  @Column('boolean')
  kitchen: boolean;

  @Column('boolean')
  tv: boolean;

  @Column('boolean')
  ac: boolean;

  @Column('boolean')
  notebook_work: boolean;

  @Column('boolean')
  grill: boolean;

  @Column('boolean')
  pool: boolean;

  @Column('boolean')
  parking: boolean;

  @Column('integer')
  num_rooms: number;

  @Column('integer')
  num_bathrooms: number;

  @Column('integer')
  current_residents: number;

  @Column('integer')
  max_residents: number;

  @Column()
  owner_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Residence;
