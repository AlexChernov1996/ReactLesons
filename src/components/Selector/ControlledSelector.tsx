import React, {ChangeEvent} from 'react';
type ControlledSelectorPropsType = {
    selectValue:string
    changeSelect:(selectValue:string)=>void
}
const ControlledSelector = (props:ControlledSelectorPropsType) => {
    const changeValue = (e:ChangeEvent<HTMLSelectElement>)=>props.changeSelect(e.currentTarget.value)
    return <select value={props.selectValue} onChange={changeValue} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

};

export default ControlledSelector;
