import React, {useState} from 'react';
type UnControlledAccordionPropsType = {
    title : string
}
const UnControlledAccordion = (props:UnControlledAccordionPropsType) => {
    const [collapsed,setCollapsed] = useState(false)
        return(
            <div>
                <AccordionTitle title={props.title}/>
                <button onClick={()=>{setCollapsed(!collapsed)}}>Show</button>
                {!collapsed && <AccordionBody/>}
            </div>
        )
    }
    type AccordionTitlePropsType = {
        title:string
    }
    function AccordionTitle(props:AccordionTitlePropsType) {
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


export default UnControlledAccordion;
