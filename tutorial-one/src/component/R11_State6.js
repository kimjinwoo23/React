import React,{useState} from "react";


const 댓글내용 = (props) => {

    const {handler}= props;
    return(
        <div className="comment">

        <label htmlFor="inputid"></label>
        <input type="text" id="inputComment" onChange={handler} required></input>
        </div>
    )

// id inputComment
}

const 작성자 = ({handler}) => {

return(
    <div className="writer">

    <label htmlFor="inputWriter"></label>
    <input type="text" id="inputWriter" onChange={handler} required></input>
    </div>
)

// id inputWriter
}

const 댓글창 = () => {

    const [comment , setComment] =useState('');
    const [writer  , setWriter] = useState('');

    const Comment값 = (e) => {
        setComment(e.target.value)
    }
    const Writer값 =(e) =>{
        setWriter(e.target.value)
    }

    return(
        <>
            <댓글내용 handler ={Comment값}></댓글내용>
            <작성자 handler={Writer값}></작성자>

            if



             {/** 댓글 입력 창과 댓글작성자창 보여주고
         * 댓글과 댓글작성자가 모두 안적혀있으면 버튼 비활성화
         * 모두 적혀있으면 버튼 활성화
         */}       
        
        </>

    )
}
export default 댓글창;

