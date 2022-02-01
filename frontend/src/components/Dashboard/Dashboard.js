import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import ToDoCard from "../ToDoCard/ToDoCard";
import EmptyState from "../EmptyState/EmptyState"
import NewToDo from "../NewToDo/NewToDo";
import './Dashboard.css';

const Dashboard = () => {
    const { user, incompleteToDos } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && navigate) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="dashboard">
            {incompleteToDos.length === 0 ? (
                <>
                    <NewToDo />
                    <EmptyState /> 
                </>
            ) : (
                <>
                    <NewToDo />
                    <div className="todos">
                        {incompleteToDos.map((toDo) => (  
                            <>
                          <p>{toDo.createdAt}</p>
                            <ToDoCard toDo={toDo} key={toDo._id} />
                            </>
                        ))}
                    </div>
                </> 
            )}
        </div>
    );
};

export default Dashboard;
