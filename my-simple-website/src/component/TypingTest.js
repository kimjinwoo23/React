import React,{useState} from "react";
import Result from './Result';

import './TypingTest.css';

const 타자대회 = () => {
    const [텍스트입력,set텍스트입력] = useState('');
    const [결과확인,set결과확인] =useState(false);
    const [현재문제번호,다음문제번호] = useState('0');

    const 현재텍스트 =타이핑문제[현재문제번호];

    const 타이핑문제 = [
        '도토리는맛있다',
        '도토리는 정말 맛있다',
        '다람쥐는 귀엽다',
        '다람쥐 볼이 잔뜩 부풀었다',
        '사실 도토리는 맛없다']

    const 값변경하기 =(e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 현재텍스트){
            set결과확인(true);
            
        }
        const 다음문제이동 = () => {
            set텍스트입력('');
            set결과확인(false);
            if(현재문제번호<타이핑문제.length -1){
                //index가 0부터 시작하기때문에 ,-1하기
                다음문제번호(현재문제번호 + 1 );
            }else{
                alert('모두맞췄습니다');
                다시시작();
            }
        }
    }
    const 다시시작 = ()=>{
        set텍스트입력('');
        set결과확인(false);
    }
return (
    <div className="typing-test">
        <h1>타자치기대회</h1>
        <p>{현재텍스트}</p>
        <div className="typing-container">
            <textarea
            value={텍스트입력}
            onChange={값변경하기}
            disabled={결과확인}

        />
        {/* 변경되지않는 사진은 public에 넣고 사진의 특정값을 
        주기적으로 변경할때는 src에 넣기 지금은 고정하기위해 public에 넣는다 */}
        <img src="/hancom.jpg" className="character-image"/>

        </div>
        {/* Result.js 파일에 텍스트입력과 문제를 전달함 */}
        {결과확인 && <Result inputText = {텍스트입력} correctText={현재텍스트} />}
      {/*}  {결과확인 && <button onClick={다음문제이동}> 다음문제이동 </button>}*/}
        
    </div>
)

}
export default 타자대회;