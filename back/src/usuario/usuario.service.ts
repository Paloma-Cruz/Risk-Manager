import { Injectable } from "@nestjs/common";
import { NodeRSA } from "node-rsa";

@Injectable()
export class UsuarioService{
    authentication(token: string){
        const key = new NodeRSA({b: 512});
        const tokenDec = key.decrypted(token, 'utf-8');

    }
}

/* Um endPoint do tipo POST, que receba como parâmetro um objeto que tenha um atributo chamado token do tipo string 
que retorne 200 para sucesso se o usuário der para logar e 400 para erro junto com uma mensagem. */