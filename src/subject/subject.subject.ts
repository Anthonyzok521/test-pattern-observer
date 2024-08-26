import { Observer } from "../interfaces/observer.interfaces";
import { Subject } from "../interfaces/subject.interface";

export class ASubject implements Subject {

    private observers: Observer[] = [];

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

    notify(): void {
        this.observers.forEach(obs => obs.update())
    }
}
