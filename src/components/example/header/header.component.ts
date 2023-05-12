import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../User";

@Component({
  selector: "storybook-header",
  template: `<header>
    <div class="wrapper">
      <div>
        <!-- Logo Acme -->
        <!--<svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>-->
        <!-- Logo Apec White -->
        <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>01 Atoms / 01 Logo Apec / 02 Monogram / 01 White</title>
          <g id="01-Atoms-/-01-Logo-Apec-/-02-Monogram-/-01-White" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-15-Copy">
              <g id="Group" fill="#FFFFFF">
                <polygon id="Fill-12" points="11.3291817 11.8918919 0 40 6.95241515 40 17.2972973 14.3353193"></polygon>
                <polygon id="Fill-14" points="19.8936817 8.01825446 23.2038567 16.3522496 25.7262317 22.7027027 31.3513514 19.7374131 28.0422653 11.4039748 23.5120078 0 16.2753556 0 14.0540541 5.59200718"></polygon>
                <polygon id="Fill-16" points="29.1891892 29.8030875 33.2982198 40 40 40 34.7726651 27.027027"></polygon>
              </g>
              <g id="Group-2" transform="translate(0.000000, 0.000000)" fill="#FDC300">
                <polygon id="Fill-18" points="20.3013301 7.95155107 20.3013301 7.95155107 0 1.59872116e-14 0 6.9001063 23.7837838 16.2162162"></polygon>
                <polygon id="Fill-20" points="28.6256266 11.8918919 32.0025586 20.2367827 26.2634405 23.2053915 11.2116549 30.9926924 7.56756757 40 40 23.9425253 40 20.2367827 40 16.5304825"></polygon>
              </g>
            </g>
          </g>
        </svg>
        
        <h1>Apec PDS</h1>
      </div>
      <div>
        <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
            >!
          </span>
          <storybook-button
            *ngIf="user"
            size="small"
            (onClick)="onLogout.emit($event)"
            label="Log out"
          ></storybook-button>
        </div>
        <div *ngIf="!user">
          <storybook-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></storybook-button>
          <storybook-button
            *ngIf="!user"
            primary
            size="small"
            primary="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></storybook-button>
        </div>
      </div>
    </div>
  </header>`,
  styleUrls: ["./header.css"],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
