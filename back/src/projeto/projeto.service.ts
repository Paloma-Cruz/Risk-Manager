// Service é onde tem as regras de negócio e as consultas ao banco

import { Injectable } from '@nestjs/common';


@Injectable()
export class ProjetoService {
  getHello(): string {
    return 'Hello World!';
  }
}
