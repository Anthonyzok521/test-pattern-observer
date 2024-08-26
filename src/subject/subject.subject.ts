import { Observer } from "../interfaces/observer.interfaces";
import { Subject } from "../interfaces/subject.interface";

export class ASubject implements Subject {

    private observers: Observer[] = [];
    private name: string;

    public showName: boolean;

    constructor(name: string){
        this.name = name;
        this.showName = false;
    }

    getName(): string | null { return this.name; }

    attach(observer: Observer): void {
        if(!this.observers.includes(observer)){
            this.observers.push(observer)
        }
        else{
            throw new Error("Ya esta suscrito el observador " + observer.getName());
        }

    }

    dettach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs != observer)
    }

    notify(showName:boolean = false): void {
        this.showName = showName;
        this.observers.forEach(obs => obs.update(this))

    }
}
