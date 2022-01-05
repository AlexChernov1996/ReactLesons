import React, {useState} from 'react';
import './onOff.css'

type OnOffPropsType = {
    on: boolean
    onClick:(on:boolean)=>void
}
const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={'wrapper'}>
            <span className={props.on ? 'on on-active' : 'on'} onClick={() => {
                props.onClick(true)
            }}>on</span>
            <span className={props.on ? 'off' : 'off off-active'} onClick={() => {
                props.onClick(false)
            }}>off</span>
            <span className={props.on ? 'indicate on-active' : 'indicate off-active'}/>

        </div>
    );
};

export default OnOff;
