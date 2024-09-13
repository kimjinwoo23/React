import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MemberList from './MemberList';
import UserList from './UserList';
import TodoList from './TodoList';
//BrowserRouter 얘가 너무 길어서 앞에를 죽여버림 

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<MemberList />} />
            <Route path='/memberlist' element={<UserList />} />
            <Route path='/todo' element={<TodoList />} />
        </Routes>


    </Router>
    )
}




export default App;

/*




*/