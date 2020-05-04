export class FatalErrorResponse {
    constructor(data) {
        this.code = "ERR-0001"
        this.message = "Erro interno - Favor informar o administrador do sistema"
        this.data = data
    }
  }