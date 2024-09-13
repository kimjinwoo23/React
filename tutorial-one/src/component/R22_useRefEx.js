import React,{useRef,useEffect} from 'react';

const RefEx = ()=>{

    const passwordRef = useRef(null);

    useEffect(()=>{
        if(passwordRef.current){
            passwordRef.current.focus();
        }
    })


    return(
        <>
        <from>
            <label>비밀번호</label>
 <input type='password' ref={passwordRef} 
  placeholder='비밀번호를 입력하세요'  required ></input>
        <label>이름</label>
        <input type='text' placeholder='이름을 입력하세요'></input>
        </from>
        
        </>
    )
}




export default RefEx;