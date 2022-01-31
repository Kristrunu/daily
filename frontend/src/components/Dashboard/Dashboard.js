import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import ToDoCard from "../ToDoCard/ToDoCard";
import EmptyState from "../EmptyState/EmptyState"
import NewToDo from "../NewToDo/NewToDo";
import './Dashboard.css';

const Dashboard = () => {
    const { user, completeToDos, incompleteToDos } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && navigate) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="dashboard">
            {completeToDos.length === 0 && incompleteToDos.length === 0 ? (
                <>
                    <EmptyState /> 
                    <NewToDo />
                </>
            ):(
                <>
                    <NewToDo />
                    <div className="todos">
                        {incompleteToDos.map((toDo) => (
                            <ToDoCard toDo={toDo} key={toDo._id} />
                        ))}
                    </div>

                    {completeToDos.length > 0 && (
                        <div className="todos">
                            {incompleteToDos.map((toDo) => (
                                <ToDoCard toDo={toDo} key={toDo._id} />
                            ))}
                        </div>
                    )}

                    {completeToDos.length > 0 && (
                        <div className="todos">
                            <h2 className="todos__title">Complete Todo's</h2>
                            {completeToDos.map((toDo) => (
                                <ToDoCard toDo={toDo} key={toDo._id} />
                            ))}
                        </div>
                    )}
                </> 
            )};
        </div>
    
    );
};

export default Dashboard;
