import React, {useState} from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import ControlledInput from "./components/Input/ControlledInput";
import ControlledCheckBox from "./components/CheckBox/ControlledCheckBox";
import ControlledSelector from "./components/Selector/ControlledSelector";
import {CastomSelector} from "./components/Selector/CastomSelector";
import {ExampleMemo} from "./components/ReactMemo/ReactMemo";
export type AccordionItemsType = {
    name:string
    id:number
}
function App() {
    const [ratingValue,setRatingValue] = useState<0|1|2|3|4|5>(0)
    const [on, setOn] = useState(false)
    const [inputValue,setInputValue] = useState('')
    const [checked,setChecked] = useState(false)
    const [selectValue,setSelectValue] = useState('1')
    const [accordionItems,setAccordionItems] = useState([{name:'Alex',id:1},{name:'Dimich',id:2},{name:'Julia',id:3}])
    const [castomSelectItems,setCastomSelectItems] = useState([{name:'Alex',id:1},{name:'Dimich',id:2},{name:'Julia',id:3}])
    return (
        <div>
            {/*<ControlledSelector selectValue = {selectValue} changeSelect = {setSelectValue}/>*/}
            {/*<CastomSelector items={castomSelectItems} />*/}
            {/*<ControlledCheckBox checked={checked} onClickChange = {setChecked}/>*/}
            {/*<ControlledInput inputValue={inputValue} onChangeValue={setInputValue} />*/}
            {/*<Accordion title = {"Menu"}items={accordionItems}/>*/}
            {/*<OnOff on = {on} onClick={setOn}/>*/}
            <ExampleMemo/>
        </div>
    );
}







export default App;
