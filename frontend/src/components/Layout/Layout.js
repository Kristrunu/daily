import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../LogIn/LogIn';
import EntryList from "../EntryList/EntryList";
// import Register from '../Register/';

const Layout = () => {

  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/dashboard" element={<EntryList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;