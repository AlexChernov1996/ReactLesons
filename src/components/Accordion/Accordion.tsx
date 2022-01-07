import React, {useState} from "react";
import {AccordionItemsType} from "../../App";
type AccordionPropsType = {
    title:string
    items:AccordionItemsType[]
}
export function Accordion(props: AccordionPropsType) {
    const [collapsed,setCollapsed] = useState(true)
        return(
        <div>
            <AccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)}  />
            {!collapsed && <AccordionBody items = {props.items}/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title:string
    onClick: ()=>void

}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h2 onClick={()=>{props.onClick()} }>{props.title}</h2>
    )
}
type AccordionBodyType={
    items:AccordionItemsType[]
}
function AccordionBody(props:AccordionBodyType)
{
    return (
        <ul>
            {props.items.map(i=><li onClick={()=>alert(`User with id ${i.id} should be happy`)}>{i.name}</li>)}
        </ul>
    )
}
