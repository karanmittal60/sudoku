import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const initialSate = {
        token: "",
        userDetails: null,
        usersData: [],

    };

    const [state, setState] = React.useState(initialSate);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
};

