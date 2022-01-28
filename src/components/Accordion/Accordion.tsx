import React, {useState} from "react";
import {AccordionItemsType} from "../../App";
import "./acordion.css"
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
        <h2 className='accordion' onClick={()=>{props.onClick()} }>{props.title}</h2>
    )
}
type AccordionBodyType={
    items:AccordionItemsType[]
}
function AccordionBody(props:AccordionBodyType)
{
    return (
        <div>
            {props.items.map(i=><span className ='panel'>{i.name}</span>)}
        </div>
    )
}
