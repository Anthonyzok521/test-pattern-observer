import { ASubject } from '../subject/subject.subject.ts';
import { AObserver } from '../observer/observer.observer.ts';
import { TypeElements } from "../interfaces/elements.interface";
import { LIST_OBSERVER, LIST_SUBJECT, TYPE } from "./../const";

type Props = Pick<TypeElements, 'btn' | 'select' | 'input' | 'div'>

export const btnCreate = ({btn, select, input, div}: Props) =>{

    const newCard = (parent:HTMLDivElement, type: string, name: string) => {

        const div = document.createElement('div') as HTMLDivElement;
        const h3 = document.createElement('h3') as HTMLHeadingElement;
        const span = {
            posts: document.createElement('span') as HTMLSpanElement,
            notifications: document.createElement('span') as HTMLSpanElement,
            subs: document.createElement('span') as HTMLSpanElement
        };
        const btn = {
            Notify:     document.createElement('button') as HTMLButtonElement,
            RemoveSubs: document.createElement('button') as HTMLButtonElement,
            Subscriber: document.createElement('button') as HTMLButtonElement
        }
        const select = document.createElement('select') as HTMLSelectElement;

        h3.textContent = name;
        div.appendChild(h3);


        if(type === TYPE.SUBJECT) {
            const subject = new ASubject(name);
            btn.Notify.textContent = 'Post';
            span.posts.textContent = subject.post.toString();
            span.subs.textContent = `Subscripters: ${subject.observers}`;
            LIST_SUBJECT.push({
                obj: subject,
                btn: [btn.Notify],
                text: {
                    span_posts: span.posts,
                    span_subs: span.subs
                }
            });

            if(LIST_OBSERVER){
                LIST_OBSERVER.forEach(sub => {
                    const option = document.createElement('option') as HTMLOptionElement;
                    option.textContent = name;
                    option.value = name;
                    sub.listSubs?.appendChild(option)
                })
            }

            div.appendChild(span.posts);
            div.appendChild(btn.Notify);
            div.appendChild(span.subs);
            parent.appendChild(div);
            return
        }

        span.notifications.textContent = '0';
        const observer = new AObserver(name, span.notifications);

        btn.RemoveSubs.textContent = 'Unsubscriber';
        btn.Subscriber.textContent = 'Subscriber';
        span.subs.textContent = `Canals: ${observer.subs}`;

        LIST_SUBJECT.forEach(sub => {
            const option = document.createElement('option') as HTMLOptionElement;
            option.textContent = sub.obj.getName();
            option.value = sub.obj.getName() || '';
            select.appendChild(option)
        })

        LIST_OBSERVER.push({
            obj: observer,
            btn: [btn.RemoveSubs, btn.Subscriber],
            text: {
                span_notifications: span.notifications,
                span_subs: span.subs
            },
            listSubs: select
        });



        div.appendChild(span.notifications);
        div.appendChild(btn.RemoveSubs)
        div.appendChild(btn.Subscriber)
        div.appendChild(select)
        div.appendChild(span.subs);

        parent.appendChild(div);
    }

    btn.addEventListener('click', (e: Event) => {

        const sections = div as NodeListOf<HTMLDivElement>;

        let type: string = TYPE.SUBJECT;
        let name: string = input.value;
        let parent:HTMLDivElement = sections[0];

        if(select.value === TYPE.OBSERVER){
            type = TYPE.OBSERVER;
            parent = sections[1];
        }

        newCard(parent, type, name)

        e.preventDefault();
    });
}
