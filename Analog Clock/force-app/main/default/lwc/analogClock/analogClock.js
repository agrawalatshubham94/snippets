import { LightningElement } from 'lwc';

export default class AnalogClock extends LightningElement {
    HOURHAND;
    MINUTEHAND;
    SECONDHAND;

    renderedCallback() {
        let self = this;

        this.HOURHAND = this.template.querySelector(".hour-class");
        this.MINUTEHAND = this.template.querySelector(".minute-class");
        this.SECONDHAND = this.template.querySelector(".sec-class");      

        setInterval(function() {
            self.showTime(self);
        }, 1000);
    }

    showTime(self) {        
        let currentDate = new Date();
        let hr = currentDate.getHours();
        let min = currentDate.getMinutes();
        let sec = currentDate.getSeconds();

        self.HOURHAND.style.transform = `rotate(${hr*360/12 + min*(360/60)/12}deg)`;
        self.MINUTEHAND.style.transform = `rotate(${min*360/60 + sec*360/3600}deg)`;
        self.SECONDHAND.style.transform = `rotate(${sec*360/60}deg)`;
    }
}