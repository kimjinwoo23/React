import React , {useState} from "react";

const 예제2번 = (props) => {

//props로 전달받은 값중 init값을 count 초기값으로 설정하기 

//javascript 안에 Number 라는 객체를 이용해서 값을 숫자로 한번더 처리 
//String 처럼 문자열로 오는 값일 수 있으니 한번 더 숫자화 시켜줌 



const [count,setCount]=useState(Number(props.init));
//setcount를 이용해서 count값을 변경하는 코드 
//-> 예제2번 객체에서 변경이되는 부분만 다시 표현을 진행 

return(

    <div className="count-container">
        <button onClick={() => setCount(count - Number(props.step))}>
            -{props.step}

        </button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + Number(props.step))}>
            +{props.step}
            </button>

    </div>

)


}
export default 예제2번;