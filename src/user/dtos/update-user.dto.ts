import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Id do usuário',
    type: Number,
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    example: 'example@email.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email: string | null;

  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    example: 'Agata Vitoria',
    required: false,
  })
  @IsString()
  @IsOptional()
  name: string | null;

  @ApiProperty({
    description: 'Senha de acesso do usuário',
    type: String,
    example: 'admin123',
    required: false,
  })
  @IsString()
  @IsOptional()
  password: string | null;
}
