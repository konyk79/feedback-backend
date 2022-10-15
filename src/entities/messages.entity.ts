import { IsEmail, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 64 })
  @IsString()
  @MaxLength(64)
  name: string;
  @Column({ length: 64 })
  @IsEmail()
  @MaxLength(64)
  email: string;
  @Column({ length: 1024 })
  @IsString()
  @MaxLength(1024)
  message: string;
}
