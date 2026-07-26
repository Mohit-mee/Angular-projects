import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
import { Thanks } from './thanks/thanks'
import { Otp } from "./otp/otp"
import { Login } from "./login/login"
export const routes: Routes = [
    {
        path: "",
        component: Home
    },

    {
        path: "forms",
        component: Form
    },
    {
        path: "Thanks",
        component: Thanks
    },
    {
        path: "otp",
        component: Otp
    },
    {
        path: "login",
        component: Login

    }
];
