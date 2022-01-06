import React, {ChangeEvent} from 'react';

type ControlledInputPropsType = {
    inputValue: string
    onChangeValue: (inputValue: string) => void
}
const ControlledInput = (props: ControlledInputPropsType) => {
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => props.onChangeValue(e.currentTarget.value)
    return (
        <div>
            <input type="text" value={props.inputValue} onChange={inputChange}/>
            <span>{props.inputValue}</span>
        </div>)
};

export default ControlledInput;
