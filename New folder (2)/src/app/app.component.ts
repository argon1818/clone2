import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import * as $ from 'jquery';
import { lookupService } from 'src/app/service/lookup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nobaan';

}
