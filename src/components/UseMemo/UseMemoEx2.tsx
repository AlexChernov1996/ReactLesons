import React, {useMemo, useState} from 'react';

const Users = (props: { users: string[] }) => {
    console.log('Users')
    return <div> {props.users}

    </div>

}
const Counter = (props: { count: number, onClick: () => void }) => {
    console.log('Counter')
    return (
        <div>
            <button onClick={props.onClick}>+</button>
            {props.count}
        </div>
    );
};
const MemoUsers1 = React.memo(Users)
export const ExampleMemo2 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Sanya', 'Julia', "Ihor"])
    const filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])

    return (

        <>
            <button onClick={()=>{setUsers([...users, 'Aaaaaa'])}}>+User</button>
            <MemoUsers1 users={filteredUsers}/>
            <Counter count={count} onClick={() => setCount(count + 1)}/>
        </>)
}
