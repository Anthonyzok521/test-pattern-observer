import { ListObserver, type ListSubject } from "./interfaces/listObj.interface";

export const TYPE = {
    SUBJECT: 'subject',
    OBSERVER: 'observer'
} as const;

export const LIST_SUBJECT: ListSubject = []
export const LIST_OBSERVER: ListObserver = []
