import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./Header/Header";
import Dashboard from './Dashboard/Dashboard'; 
import AuthBox from './Authbox/AuthBox';
import { useGlobalContext } from '../context/GlobalContext';

  const Layout = () => {
    const { fetchingUser } = useGlobalContext();

  // return fetchingUser ? (
    //   <div className="loading">
    //     <h1>Loading...</h1>
    //   </div>
  // ) : (
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<AuthBox />}/>
        <Route exact path="/register" element={<AuthBox register />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>    
  );
};

export default Layout; 