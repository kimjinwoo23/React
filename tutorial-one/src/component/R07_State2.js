import { useState } from "react";

improt React , {useState} from "react";

function 예제2번(){
    const[abc,efg] = useState('Z')

    //버튼 클릭시 Z를 x로 변경하는 버튼생성
    cosnt 값변경 = () => {
        if(abc ==='Z')efg('X')
            else efg('Z');
    }   
    return(

        <>
        <h1>{abc}</h1>
        <button onClick={값변경}>값변경하기</button>

        </>

    )
}
export default 예제2번;