import React, {useState} from 'react';
import './onOff.css'

type OnOffPropsType = {
    //active: boolean
}
const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)
    return (
        <div className={'wrapper'}>
            <span className={on ? 'on on-active' : 'on'} onClick={() => {
                setOn(true)
            }}>on</span>
            <span className={on ? 'off' : 'off off-active'} onClick={() => {
                setOn(false)
            }}>off</span>
            <span className={on ? 'indicate on-active' : 'indicate off-active'}/>

        </div>
    );
};

export default OnOff;
