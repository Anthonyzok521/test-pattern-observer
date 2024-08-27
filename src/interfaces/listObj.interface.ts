import { Observer } from "./observer.interfaces";
import { Subject } from "./subject.interface";

export interface ListObj {
    obj: Subject | Observer
    btn: HTMLButtonElement[]
    countText: HTMLSpanElement
    listSubs? : HTMLSelectElement
}

export type ListSubject = ListObj[]
export type ListObserver = ListObj[]
