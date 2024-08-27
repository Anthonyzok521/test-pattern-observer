import { Observer } from "../interfaces/observer.interfaces";
import { Subject } from "../interfaces/subject.interface";

export class AObserver implements Observer {

    private name: string;
    public notifications: number = 0

    constructor(name: string){
        this.name = name;
    }

    getName(): string { return this.name; }

    update(subject: Subject): void {
        let msg:string = `Hola, ${this.getName()} tienes una notificación`

        if (subject.showName) {
            msg += ` de ${subject.getName()}`;
        }
        this.notifications++;
        console.log(msg);
    }
}
