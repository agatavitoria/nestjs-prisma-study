import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    example: 'example@email.com',
    required: true
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    example: 'Agata Vitoria',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Senha de acesso do usuário',
    type: String,
    example: 'admin123',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
