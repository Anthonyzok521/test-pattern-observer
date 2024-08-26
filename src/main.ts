//import { setupCounter } from './handlers/counter.ts'
import { ASubject } from './subject/subject.subject.ts';
import { AObserver } from './observer/observer.observer.ts';
import './style.css'

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const subject = new ASubject();
const obs1 = new AObserver('Observer 1');

subject.attach(obs1)
subject.notify()
