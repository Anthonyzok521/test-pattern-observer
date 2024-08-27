import { Observer } from "./observer.interfaces";

export interface Subject {
    showName: boolean
    post: number
    observers: number
    getName(): string | null
    attach(observer: Observer): void
    dettach(observer: Observer): boolean
    notify(showName:boolean): void
}
