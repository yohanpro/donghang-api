import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity({ name: 'DonghangArticle' })
export class DonghangArticle {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @ManyToOne(() => Users, (users) => users.id, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WriterId', referencedColumnName: 'id' }])
  User: Users;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('text')
  content: string;

  @Column()
  isDeleted: boolean;

  @Column({ type: 'int4' })
  expecting_user_count: number;

  @Column({ type: 'int4' })
  view_count: number;

  @Column({ nullable: true })
  kklol_date: Date;

  @Column({ default: 0, type: 'int2' })
  participate_status: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
