import { Observer } from "../interfaces/observer.interfaces";

export class AObserver implements Observer {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(): string { return this.name; }

    update(): void {
        console.log('Notificado')
    }
}
