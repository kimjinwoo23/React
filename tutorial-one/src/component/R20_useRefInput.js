import {useEffect,useRef} from 'react';

const RefInputFocus = () =>{
    const inputRef = useRef(null);

    //useEffect에서 ,[] 값이 비었으면 버튼을 클릭하지않아도
    //input창에서 입력하라는 기능이나 효과가 발생한다
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    } ,[]);

    const 버튼클릭 = () =>{
        if(inputRef.current){
            inputRef.current.focus();

        }
    };
    return(
        <div>
        <input ref={inputRef} type ='text'/>
        <button onClick={버튼클릭}>input안에 값이없으면 input으로이동</button>
        </div>
    )

}
export default RefInputFocus;