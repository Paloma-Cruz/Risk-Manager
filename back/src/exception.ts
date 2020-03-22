import { HttpStatus, HttpException } from '@nestjs/common';

export class InvalidToken extends HttpException {
    constructor() {
        super('O Tokén enviado está nulo ou indefinido', HttpStatus.BAD_REQUEST);
    }
}

