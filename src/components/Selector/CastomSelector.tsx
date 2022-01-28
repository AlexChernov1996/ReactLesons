import React, {useState} from "react";
import {AccordionItemsType} from "../../App";
import styles from "./customSelector.module.css"
type CastomSelectorPropsType = {
    items:AccordionItemsType[]
}
export function CastomSelector(props: CastomSelectorPropsType) {
    const [title,setTitle] = useState('Choose person')
    const [collapsed,setCollapsed] = useState(true)
        return(
        <div>
            <SelectorTitle title={title} onClick={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <CastomSelectorBody changePerson={setTitle} items = {props.items}/>}
        </div>
    )
}
type SelectorTitlePropsType = {
    title:string
    onClick: ()=>void

}
function SelectorTitle(props:SelectorTitlePropsType) {
    return (
        <h2 className={styles.accordion} onClick={()=>{props.onClick()} }>{props.title}</h2>
    )
}
type CastomSelectorBodyType={
    items:AccordionItemsType[]
      changePerson:(title:string)=>void
}
function CastomSelectorBody(props:CastomSelectorBodyType)
{
    return (
        <div>
            {props.items.map(i=><span onClick={()=>props.changePerson(i.name)} className ={styles.panel}>{i.name}</span>)}
        </div>
    )
}
