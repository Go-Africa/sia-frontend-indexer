import { NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions, } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 100
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
    imports: [NotifierModule.withConfig(customNotifierOptions)],
    exports: [NotifierModule]
})
export class NotificationModule {
  static withConfig(arg0: { position: { horizontal: { position: string; }; }; behaviour: { autoHide: number; }; }): any[] | import("@angular/core").Type<any> {
    throw new Error('Method not implemented.');
  }
}
