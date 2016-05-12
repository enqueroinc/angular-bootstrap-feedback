/// <reference path="../../typings/main.d.ts"/>
/// <reference path="./angular.bootstrap.feedback.ts"/>

module AngularBootstrapFeedback {

    export class Screenshot implements ng.IComponentOptions {
        public controller: any;
        public template: any;
        constructor() {
            this.controller = ['angularBootstrapFeedbackFactory', ScreenshotController];
            this.template = ['$templateCache', ($templateCache: ng.ITemplateCacheService): Object => $templateCache.get('angular.bootstrap.feedback.screenshot.html')];
        }
    }

    class ScreenshotController {
        constructor(private factory: IFactory) {}

        takeScreenshotButtonPressed() {
            // If mobile, take screenshot only
            // if (this.$detection.isAndroid() || this.$detection.isiOS() || this.$detection.isWindowsPhone() || this.$detection.isBB10()) {
            //     this.factory.takeScreenshot();
            // } else {
                this.factory.hideModal();
                this.factory.isScreenshotMode = true;
                this.factory.createCanvas();
            // }
        }
    }
}
angular
    .module('angular.bootstrap.feedback')
    .component('angularBootstrapFeedbackScreenshot', new AngularBootstrapFeedback.Screenshot());
