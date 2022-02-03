import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import EntryCard from "../EntryCard/EntryCard";
import EmptyState from "../EmptyState/EmptyState"
import NewEntry from "../NewEntry/NewEntry";
import './Dashboard.css';

const Dashboard = () => {
    const { user, entries } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && navigate) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="dashboard">
            {entries.length === 0 ? (
                <>
                    <NewEntry />
                    {user ? (<EmptyState userName={user.name}/>) : (<EmptyState />)}
                </>
            ) : (
                <>

                    <NewEntry />
                    <div className="entry-list">
                        {entries.map((entry) => (  
                            <EntryCard entry={entry} key={entry._id} />
                        ))}
                    </div>
                </> 
            )}
        </div>
    );
};

export default Dashboard;
