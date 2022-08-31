import { ApiProperty } from '@nestjs/swagger';

export class BadRequestDto {
  @ApiProperty({
    type: Number,
    description: 'Código do erro HTML.',
    example: 400,
    required: true,
  })
  statusCode: 400;

  @ApiProperty({
    type: Object,
    description: 'Resposta da API.',
    example: {
      status: 'error',
      errors: 'Bad Request',
    },
    required: true,
  })
  body: {
    status: 'error';
    errors: 'Bad Request';
  };
}
