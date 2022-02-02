import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// initial state
const initialState = {
    user: null,
    fetchingUser: true,
    entries: [],
}

// reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                fetchingUser: false,
            };
        case "SET_ENTRIES":
            return {
                ...state,
                entries: action.payload,
            };
        case "RESET_USER":
            return {
                ...state,
                user: null,
                entries: [],
                fetchingUser: false,
            };
        default:
            return state;
    }
};

// create the context
export const GlobalContext = createContext(initialState);

// povider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
        getCurrentUser();
    }, []);

    // action: get current user
    const getCurrentUser = async () => {
        try {
            const res = await axios.get("/api/auth/current");
        
            if (res.data) {
                const entriesRes = await axios.get("/api/entry/current");
        
                if (entriesRes.data) {
                    dispatch({ 
                        type: "SET_USER", 
                        payload: res.data 
                    });
                    dispatch({
                        type: "SET_ENTRIES",
                        payload: entriesRes.data.entries,
                    });
                }
            } else {
                dispatch({ type: "RESET_USER" });
            }
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" });
        }
    };

    const logout = async () => {
        try {
            await axios.put("/api/auth/logout");
        
            dispatch({ type: "RESET_USER" });
        } catch (err) {
            console.log(err);
            dispatch({ type: "RESET_USER" });
        }
    };

    const addEntry = (entry) => {
        dispatch({
            type: "SET_ENTRIES",
            payload: [entry, ...state.entries],
        });
    };

    const removeEntry = (entry) => {
        dispatch({
            type: "SET_ENTRIES",
            payload: state.entries.filter(
                (removeEntry) => removeEntry._id !== entry._id
            ),
        });
    };

    const updateEntry = (entry) => {
        const newEntries = state.entries.map(
            (updateEntry) => updateEntry._id !== entry._id ? updateEntry : entry
        );
    
        dispatch({
            type: "SET_ENTRIES",
            payload: newEntries,
        });
    };

    const value = {
        ...state,
        getCurrentUser,
        logout,
        addEntry,
        removeEntry,
        updateEntry,
    };
    
    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}