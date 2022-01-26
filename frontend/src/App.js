import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DUMMY_ENTRY from "./DUMMY_ENTRY";
import Entry from "./components/Entry/Entry";
import EntryList from "./components/EntryList/EntryList";
import LogIn from "./components/LogIn/LogIn";

function App() {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    setEntryList(DUMMY_ENTRY);
  }, []);

  console.log(entryList);

  /*const getNotes = async () => {
  try {
    const res = await axios.get("http://localhost:5002/journal");
    setEntryList(res.data);
    console.log(entryList);
  } catch (err) {
    console.error(err);
  }
};*/

  return (
    <div className="App">
      <EntryList entryList={entryList} />
      <LogIn />
    </div>
  );
}

export default App;