import React, {useEffect, useState} from 'react';

export const PressTracker = () => {
    const [text,setText] = useState('')
    useEffect(()=>{
        const handler = ((ev:KeyboardEvent) => setText((state)=> state+ev.key) )
        window.addEventListener('keypress',handler)
return window.removeEventListener('keypress',handler)
    },[])
    return (
        <div>
            {text}
            <input type="text"/>
        </div>
    );
};

export default PressTracker;
