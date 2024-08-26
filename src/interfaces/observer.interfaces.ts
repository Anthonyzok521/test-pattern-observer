import { Subject } from "./subject.interface"

export interface Observer{
    getName(): string
    update(subject?: Subject): void
}
