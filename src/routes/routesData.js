import {routeRules} from "./routeRules";
import Login from "../container/login";
import Users from "../container/users";
import Sudoku from "../container/Sudoku";

export const routesData = [
    {
        key: routeRules.login,
        path: routeRules.login,
        component: Login,
        auth: false,
        exact: false
    },
    {
        key: routeRules.users,
        path: routeRules.users,
        component: Users,
        auth: false,
        exact: false
    },
    {
        key: routeRules.sudoku,
        path: routeRules.sudoku,
        component: Sudoku,
        auth: false,
        exact: false
    }
];