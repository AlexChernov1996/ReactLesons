import React, {useState} from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";

function App() {
    const [ratingValue,setRatingValue] = useState<0|1|2|3|4|5>(0)
    const [collapsed,setCollapsed] = useState(true)
    const [on, setOn] = useState(false)
    return (
        <div>
            <h1>My App</h1>
            {/*<Rating onClick = {setRatingValue}*/}
            {/*        value={ratingValue}*/}
            {/*/>*/}
            <Accordion title = {"Menu"} onClick={setCollapsed} collapsed = {collapsed}/>
            {/*<Accordion title = {"Users"} collapsed={true}/>*/}
            {/*<UnControlledAccordion title={'Menu'}/>*/}
            {/*<UnControlledAccordion title={'Users'}/>*/}
            <OnOff on = {on} onClick={setOn}/>
        </div>
    );
}







export default App;
