import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLoginScreenComponent } from './login-imunemais/default-login-screen/default-login-screen.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DefaultLoginScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'imunemais-login';
}
