import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedRequestDto {
  @ApiProperty({
    type: Number,
    description: 'Código do erro HTML.',
    example: 401,
    required: true,
  })
  statusCode: 401;

  @ApiProperty({
    type: Object,
    description: 'Resposta da API.',
    example: {
      status: 'error',
      errors: 'Unauthorized Request',
    },
    required: true,
  })
  body: {
    status: 'error';
    errors: 'Unauthorized Request';
  };
}
