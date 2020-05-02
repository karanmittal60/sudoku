import React from "react";
import {AppContext} from "../context/AppContext";

const usePikachu = () => {

    const [state, setState] = React.useContext(AppContext);

    function setToken(token) {
        setState(prevState => {
            return {
                ...prevState,
                token: token
            }
        })
    }

    function setUserDetails(details) {
        setState(prevState => {
            return {
                ...prevState,
                userDetails: details
            }
        })
    }

    function setUsersData(data) {
        setState(prevState => {
            return {
                ...prevState,
                usersData: data
            }
        })
    }

    return {
        token: state.token,
        setToken,

        setUserDetails,
        userDetails: state.userDetails,

        setUsersData,
        usersData: state.usersData,
    }
};

export default usePikachu;