

const Pagination =({itemPerPage,totalItems,paginate,currentPage})=>{
    const 페이지번호 = [];


    for(let i = 1; i<=Math.ceil(totalItems / itemPerPage); i++)
        for(let i =1 i<= totalPages; i++){
            페이지번호.push(i);

    }


}
const renderPageNumber = () =>{
    if(totalPages <=5){
        return 페이지번호;
    }

const startPage = Math.max(1,currentPage -2);

const endPage = Math.min(totalPages,currentPage+2);

return 페이지번호.slice(startPage -1, endPage);
}
return(
    <nav>
        <ul className="pagination">
            {페이지번호.map(번호=> (
                 <li key={번호} className={`page-item ${currentPage === 번호 ? 'active'  :''}`}>
            ))}

        </ul>


    </nav>
)
