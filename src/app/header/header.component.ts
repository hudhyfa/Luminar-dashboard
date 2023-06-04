import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
      
  }
  // user defined eveent
  // @output()  child to parent communication

  @Output() toggle= new EventEmitter();

  menuClicked(){
    this.toggle.emit()
    // emit (): emits an event containing a given value.
  }
}
