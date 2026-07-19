import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
import { Thanks } from './thanks/thanks'

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
];
