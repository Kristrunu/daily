<<<<<<< HEAD
import Layout from "./components/Layout";
import {GlobalProvider} from "./context/GlobalContext"
import "./App.css";
=======
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DUMMY_ENTRY from "./DUMMY_ENTRY";
import EntryList from "./components/EntryList/EntryList";
import LogIn from "./components/LogIn/LogIn";
import NewEntry from "./components/NewEntry/NewEntry";
import SignUp from "./components/SignUp/SignUp";
import EntryView from "./components/EntryView/EntryView";
import EmptyState from "./components/EmptyState/EmptyState";


>>>>>>> 27c1b1de26ce2da23ad7faec6a89b31029c933a5

function App() {

  return (
<<<<<<< HEAD
    <GlobalProvider>

      <Layout />
    </GlobalProvider>
=======
    <div className="App">
      <EntryList entryList={entryList} />
      <EmptyState />
      <NewEntry />
      <LogIn />
      <SignUp />
      <EntryView />
    </div>
>>>>>>> 27c1b1de26ce2da23ad7faec6a89b31029c933a5
  );
}

export default App;