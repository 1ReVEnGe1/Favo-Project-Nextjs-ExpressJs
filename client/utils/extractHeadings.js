

import { JSDOM } from 'jsdom'

export const extractHeadings = (htmlContent) => {
    

    //Convert Html String Into The DOM Document
    const dom = new JSDOM(htmlContent)
    const doc = dom.window.document

    //Find All The H2 Headings
    const headings = []
    const headingElements = doc.querySelectorAll('h2');

    //Make Array Of Headings With Theit Information
    headingElements.forEach(heading => (
        headings.push(
            {
                id: heading.id || heading.textContent.replace(/\s+/g, "-").toLowerCase(),
                text: heading.textContent,
                tag: heading.tagName
            }
        )

    ))

    console.log('extract file: ' , headings);
    return headings
}

