import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignroleComponent } from './admin/assign-role/add-assignrole/add-assignrole.component';
import { EditAssignroleComponent } from './admin/assign-role/edit-assignrole/edit-assignrole.component';
import { ManageAssignroleComponent } from './admin/assign-role/manage-assignrole/manage-assignrole.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { AddPermissionComponent } from './admin/permission/add-permission/add-permission.component';
import { EditpermissionComponent } from './admin/permission/EditPermission/editpermission.component';
import { ListpermissionComponent } from './admin/permission/listpermission/listpermission.component';
import { AddRoleComponent } from './admin/rol/add-role/add-role.component';
import { EditroleComponent } from './admin/rol/editrole/editrole.component';
import { ListroleComponent } from './admin/rol/listrole/listrole.component';
import { TestComponent } from './admin/test/test.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { BookingUserComponent } from './booking/booking-user/booking-user.component';
import { EditBookingComponent } from './booking/edit-booking/edit-booking.component';
import { SelectTurnComponent } from './booking/select-turn/select-turn.component';
import { AddTurnComponent } from './booking/turn/add-turn/add-turn.component';
import { DeleteTurnComponent } from './booking/turn/delete-turn/delete-turn.component';
import { EditTurnComponent } from './booking/turn/edit-turn/edit-turn.component';
import { ListBookingTurnComponent } from './booking/turn/list-booking-turn/list-booking-turn.component';
import { ListTurnComponent } from './booking/turn/list-turn/list-turn.component';
import { ManageTurnComponent } from './booking/turn/manage-turn/manage-turn.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { ResultSearchComponent } from './doctor/result-search/result-search.component';
import { AddSpecialtyComponent } from './look_up/add-specialty/add-specialty.component';
import { AddSubspecialtyComponent } from './look_up/add-subspecialty/add-subspecialty.component';
import { AddTypevisitComponent } from './look_up/add-typevisit/add-typevisit.component';
import { EditSpecialtyComponent } from './look_up/edit-specialty/edit-specialty.component';
import { EditSubspecialtyComponent } from './look_up/edit-subspecialty/edit-subspecialty.component';
import { EditTypevisitComponent } from './look_up/edit-typevisit/edit-typevisit.component';
import { ManageSpecialtyComponent } from './look_up/manage-specialty/manage-specialty.component';
import { ManageSubspecialtyComponent } from './look_up/manage-subspecialty/manage-subspecialty.component';
import { ManageTypevisitComponent } from './look_up/manage-typevisit/manage-typevisit.component';


import { NavbarComponent } from './menu/navbar/navbar.component';
import { Sidbar2Component } from './menu/sidbar2/sidbar2.component';
import { Sidbar3Component } from './menu/sidbar3/sidbar3/sidbar3.component';
import { SidbaradminComponent } from './menu/sidbaradmin/sidbaradmin.component';
import { AddOfficeComponent } from './office/add-office/add-office.component';
import { EditOfficeComponent } from './office/edit-office/edit-office.component';
import { ManageOfficeComponent } from './office/manage-office/manage-office.component';
import { AddSecretaryComponent } from './secretary/add-secretary/add-secretary.component';
import { EditSecretaryComponent } from './secretary/edit-secretary/edit-secretary.component';
import { ListsecretaryComponent } from './secretary/listsecretary/listsecretary.component';
import { ListsecretaryModule } from './secretary/listsecretary/listsecretary.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './user/main/main.component';
import { ProfileMyturnsComponent } from './user/profile-myturns/profile-myturns.component';
import { RegisterComponent } from './user/register/register.component';

import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

