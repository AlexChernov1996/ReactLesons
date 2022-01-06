import React, {ChangeEvent} from 'react';
type ControlledCheckBoxPropsType = {
    checked:boolean
    onClickChange: (checked:boolean)=>void
}
const ControlledCheckBox = (props:ControlledCheckBoxPropsType) => {
    const changeBox = (e: ChangeEvent<HTMLInputElement>) => {
        props.onClickChange(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={props.checked} onChange={changeBox}/>
};

export default ControlledCheckBox;
