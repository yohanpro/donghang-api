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
import { DonghangArticle } from './DonghangArticle';
import { Users } from './Users';

@Entity({ name: 'DonghangComments' })
export class DonghangComments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'comment_id' })
  id: number;

  @ManyToOne(() => DonghangArticle, (article) => article.article_id, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'article_id', referencedColumnName: 'article_id' }])
  Article: DonghangArticle;

  // @ManyToOne(() => DonghangArticle, (article) => article.User, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE',
  // })
  // @JoinColumn([{ name: 'writer_id', referencedColumnName: 'writer_id' }])
  // Writer: DonghangArticle;

  @ManyToOne(() => Users, (users) => users.id, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'comment_author_id', referencedColumnName: 'id' }])
  CommentUser: Users;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('text')
  content: string;

  @Column()
  is_deleted: boolean;

  @Column({ type: 'int4' })
  expecting_user_count: number;

  @Column({ type: 'int4' })
  view_count: number;

  @Column({ nullable: true })
  kklol_date: Date;

  @Column({ default: 0, type: 'int2' })
  participate_status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date | null;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date | null;
}
