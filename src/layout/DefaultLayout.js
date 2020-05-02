import React from 'react';
import Header from "../components/header";

const DefaultLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
};

export default DefaultLayout;