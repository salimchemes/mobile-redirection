import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  ngOnInit(): void {
    this.isAndroid = this.isAndroidDevice();
    this.isApple = this.isAppleDevice();

    const storeUrl = this.isAndroid
      ? 'https://play.google.com/store/apps/details?id=com.whatsapp&fbclid=IwAR0PpKE_1z74sc8Q4kxnKQzFODOLmtRmNymvo8Bz6ZJOg5djNQDMvdHSt2c'
      : 'https://apps.apple.com/us/app/whatsapp-messenger/id310633997';
		const appSchemeUrl = 'whatsapp://send?phone=3416714042';

		setTimeout(function () {
			window.location.href = storeUrl;
		}, 25);
		window.location.href = appSchemeUrl;

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
