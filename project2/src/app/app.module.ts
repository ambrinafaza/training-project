import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BeginComponent } from './begin/begin.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { CompnayDetailsComponent } from './compnay-details/compnay-details.component';
import { FrontComponent } from './front/front.component';
import { GroupsComponent } from './groups/groups.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SetPwdComponent } from './set-pwd/set-pwd.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FilterComponent } from './filter/filter.component';
import { ManageBudgetsComponent } from './manage-budgets/manage-budgets.component';
import { AwardListComponent } from './award-list/award-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    BeginComponent,
    CodeVerifyComponent,
    CompnayDetailsComponent,
    FrontComponent,
    GroupsComponent,
    NavBarComponent,
    SetPwdComponent,
    SideNavComponent,
    SignInComponent,
    UserComponent,
    AddUserComponent,
    AdminComponent,
    FilterComponent,
    ManageBudgetsComponent,
    AwardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
