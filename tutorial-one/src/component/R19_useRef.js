import React , {useRef,useEffect} from 'react';


const Ref = () => {
    const countRef= useRef(0);

    useEffect(()=>{
        countRef.current++;
        console.log('react새로고침됨')
    })


    return(
        <>
            <h1>useRef</h1>
            <pre>
                새로고침이 되는 react에서 특정기능이나 값이
                새로고침되지않고 유지될수있도록할떄 사용

                
            </pre>

            <p>React가 새로고침될떄마다 숫자 값 증가</p>
        <p>{countRef.current}</p>
        


        </>


    )
}
export default Ref;