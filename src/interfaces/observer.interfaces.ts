import { Subject } from "./subject.interface"

export interface Observer{
    notifications: number
    textNotifications: HTMLSpanElement
    subs:number
    getName(): string
    update(subject?: Subject): void
}
