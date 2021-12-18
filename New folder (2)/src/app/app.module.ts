import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './menu/navbar/navbar.module';
import { RegisterModule } from './user/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidbaradminModule } from './menu/sidbaradmin/sidbaradmin.module';
import { AddPermissionModule } from './admin/permission/add-permission/add-permission.module';
import { EditpermissionModule } from './admin/permission/EditPermission/editpermission.module';
import { ListpermissionModule } from './admin/permission/listpermission/listpermission.module';
import { DashboardadminModule } from './admin/dashboardadmin/dashboardadmin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogeditModule } from './admin/dialog/dialogedit/dialogedit.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { AddRoleModule } from './admin/rol/add-role/add-role.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListroleModule } from './admin/rol/listrole/listrole.module';
import { AddSecretaryModule } from './secretary/add-secretary/add-secretary.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditrolModule } from './admin/rol/editrole/editrole.module';
import { AddUserModule } from './user/add-user/add-user.module';
import { DataTablesModule } from 'angular-datatables';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { AddDoctorModule } from './doctor/add-doctor/add-doctor.module';
import { ListUserModule } from './user/list-user/list-user.module';
import { AddSpecialtyModule } from './look_up/add-specialty/add-specialty.module';
import { ManageSpecialtyModule } from './look_up/manage-specialty/manage-specialty.module';
import { AddSubspecialtyModule } from './look_up/add-subspecialty/add-subspecialty.module';
import { ManageSubspecialtyModule } from './look_up/manage-subspecialty/manage-subspecialty.module';
import { AddOfficeModule } from './office/add-office/add-office.module';
import { AddAssignroleModule } from './admin/assign-role/add-assignrole/add-assignrole.module';
import { ManageAssignroleModule } from './admin/assign-role/manage-assignrole/manage-assignrole.module';
import { EditUserModule } from './user/edit-user/edit-user.module';
import { EditSpecialtyModule } from './look_up/edit-specialty/edit-specialty.module';
import { ManageOfficeModule } from './office/manage-office/manage-office.module';
import { ListDoctorModule } from './doctor/list-doctor/list-doctor.module';
import { EditAssignroleModule } from './admin/assign-role/edit-assignrole/edit-assignrole.module';
import { EditSecretaryModule } from './secretary/edit-secretary/edit-secretary.module';
import { EditDoctorModule } from './doctor/edit-doctor/edit-doctor.module';
import { EditSubspecialtyModule } from './look_up/edit-subspecialty/edit-subspecialty.module';
import { ManageTypevisitModule } from './look_up/manage-typevisit/manage-typevisit.module';
import { AddTypevisitModule } from './look_up/add-typevisit/add-typevisit.module';
import { EditTypevisitModule } from './look_up/edit-typevisit/edit-typevisit.module';
import { EditOfficeModule } from './office/edit-office/edit-office.module';
import { NavbarMainModule } from './menu/navbar-main/navbar-main.module';
import { SidbarIconModule } from './menu/sidbar-icon/sidbar-icon.module';
import { NavbarSpecialModule } from './menu/navbar-special/navbar-special.module';
import { LoginModule } from './user/login/login.module';
import { MainModule } from './user/main/main.module';
import { FooterModule } from './menu/footer/footer/footer.module';
import { TestModule } from './admin/test/test.module';
import { ProfileModule } from './user/profile/profile.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BookingUserModule } from './booking/booking-user/booking-user.module';
import { ManageTurnModule } from './booking/turn/manage-turn/manage-turn.module';
import { ADDTurnModule } from './booking/turn/add-turn/add-turn.module';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { DeleteTurnModule } from './booking/turn/delete-turn/delete-turn.module';
import { EditBookingModule } from './booking/edit-booking/edit-booking.module';
import { AddBookingModule } from './booking/add-booking/add-booking.module';
import { SelectTurnModule } from './booking/select-turn/select-turn.module';
import { EditTurnModule } from './booking/turn/edit-turn/edit-turn.module';
import { ListTurnModule } from './booking/turn/list-turn/list-turn.module';
import { LeftRegisterModule } from './menu/left-register/left-register.module';
import { UserDashboardModule } from './user/user-dashboard/user-dashboard.module';
import { ListBookingTurnModule } from './booking/turn/list-booking-turn/list-booking-turn.module';
import { ResultSearchModule } from './doctor/result-search/result-search.module';
import { ProfileContactsModule } from './user/profile-contacts/profile-contacts.module';
import { ProfileContactsEmptyModule } from './user/profile-contacts-empty/profile-contacts-empty.module';
import { ProfileMyturnsModule } from './user/profile-myturns/profile-myturns.module';
import { ProfileMyturnsEmptyModule } from './user/profile-myturns-empty/profile-myturns-empty.module';
import { UserdNavbarModule } from './menu/userd-navbar/userd-navbar.module';

import { ProfileHealthcalenderModule } from './user/profile-healthcalender/profile-healthcalender.module';
import { ProfileMyhelpersModule } from './user/profile-myhelpers/profile-myhelpers.module';
import { ProfileMyhealthRecordModule } from './user/profile-myhealth-record/profile-myhealth-record.module';
import { ProfileCommunicationComponent } from './user/profile-communication/profile-communication.component';
import { GetBookingComponent } from './booking/get-booking/get-booking.component';
import { GetBookinModule } from './booking/get-booking/get-booking.module';

