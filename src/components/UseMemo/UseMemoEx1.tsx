import React, {useMemo, useState} from 'react';

export const UseMemoEx1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    let resultA = 1
    let resultB = 1
    useMemo(() =>{
        for(let i = 1;i<=a;i++){
            let fakeA =1
            while (fakeA < 50000000){
                fakeA++
            }
            resultA = i * resultA
        }
        return resultA
    },[a])

    for(let i = 1;i<b;i++){
        resultB = i * resultB
    }
    return (
        <div>
            <input value={a} onChange={(event => setA(+event.currentTarget.value))} type="number"/>
            <input value={b} onChange={(event => setB(+event.currentTarget.value))} type="number"/>
            <hr/>
            <h3>Result A:{resultA}</h3>
            <h3>Result B:{resultB}</h3>
        </div>
    );
};

