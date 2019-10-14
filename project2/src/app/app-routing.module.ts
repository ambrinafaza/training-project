import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { BeginComponent } from './begin/begin.component';
import { componentFactoryName } from '@angular/compiler';
import { SetPwdComponent } from './set-pwd/set-pwd.component';
import { CompnayDetailsComponent } from './compnay-details/compnay-details.component';
import { AddTeamComponent } from './add-team/add-team.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FrontComponent } from './front/front.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GroupsComponent } from './groups/groups.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FilterComponent } from './filter/filter.component';
import { ManageBudgetsComponent } from './manage-budgets/manage-budgets.component';
import { AwardListComponent } from './award-list/award-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'front', component: FrontComponent },
  { path: 'nav-bar', component: NavBarComponent,
    children: [
      { path: '', component: BeginComponent },
      { path: 'code-verify', component: CodeVerifyComponent },
      { path: 'begin', component: BeginComponent },
      { path: 'set-pwd', component: SetPwdComponent },
      { path: 'company-details', component: CompnayDetailsComponent },
      { path: 'add-team', component: AddTeamComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'side-nav', component: SideNavComponent,
    children: [
      { path: '', component: GroupsComponent },
      { path: 'groups',component:GroupsComponent},
      { path: 'user', component: UserComponent},
      { path:'manage-budgets',component:ManageBudgetsComponent},
      { path:'award-list',component:AwardListComponent},
      {path:'admin',component:AdminComponent,
      children:[
        { path:'filter',component:FilterComponent},
      ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}