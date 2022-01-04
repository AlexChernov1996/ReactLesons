import React from "react";

export function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:any) {
    return (
        <h2>{props.title}</h2>
    )
}

function AccordionBody()
{
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}