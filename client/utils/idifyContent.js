import {JSDOM} from 'jsdom'
export const idifyContent = ({content})=> {
    const dom = new JSDOM(content);
    const doc = dom.window.document;
}

