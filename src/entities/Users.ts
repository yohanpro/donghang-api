import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DonghangArticle } from './DonghangArticle';
import { DonghangComments } from './DonghangComments';

@Index('email', ['email'], { unique: true })
@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn()
  @OneToMany(() => DonghangArticle, (donghangArticle) => donghangArticle.user)
  @OneToMany(
    () => DonghangComments,
    (donghangComments) => donghangComments.CommentUser,
  )
  id: string;

  @IsEmail()
  @IsNotEmpty()
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @IsPhoneNumber('KR')
  @Column('varchar', { name: 'phone number' })
  phone: string;

  @Column('smallint', { name: 'active status' })
  activeStatus: number;

  @Column('boolean', { name: 'verified user' })
  verifiedUser: boolean;

  @Column('varchar', { name: 'profile picture' })
  userPicture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
