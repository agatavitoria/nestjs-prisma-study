import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDTO {
  @ApiProperty({
    description: 'Id do usuário',
    type: Number,
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiPropertyOptional({
    description: 'Email do usuário',
    type: String,
    example: 'example@email.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email: string | null;

  @ApiPropertyOptional ({
    description: 'Nome do usuário',
    type: String,
    example: 'Agata Vitoria',
    required: false,
  })
  @IsString()
  @IsOptional()
  name: string | null;

  @ApiPropertyOptional ({
    description: 'Senha de acesso do usuário',
    type: String,
    example: 'admin123',
    required: false,
  })
  @IsString()
  @IsOptional()
  password: string | null;
}
