import { LIST_OBSERVER, LIST_SUBJECT, TYPE } from "../const"
import { ListObj } from "../interfaces/listObj.interface";
import { Subject } from "../interfaces/subject.interface";
import { AObserver } from "../observer/observer.observer";

export const eventClick = (section: HTMLDivElement) => {

    const objSubjectReturn = (action:string, name:string, observer: AObserver) => {
        const objs = LIST_SUBJECT.filter(obj => {if(obj.obj.getName() === name) return obj})[0] as ListObj;
        const subject = objs.obj as Subject;
        const span_subs = objs.text?.span_subs as HTMLSpanElement;
        if(action === 'unsub') {
            if(subject.dettach(observer)) observer.subs--;
        }
        if(action === 'subs') {
            subject.attach(observer)
            observer.subs++;
        }
        span_subs.textContent = `Subscripters: ${subject.observers}`;
    }

    const actions = [{
        type: ['Unsubscriber', 'Subscriber'],
        action: {
            unsub: (name:string, observer: AObserver) => {
                objSubjectReturn('unsub', name, observer);
            },
            subs: (name:string, observer: AObserver) => {
                objSubjectReturn('subs', name, observer);
            }
        }
    }]

    const click = (e:Event) => {
        if(e.target){
            if(section.id === TYPE.SUBJECT){
                const btnNotify = e.target as HTMLButtonElement;
                if(btnNotify.tagName == 'BUTTON'){
                    const objs = LIST_SUBJECT.filter(({obj, btn}) => {if(btn[0] == btnNotify){return obj}})[0] as ListObj;
                    const subject = objs.obj as Subject;
                    const span_posts = objs.text?.span_posts as HTMLSpanElement;
                    subject.notify(true);
                    span_posts.textContent = subject.post.toString();
                }

            }
            if(section.id === TYPE.OBSERVER){
                const btnObserver = e.target as HTMLButtonElement;
                    if(btnObserver.tagName === 'BUTTON'){

                    const action = actions.map(({type, action}) => {
                        if(btnObserver.textContent === type[0]) {
                            return action.unsub;
                        }
                        return action.subs
                    })[0];

                    const listobserver = LIST_OBSERVER.filter(({btn, listSubs}) => {if(btn[0] == btnObserver || btn[1] == btnObserver){return listSubs}})[0] as ListObj;
                    const select = listobserver.listSubs as HTMLSelectElement;
                    const observer = listobserver.obj as AObserver;

                    action(select.value, observer);

                    const subs = listobserver.text?.span_subs as HTMLSpanElement;
                    subs.textContent = `Canals: ${observer.subs}`;
                }
            }
        }
    }

    section.addEventListener('click', click);
}
