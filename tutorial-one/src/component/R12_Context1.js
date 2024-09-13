import React , {createContext,useContext} from "react";
/*
Context를사용하면 단계마다 일일이 props를 넘겨주지않고도 컴포넌트 객체에
데이터를 제공할수있음 
*/
//Context 저장하는 변수명은 대문자로 시작 
/*
createContext
-기본값을 가질수있고 이 기본값은 해당 컨텍스트를 사용하는 컴포넌트가 
상위 컴포넌트에서 제공하는 값을 찾을수 없을 때 사용
useContext
-컨텍스트의 현재값을 가져오는데 사용 
컨텍스트에서 어떤값을 받아 현재값으로 보여줌 
Provider
-컨텍스트를 사용하는 컴포넌트들한테 동일한 값을 모두 제공하는 컴포넌트 
value 라는 props를 받아서 하위컴포넌트에게 접근할수있음 
*/
const TestContext = createContext();
//<TestContext.Provider value='부모가전달한값'>
//TestContext로 value 안에 작성한 부모가전달한값을 
//createContext 안에 저장 

const 후손 = () => { 
    const 부모value값 = useContext(TestContext);
    return(
        <>
            <h3>후손자리</h3>
            <p>{부모value값}</p>

            <p>~~~~~~~~~~~~~~~~~</p>

            <후손/>
        </>
    )

}


const 자식 = () => {
    const 부모value값 = useContext(TestContext);
    return(
        <>
            <h2>자식 공간</h2>
            <p>{부모value값}</p>
        
        </>
    )
}



const 부모 = ( ) => {
    return(
        //Context 객체를 이용해서 하위컴포넌트에 value값을 전달
       
        <TestContext.Provider value='부모가전달한값'>
           
            
           <자식/>
        
        </TestContext.Provider>

    )
}
export default 부모;




