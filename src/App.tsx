import React from 'react';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <h1>This is App</h1>
            <Rating value ={1}/>
            <Rating value ={2}/>
            <Rating value ={3}/>
            <Rating value ={4}/>
            <Rating value ={0}/>
            <Accordion title = {"Accordion1"}/>
            <Accordion title = {"Accordion2"}/>
        </div>
    );
}







export default App;
