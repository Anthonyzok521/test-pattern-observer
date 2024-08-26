//import { setupCounter } from './handlers/counter.ts'
import { ASubject } from './subject/subject.subject.ts';
import { AObserver } from './observer/observer.observer.ts';
import { btnConfirm } from './handlers/confirm.handler.ts';
import { btnCreate } from './handlers/create.handler.ts';
import './style.css'

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
btnConfirm({
    btn: document.querySelector('#confirm') as HTMLButtonElement,
    select: document.querySelector('#type') as HTMLSelectElement,
    div: document.querySelector('#card') as HTMLDivElement
});

btnCreate({
    btn: document.querySelector('#create') as HTMLButtonElement,
    select: document.querySelector('#type') as HTMLSelectElement,
    input: document.querySelector('#name') as HTMLInputElement,
    div: document.querySelectorAll('section') as NodeListOf<HTMLDivElement>
})

/* const subject = new ASubject('Subject 1');
const subject2 = new ASubject('Subject 2');
const obs1 = new AObserver('Observer 1');
const obs2 = new AObserver('Observer 2');
const obs3 = new AObserver('Observer 3');

subject.attach(obs1)
subject.attach(obs2)

subject2.attach(obs3)

subject.notify(true)
subject2.notify(true) */
