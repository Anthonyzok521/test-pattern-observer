//import { setupCounter } from './handlers/counter.ts'
import { ASubject } from './subject/subject.subject.ts';
import { AObserver } from './observer/observer.observer.ts';
import './style.css'

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const subject = new ASubject('Subject 1');
const subject2 = new ASubject('Subject 2');
const obs1 = new AObserver('Observer 1');
const obs2 = new AObserver('Observer 2');
const obs3 = new AObserver('Observer 3');

subject.attach(obs1)
subject.attach(obs2)

subject2.attach(obs3)

subject.notify(true)
subject2.notify(true)
