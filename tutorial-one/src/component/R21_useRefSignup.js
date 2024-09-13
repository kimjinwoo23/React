import React, {useRef,useEffect} from 'react';



function SignupForm(){
  /* 
  1. //const [emailref,setemailref] =초기값;
    1번은 초기값을 생성하는 구문   
  2.const emailRef = useRef(null);
    2번은 초기값만 설정 =어떤 초기값을 넣을지
*/
    const emailRef = useRef(null);

    useEffect(()=>{
        if(emailRef.current){
            emailRef.current.focus();

        }

    },[]);

    return(
        <div>
            <>
            <h2>회원가입</h2>
            <form>
                <label>이메일</label>
                <input type='email' ref={emailRef}
                placeholder='이메일입력' />
                <label>비밀번호</label>
                <input type='password' placeholder='비밀번호 입력' />

            </form>
            </>

        </div>
    )


}
export default SignupForm