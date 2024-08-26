import { Observer } from "./observer.interfaces";

export interface Subject {
    attach(observer: Observer): void
    dettach(observer: Observer): void
    notify(): void
}
