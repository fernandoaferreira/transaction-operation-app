import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: `Please set a email string` })
  @IsString()
  email: string;

  @IsNotEmpty({ message: `Please set a name string` })
  @IsString()
  name: string;
}
