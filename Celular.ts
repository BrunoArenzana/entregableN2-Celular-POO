export class Celular {

    private marca: string;
    private modelo: string;
    private ram: number;
    private interStorage: number;
    private sistOp: string;
    private onOff: boolean;



    constructor(
        pMarca: string,
        pModelo: string,
        pSistOp: string,
        pRam?: number,
        pInterStorage?: number,
        pOnOff?: boolean,
        )  {      
        this.marca = pMarca;
        this.modelo = pModelo;
        this.ram  = pRam ?? 4;
        this.interStorage = pInterStorage ?? 64;
        this.sistOp = pSistOp;
        this.onOff = pOnOff ?? false;
    }


    public prenderApagar(): void {
        this.onOff = !this.onOff; 
        if (this.onOff) {
            console.log("El sistema se ha encendido.");
        } else {
            console.log("El sistema se ha apagado.");
        }
    }


    public mostrarInfo(): void {
        console.log(`El celular ${this.marca} el modelo es ${this.modelo}, con una velocidad  de ${this.ram}Gb de Ram, un almacenamiento de ${this.interStorage} Gb y su sist operativo es ${this.sistOp} estado celular ${this.onOff} `)
    }


    public getpMarca(): string {
        return this.marca;
    }
    public setpMarca(pMarca: string) {
        this.marca = pMarca;
    }

    public getpModelo(): string {
        return this.modelo;
    }
    public setpModelo(pModelo: string) {
        this.modelo = pModelo;
    }
    // get y set de ram
    public getpRam(): number {
        return this.ram ?? 8;
    }
    public setpRam(pRam: number) {
        this.ram = pRam;
    }
    // get y set Almacenamieto
    public getpInterStorage(): number {
        return this.interStorage?? 64;
    }
    public setpInterStorage(pInterStorage: number) {
        this.interStorage = pInterStorage;
    }
    // get y set Sist Operativo
    
    public getpSistOp(): string {
        return this.sistOp;
    }
    public setpSistOp(pSistOp: string) {
        this.sistOp = pSistOp;
    }
    // get y set de Prender Apagar
    public getOnOff(): boolean{
        return this.onOff;
    }
    public setOnOff(): boolean {
        return this.onOff;
    }

}
