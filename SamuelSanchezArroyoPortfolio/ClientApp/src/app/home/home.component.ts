import { Component } from '@angular/core';
import { SharingServices } from '../services/sharing.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Download() {
    SharingServices.downloadFile('https://localhost:44463/assets/PDFS/SamuelSsnchezCV1.pdf', 'SamuelSanchezCV');
  }
}
