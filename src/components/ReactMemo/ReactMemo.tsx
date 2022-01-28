import React, {useState} from 'react';

const Users = (props: { users: string[] }) => {
    console.log('Users')
    return <div> {props.users}</div>
}
const Counter = (props: { count: number,onClick:()=>void }) => {
    console.log('Counter')
    return (
        <div>
            <button onClick={props.onClick}>+</button>
            {props.count}
        </div>
    );
};
 const MemoUsers = React.memo(Users)
export const ExampleMemo = () => {
    const [count,setCount] = useState(0)
    const [users,setUsers] = useState(['Sanya', 'Julia', "Ihor"])
    return (
        <>
            <MemoUsers users={users}/>
            <Counter count={count} onClick={()=>setCount(count+1) }/>
        </>)
}