import { Sidebar1Component } from './menu/sidebar1/sidebar1.component';
import { GetBookingComponent } from './booking/get-booking/get-booking.component';
import { Editturn2Component } from './booking/turn/editturn2/editturn2.component';
import { DoctorInfoComponent } from './booking/doctor-info/doctor-info.component';
import { ManageInsuranceComponent } from './look_up/manage-insurance/manage-insurance.component';
import { AddInsuranceComponent } from './look_up/add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './look_up/edit-insurance/edit-insurance.component';
import { HomePageComponent } from './menu/home-page/home-page.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminpNavbarComponent } from './menu/adminp-navbar/adminp-navbar.component';
import { MapTestComponent } from './user/map-test/map-test.component';
import { MapComponent } from './user/map/map.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

  },

  {
    path: 'app',
    component: MainComponent,

  },

 {
    path: 'map',
    component: MapComponent,

  },

  {
    path: 'maptest',
    component: MapTestComponent,

  },


  {
    path: 'test2',
    component: DoctorInfoComponent,

  },

  {
    path: 'home/home',
    component: HomePageComponent,

  },

 {
    path: 'adminp',
    component: AdminPanelComponent,

  },

 {
    path: 'adminpn',
    component: AdminpNavbarComponent,

  },


  {
    path: 'dashboard/getbooking/:iddr/:iduser',
    component: DoctorInfoComponent,

  },

  {
    path: 'register',
    component: LoginComponent,

  },









  // {
  //   path: 'userd',
  //   component: UserDashboardComponent,
  // },

  {
    path: 'dashboard',
    component: Sidebar1Component,

  },
  {
    path: 'dashboard1/home',
    component: DashboardadminComponent,

  },
  {
    path: 'dashboard1/addpermission',
    component: AddPermissionComponent,

  },
  {
    path: 'dashboard1/editrole/:id',
    component: EditroleComponent,

  },

  {
    path: 'dashboard1/listbookingdoctor/:id/:id2',
    component: ListBookingTurnComponent,

  },
  {
    path: 'dashboard1/editdoctor/:id',
    component: EditDoctorComponent,

  },


  {
    path: 'dashboard1/edituser/:id',
    component: EditUserComponent,

  },

  {
    path: 'test',
    component: TestComponent,

  },


  {
    path: 'editpermission/:id',
    component: EditpermissionComponent,

  },
  {
    path: 'dashboard1/selectturn/:id/:id1',
    component: SelectTurnComponent,

  },

  {
    path: 'dashboard1/editbooking/:id',
    component: EditBookingComponent,

  },
  // {
  //   path: 'dashboard1/assignrole',
  //   component: AddAssignroleComponent,

  // },
  {
    path: 'dashboard1/manageassignrole',
    component: ManageAssignroleComponent,

  },

  {
    path: 'dashboard1/manageinsurance',
    component: ManageInsuranceComponent,

  },

  {
    path: 'dashboard1/addinsurance',
    component: AddInsuranceComponent,

  },

  {
    path: 'dashboard1/addbooking',
    component: AddBookingComponent,

  },

  {
    path: 'dashboard1/managebooking',
    component: BookingUserComponent,

  },
  {
    path: 'dashboard1/manageturn',
    component: ManageTurnComponent,

  },
  {
    path: 'dashboard1/manageoffice',
    component: ManageOfficeComponent,

  },
  {
    path: 'dashboard1/managedoctor',
    component: ListDoctorComponent,

  },
  {
    path: 'editspecialty/:id',
    component: EditSpecialtyComponent,

  },

  {
    path: 'dashboard1/editinsurance/:id',
    component: EditInsuranceComponent,

  },

  {
    path: 'dashboard1/editsubspecialty/:id',
    component: EditSubspecialtyComponent,

  },
  {
    path: 'dashboard1/addturn/:id',
    component: AddTurnComponent,

  },
  {
    path: 'dashboard1/editturn/:id/:id2',
    component: EditTurnComponent,

  },

  {
    path: 'dashboard1/editturn2/:id/:id2',
    component: Editturn2Component,

  },

  {
    path: 'dashboard1/listturn/:id',
    component: ListTurnComponent,

  },
  {
    path: 'dashboard1/listdeletedturn/:id',
    component: DeleteTurnComponent,

  },



  {
    path: 'dashboard1/addassignrole/:id',
    component: AddAssignroleComponent,

  },
  {
    path: 'dashboard1/editassignrole/:id',
    component: EditAssignroleComponent,

  },

  {
    path: 'dashboard1/editsecretary/:id',
    component: EditSecretaryComponent,

  },
  {
    path: 'dashboard1/managepermission',
    component: ListpermissionComponent,

  },
  {
    path: 'dashboard1/addrole',
    component: AddRoleComponent,

  },
  {
    path: 'dashboard1/adduser',
    component: AddUserComponent,

  },
  {
    path: 'dashboard1/adddoctor',
    component: AddDoctorComponent,

  },
  {
    path: 'dashboard1/manageuser',
    component: ListUserComponent,

  },
  {
    path: 'dashboard1/managerole',
    component: ListroleComponent,

  },

  {
    path: 'dashboard1/addsecretary',
    component: AddSecretaryComponent,

  },
  {
    path: 'dashboard1/managesecretary',
    component: ListsecretaryComponent,

  },

  {
    path: 'dashboard1/addtypevisit',
    component: AddTypevisitComponent,

  },

  {
    path: 'dashboard1/edittypevisit/:id',
    component: EditTypevisitComponent,

  },
  {
    path: 'dashboard1/editoffice/:id',
    component: EditOfficeComponent,

  },
  {
    path: 'dashboard1/managetypevisit',
    component: ManageTypevisitComponent,

  },

  {
    path: 'dashboard1/addspecialty',
    component: AddSpecialtyComponent,

  },
  {
    path: 'dashboard1/addsubspecialty',
    component: AddSubspecialtyComponent,

  },
  {
    path: 'dashboard1/managesubspecialty',
    component: ManageSubspecialtyComponent,

  },
  {
    path: 'dashboard1/addoffice',
    component: AddOfficeComponent,

  },

  {
    path: 'dashboard1/managespecialty',
    component: ManageSpecialtyComponent,

  },
  {
    path: 'dashboard1/manageassignrole',
    component: ManageAssignroleComponent,

  },
  // {
  //   path: 'dashboard1/addassignrole',
  //   component: AddAssignroleComponent,

  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]


})
export class AppRoutingModule { }
