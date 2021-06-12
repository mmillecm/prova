export class Ingresso{
 protected nomeCliente:string
 protected numeroCadeira:number
 protected  valor:number

 constructor(nomeCliente?:any, numeroCadeira?:any, valor?:any){
     this.nomeCliente= nomeCliente;
     this.numeroCadeira= numeroCadeira;
     this.valor=valor
 }


 public setNome(nome:string){
     this.nomeCliente= nome;
 }

 public getNome():string{
     return this.nomeCliente
 }

 public setCadeira(cadeira:number){
     this.numeroCadeira= cadeira
 }

 public getCadeira():number{
     return this.numeroCadeira
 }

 public setValor(valor:number){
     this.valor= valor  
 }

 public getValor():number{
     return this.valor
 }
}

export class VIP extends Ingresso{

    private taxa:number

    constructor(nomeCliente?:any, numeroCadeira?:any, valor?:any ,taxa?:any){
     super(nomeCliente, numeroCadeira,valor)
     this.taxa= taxa
    }

    public setTaxa(taxa:number){
        this.taxa= taxa
    }
    public getTaxa():number{
        return this.taxa
    }

    public toString():string{
        return "\n Nome:"+this.nomeCliente+"Cadeira"+this.numeroCadeira+"Valor com taxa"+(this.valor+this.taxa)
    }
}

let ingressoVip: VIP = new VIP("Camille",2, 30, 10)

console.log(ingressoVip.toString());

