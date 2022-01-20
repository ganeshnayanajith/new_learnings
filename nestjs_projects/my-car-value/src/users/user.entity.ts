import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Report } from '../reports/report.entity';

// import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  // @Exclude()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted a user with id : ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated a user with id : ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed a user with id : ', this.id);
  }
}