import { ProfileCommunicationModule } from './user/profile-communication/profile-communication.module';
import { CalenderhealthComponent } from './userdashboard/calenderhealth/calenderhealth.component';
import { CalenderhealthModule } from './userdashboard/calenderhealth/calenderhealth.module';
import { TurnuserdashboardComponent } from './userdashboard/turnuserdashboard/turnuserdashboard.component';
import { TurnuserdashboardModule } from './userdashboard/turnuserdashboard/turnuserdashboard.module';
import { CommunicatinUserdashboardComponent } from './userdashboard/communicatin-userdashboard/communicatin-userdashboard.component';
import { CommunicatinUserdashboardModule } from './userdashboard/communicatin-userdashboard/communicatin-userdashboard.module';
import { HealpersuserdashboardComponent } from './userdashboard/healpersuserdashboard/healpersuserdashboard.component';
import { HealpersuserdashboardModule } from './userdashboard/healpersuserdashboard/healpersuserdashboard.module';
import { ProfileUserdashboardComponent } from './userdashboard/profile-userdashboard/profile-userdashboard.component';
import { ProfileUserdashboardModule } from './userdashboard/profile-userdashboard/profile-userdashboard.module';
import { MedicalrecordUserdashboardComponent } from './userdashboard/medicalrecord-userdashboard/medicalrecord-userdashboard.component';
import { MedicalrecordUserdashboardModule } from './userdashboard/medicalrecord-userdashboard/medicalrecord-userdashboard.module';
import { Editturn2Component } from './booking/turn/editturn2/editturn2.component';
import { Editturn2Module } from './booking/turn/editturn2/editturn2.module';
import { DoctorInfoComponent } from './booking/doctor-info/doctor-info.component';
import { DoctorInfoModule } from './booking/doctor-info/doctor-info.module';
import { NgxLoadingModule } from 'ngx-loading';
import { AddInsuranceComponent } from './look_up/add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './look_up/edit-insurance/edit-insurance.component';
import { ManageInsuranceComponent } from './look_up/manage-insurance/manage-insurance.component';
import { AddInsuranceModule } from './look_up/add-insurance/add-insurance.module';
import { EditInsuranceModule } from './look_up/edit-insurance/edit-insurance.module';
import { ManageInsuranceModule } from './look_up/manage-insurance/manage-insurance.module';
import { HomePageModule } from './menu/home-page/home-page.module';
import { AdminPanelModule } from './admin/admin-panel/admin-panel.module';
import { ChartsModule } from 'ng2-charts';
import { AdminpNavbarModule } from './menu/adminp-navbar/adminp-navbar.module';
// import the ChartModule for the Chart component
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { MapTestModule } from './user/map-test/map-test.module';
import { MapModule } from './user/map/map.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    ChartModule,
    AdminpNavbarModule,
    ChartsModule,
    AdminPanelModule,
    HomePageModule,
    BrowserModule,
    DoctorInfoModule,
    NgxLoadingModule.forRoot({}),
    UserDashboardModule,
    AddInsuranceModule,
    EditInsuranceModule,
    ManageInsuranceModule,
    Editturn2Module,
    MedicalrecordUserdashboardModule,
    ProfileUserdashboardModule,
    HealpersuserdashboardModule,
    CommunicatinUserdashboardModule,
    CalenderhealthModule,
    TurnuserdashboardModule,
    ListBookingTurnModule,
    ProfileCommunicationModule,

    TestModule,
    ResultSearchModule,
    LeftRegisterModule,
    EditBookingModule,
    GetBookinModule,
    ListTurnModule,
    SelectTurnModule,
    ProfileModule,
    EditTurnModule,
    BookingUserModule,
    AddBookingModule,
    NgxMaskModule.forRoot(),
    ListDoctorModule,
    EditOfficeModule,
    DeleteTurnModule,

    ADDTurnModule,
    EditAssignroleModule,
    EditDoctorModule,
    NgPersianDatepickerModule,
    ManageTypevisitModule,
    AddTypevisitModule,
    EditTypevisitModule,
    EditSubspecialtyModule,
    MainModule,
    EditSecretaryModule,
    ManageOfficeModule,
    EditSpecialtyModule,
    AddAssignroleModule,
    ManageAssignroleModule,
    AddOfficeModule,
    AddSecretaryModule,
    AppRoutingModule,
    FormsModule,
    FooterModule,
    NavbarMainModule,
    NavbarSpecialModule,
    SidbarIconModule,
  ReactiveFormsModule,
  HttpClientModule,
  LoginModule,
  DataTablesModule,
  NavbarModule,
  RegisterModule,
  SidbaradminModule,
  NavbarSpecialModule,
  AddPermissionModule,
  NgxPaginationModule,
  EditrolModule,
  AddUserModule,
  AddDoctorModule,
  AddSpecialtyModule,
  ManageSpecialtyModule,
  EditUserModule,
  ToastrModule.forRoot(),

  EditpermissionModule,
  ListpermissionModule,
  DashboardadminModule,
  ReactiveFormsModule,
  MatTableModule,
  ManageTurnModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    DialogeditModule,
    MatSelectModule,
    MatRippleModule,
    ListroleModule,
    NgSelectModule,
    ListUserModule,
    ManageSubspecialtyModule,
    AddSubspecialtyModule,
    AddRoleModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot(),

    HttpClientModule,
    NgbModule,
    ProfileContactsModule,
    ProfileContactsEmptyModule,
    ProfileMyturnsModule,
    ProfileMyturnsEmptyModule,

    UserdNavbarModule,
    ProfileHealthcalenderModule,
    ProfileMyhelpersModule,
    ProfileMyhealthRecordModule,
    MapTestModule,
    MapModule,




    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [

    // AuthService,
    // AuthGuard,
    // DragulaService,
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // },
    // { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
