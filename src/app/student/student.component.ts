import {Component, Input} from "@angular/core";

@Component({
  selector:'student',
  templateUrl: './student.component.html'
})
export class StudentComponent {
    @Input()
    className?: string;

    girlfriend = 1;

    themGirlFriend () {
      this.girlfriend++;
    }
    giamGirlFriend () {
      if (this.girlfriend>0){
        this.girlfriend--;
      }
    }
}
