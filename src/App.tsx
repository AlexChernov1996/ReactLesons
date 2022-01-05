import React from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";

function App() {
    return (
        <div>
            <h1>My App</h1>
            <Rating/>
            {/*<Accordion title = {"Menu"} collapsed = {true}/>*/}
            {/*<Accordion title = {"Users"} collapsed={true}/>*/}
            <UnControlledAccordion title={'Menu'}/>
            <UnControlledAccordion title={'Users'}/>
            <OnOff/>
        </div>
    );
}







export default App;
