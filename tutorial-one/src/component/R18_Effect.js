import React from 'react';

function useEffectEx(){
    return(
        <>
        <h1>useEffect란</h1>

        <pre>
            useEffect함수란 컴포넌트(function, const 시작)가 랜더링(되게 하다)
            특정작업을 진행할수있도록 하는 hook 
            리액트에서 컴포넌트를 랜더링한다는건 js 파일을 시작한다는것
        </pre>

        [useEffect]
        import { useEffect } from 'react';
        useEffect(function , deps)
        useEffect() =>{} , [] //function의 이름이나 기능이없을경우 익명함수로 표현 

        function : 00.js를 들어왔을때 수행할 작업 
        deps : 배열형태로 배열 안에 검사할 특정값 빈 배열 작성 
        이 안에 특정값을 넣는다면 지정값이 업데이트 될때 
        useEffect에 적힌 function을 실행 
        필수가 아닌 생략 가능 

        </>
    )


}
export default useEffectEx;




