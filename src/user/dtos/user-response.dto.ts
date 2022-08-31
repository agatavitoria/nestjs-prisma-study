import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserResponseDTO {
  @ApiProperty({
    type: Number,
    example: 1,
    description: 'Id do usuário',
    required: true,
  })
  id: number;

  @ApiProperty({
    type: String,
    example: 'teste@email.com',
    description: 'Email do usuário',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    example: 'Agata Vitoria',
    description: 'Nome do usuário',
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    example: '2022-08-26T00:44:35.277Z',
    description: 'Data de criação da conta',
    required: true,
  })
  createdAt: Date;

  @ApiProperty({
    type: String,
    example: '2022-08-26T00:44:35.277Z',
    description: 'Data de atualização dos dados',
    required: true,
  })
  updatedAt: Date;
}
