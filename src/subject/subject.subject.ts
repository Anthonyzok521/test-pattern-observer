import { Observer } from "../interfaces/observer.interfaces";
import { Subject } from "../interfaces/subject.interface";

export class ASubject implements Subject {

    private listObservers: Observer[] = [];
    private name: string;

    public showName: boolean = false;
    public post: number = 0
    public observers: number = 0;

    constructor(name: string){
        this.name = name;
    }

    getName(): string | null { return this.name; }

    attach(observer: Observer): void {
        if(!this.listObservers.includes(observer)){
            this.listObservers.push(observer)
            this.observers++;
        }
        else{
            alert(`${observer.getName()}, ya estás suscrito a ${this.name}`);
            throw new Error(`${observer.getName()}, ya estás suscrito a ${this.name}`);
        }

    }

    dettach(observer: Observer): boolean {
        if(!this.listObservers.includes(observer)){
            return false;
        }
        this.listObservers = this.listObservers.filter(obs => obs != observer);
        this.observers--;
        return true;
    }

    notify(showName:boolean = false): void {
        this.showName = showName;
        this.listObservers.forEach(obs => obs.update(this));
        this.post++;
    }
}
