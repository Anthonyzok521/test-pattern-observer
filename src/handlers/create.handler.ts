import { TypeElements } from "../interfaces/elements.interface";
import { TYPE } from "./../const";

type Props = Pick<TypeElements, 'btn' | 'select' | 'input' | 'div'>

export const btnCreate = ({btn, select, input, div}: Props) =>{

    const newCard = (parent:HTMLDivElement, type: string, name: string) => {

        const div = document.createElement('div') as HTMLDivElement;
        const h3 = document.createElement('h3') as HTMLHeadingElement;
        const span = document.createElement('span') as HTMLSpanElement;
        const btn = {
            Notify:     document.createElement('button') as HTMLButtonElement,
            RemoveSubs: document.createElement('button') as HTMLButtonElement,
            Subscriber: document.createElement('button') as HTMLButtonElement
        }
        const select = document.createElement('select') as HTMLSelectElement;
        const option = document.createElement('option') as HTMLOptionElement;


        h3.textContent = name;
        div.appendChild(h3);
        div.appendChild(span);

        if(type === TYPE.SUBJECT) {
            parent.appendChild(div);
            div.appendChild(btn.Notify);
            return
        }

        div.appendChild(btn.RemoveSubs)
        div.appendChild(btn.Subscriber)
        div.appendChild(select)
        select.appendChild(option)

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
