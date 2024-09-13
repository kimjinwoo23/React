import React,{createContext,useContext,useState} from "react";

//1, Context 생성
const TestContext = createContext();

/*4번 후손 컴포넌트 생성 
후손 컴포넌트에서 바꾼 숫자가 자식과 부모 숫자값에 모두 반영되게하기
*/ 
const 후손 = () => {
    
    const {number,setnumber} = useContext(TestContext);

    return(
        <>
            
            <input type="number" value={number} onChange={e => {setnumber(e.target.value)}}/>
        </>

    )
}



//3. 자식 컴포넌트 생성
const 자식 = () => {
    //TestContext에서 제공된 값을 여기서 사용 
    // const [number,setnumber] = useContext(TestContext);
    const {number,setnumber} = useContext(TestContext);

    return(
        <>
            <h3>자식컴포넌트위치</h3>
            <input type="number" value={number} onChange={e => {setnumber(e.target.value)}}/>
        </>
            
    )
}


//부모 컴포넌트 생성
const 부모 =() => {
    const [number,setnumber] = useState(0);

    /*
    Context는 값을 1개만 제공 가능 
    ->2개 이상의 값을 제공하고싶다면 {} []  로 묶어서 제공 
    <TestContext.Provider value={ {number,setnumber}}>
    number와 setnumber를 { {number,setnumber}} 작성하면 아래와같이 변환되서 전달
    {"number : number , setnumber : setnumber"}
    {"number : 0 , setnumber : 변환될값"}
    */


    return(
        <TestContext.Provider value={ {number,setnumber}}>
            <h1>
                부모다. :
                {/*parent 컴포넌트의 현재값 출력 */}
                <span className="red">{number}</span>


            </h1>
            <후손/>
            <자식/>
        </TestContext.Provider>

    )
}
export default 부모;









