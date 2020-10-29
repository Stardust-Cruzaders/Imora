/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  bio: string;

  @Column()
  avatar: string;

  @Column('bool')
  is_host: boolean;

  @Column()
  phone: string;

  @Column('varchar', { array: true })
  favorites: Array<string>;

  @Column()
  user_state: string;

  @Column()
  user_city: string;

  @Column('boolean')
  is_email_available: boolean;

  @Column('boolean')
  is_phone_available: boolean;

  @Column('boolean')
  is_location_available: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
