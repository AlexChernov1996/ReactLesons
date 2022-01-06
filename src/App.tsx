import React, {useState} from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import ControlledInput from "./components/Input/ControlledInput";
import ControlledCheckBox from "./components/CheckBox/ControlledCheckBox";
import ControlledSelector from "./components/Selector/ControlledSelector";

function App() {
    const [ratingValue,setRatingValue] = useState<0|1|2|3|4|5>(0)
    const [collapsed,setCollapsed] = useState(true)
    const [on, setOn] = useState(false)
    const [inputValue,setInputValue] = useState('')
    const [checked,setChecked] = useState(false)
    const [selectValue,setSelectValue] = useState('1')
    return (
        <div>
            <h1>My App</h1>
            <ControlledSelector selectValue = {selectValue} changeSelect = {setSelectValue}/>
            <ControlledCheckBox checked={checked} onClickChange = {setChecked}/>
            {/*<ControlledInput inputValue={inputValue} onChangeValue={setInputValue} />*/}
            {/*<Accordion title = {"Menu"} onClick={setCollapsed} collapsed = {collapsed}/>*/}
            {/*<OnOff on = {on} onClick={setOn}/>*/}
        </div>
    );
}







export default App;
