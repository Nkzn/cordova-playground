import { html, render } from 'https://dev.jspm.io/lit-html';

const Item = () => {
    alert("render!");
    return html`<div>hello</div>`;
}

render(Item(), document.querySelector("#container"))