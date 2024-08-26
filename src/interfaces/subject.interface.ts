import { Observer } from "./observer.interfaces";

export interface Subject {
    showName: boolean
    getName(): string | null
    attach(observer: Observer): void
    dettach(observer: Observer): void
    notify(showName:boolean): void
}
