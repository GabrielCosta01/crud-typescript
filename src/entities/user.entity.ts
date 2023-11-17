import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { hashSync } from "bcrypt";

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length:70})
  name: string;

  @Column({length:100, unique:true})
  @IsEmail()
  email: string;

  @Column({length:72})
  password: string;

  @Column({default:false})
  isAdmin: boolean;

  @CreateDateColumn({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @BeforeInsert()
  hashPassword(){
    this.password = hashSync(this.password, 10);
  }
}
export default User;