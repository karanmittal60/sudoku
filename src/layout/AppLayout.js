import React from 'react';
import Header from "../components/header";

const AppLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
};

export default AppLayout;