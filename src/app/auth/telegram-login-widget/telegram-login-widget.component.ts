import {AfterViewInit, Component, ElementRef, EventEmitter, NgZone, Output, ViewChild} from "@angular/core";
import {telegramBotUsername} from "../../environment";

declare global {
  interface Window {
    loginViaTelegram: (data: TelegramLoginData) => void;
  }
}

export interface TelegramLoginData {
  id: string;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}

@Component({
  selector: 'app-telegram-login-widget',
  template: `<div #script style='display: none'><ng-content></ng-content></div>`
})
export class TelegramLoginWidgetComponent implements AfterViewInit {

  @ViewChild('script', {static: true}) script!: ElementRef;
  @Output() loggedIn: EventEmitter<TelegramLoginData> = new EventEmitter<TelegramLoginData>();

  constructor(private ngZone: NgZone) {
    window.loginViaTelegram = this.loginViaTelegram.bind(this);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', telegramBotUsername);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-onauth', 'loginViaTelegram(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  loginViaTelegram(user: TelegramLoginData) {
    this.ngZone.run(() => {
      this.loggedIn.emit(user);
      console.log("user logged in")
    });
  }

}
