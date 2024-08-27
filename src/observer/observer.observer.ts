import { Observer } from "../interfaces/observer.interfaces";
import { Subject } from "../interfaces/subject.interface";

export class AObserver implements Observer {

    private name: string;
    public notifications: number = 0
    public textNotifications: HTMLSpanElement
    public subs: number = 0

    constructor(name: string, span: HTMLSpanElement){
        this.name = name;
        this.textNotifications = span
    }

    getName(): string { return this.name; }

    update(subject: Subject): void {
        let msg:string = `Hola, ${this.getName()} tienes una notificación`

        if (subject.showName) {
            msg += ` de ${subject.getName()}`;
        }
        this.notifications++;
        this.textNotifications.textContent = this.notifications.toString();
        console.log(this.notifications,msg);
    }
}
