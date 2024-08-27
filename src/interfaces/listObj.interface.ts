import { Observer } from "./observer.interfaces";
import { Subject } from "./subject.interface";

export interface ListObj {
    obj: Subject | Observer
    btn: HTMLButtonElement[]
    text?: {
        span_posts?: HTMLSpanElement
        span_notifications?: HTMLSpanElement
        span_subs?: HTMLSpanElement
    }
    listSubs? : HTMLSelectElement
}

export type ListSubject = ListObj[]
export type ListObserver = ListObj[]
