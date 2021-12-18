import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidbaradminComponent } from './sidbaradmin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SidbaradminComponent
    ],
    exports:[SidbaradminComponent]
})
export class SidbaradminModule { }


