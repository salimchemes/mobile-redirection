import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mobile-redirection';
  isAndroid: boolean | undefined;
  isApple: boolean | undefined;
  #route = inject(ActivatedRoute)
  ngOnInit(): void {
    this.isAndroid = this.isAndroidDevice();
    this.isApple = this.isAppleDevice();
    this.#route.queryParamMap.subscribe((params) => {
      if(params.get('redirect') === 'true') {
        this.redirect();
      }
     })

  }

  public redirect(): void {
    const storeUrl = this.isAndroid
      ? 'https://play.google.com/store/apps/details?id=com.dsw.android&hl=en_US&gl=US'
      : 'https://apps.apple.com/us/app/dsw-designer-shoe-warehouse/id918263528';

    window.location.href = storeUrl;
  }

  private isAndroidDevice(): boolean {
    const userAgent = window.navigator.userAgent;
    return /Android/i.test(userAgent);
  }

  private isAppleDevice(): boolean {
    const userAgent = window.navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
  }
}
