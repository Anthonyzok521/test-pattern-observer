import { TYPE } from "../const";
import { type TypeElements } from "../interfaces/elements.interface";

type Props = Pick<TypeElements, 'btn' | 'select' | 'div'>

export const btnConfirm = ( {btn, select, div}: Props) => {

    btn.addEventListener('click', (e: Event) => {

        const card = div as HTMLDivElement;
        const span = card.children[0].children[0] as HTMLSpanElement;
        const type = select.value;

        if(select.value === TYPE.SUBJECT)  {span.textContent = type;}
        if(select.value === TYPE.OBSERVER) {span.textContent = type;}

        card.classList.toggle('novisible');

        e.preventDefault()
    })
  }
