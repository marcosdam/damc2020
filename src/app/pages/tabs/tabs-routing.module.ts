import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    // Añadir ruta vacía al principio
    {
        path: '',
        redirectTo: 'account'
    },
    {
        path: '',
        component: TabsPage,
        // Añadir children con las 3 rutas de tabs
        children: [
            {
                path: 'account',
                loadChildren: '../avatar/avatar.module#AvatarPageModule'
            },
            {
                path: 'contact',
                loadChildren: '../list/list.module#ListPageModule'
            },
            {
                path: 'settings',
                loadChildren: '../cards/cards.module#CardsPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
