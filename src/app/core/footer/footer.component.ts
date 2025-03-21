import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialLinksComponent } from '../../shared/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
