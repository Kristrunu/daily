import "./App.css";
import Layout from './components/Layout/Layout';
import { GlobalProvider } from './context/GlobalContext';

// import axios from "axios";
// import { useEffect, useState } from "react";
// import DUMMY_ENTRY from "./DUMMY_ENTRY";
// import EntryList from "./components/EntryList/EntryList";
// import LogIn from "./components/LogIn/LogIn";
// import NewEntry from "./components/NewEntry/NewEntry";
// import SignUp from "./components/SignUp/SignUp";

function App() {
  

//   console.log(entryList);

//   /*const getNotes = async () => {
//   try {
//     const res = await axios.get("http://localhost:5002/journal");
//     setEntryList(res.data);
//     console.log(entryList);
//   } catch (err) {
//     console.error(err);
//   }
// };*/

  return (
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  );
}

export default App;
