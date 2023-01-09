import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell_1';

  constructor() {
    window.addEventListener('ready', (readyEvent) => {
      console.log(readyEvent)
      Promise.resolve()
        .then(() => {
          window.dispatchEvent(new CustomEvent('addOriginData', {
            detail: {
              origin: 'shell_1',
              form: {
                title: 'Shell 1 Calling Bitch!',
                from: 'MDE',
                to: 'LHR',
                user: {
                  userName: 'hiddenUserName',
                  token: '1234567890xaBcD,987654321;neededKeyOrInfo'
                }
              }
            }
          }))
        })
    })
  }
}
