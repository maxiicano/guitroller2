import { Component, OnInit  } from '@angular/core';
import { $ } from 'protractor'


@Component({
  selector: 'app-subwaysurfers',
  templateUrl: './subwaysurfers.component.html',
  styleUrls: ['./subwaysurfers.component.css']
})
export class SubwaysurfersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    let x = document.getElementById('mySidepanel')
    console.log(x.style.width);
    if (x.style.width === '700px') {
      x.style.width = '0px';
    } else {
      x.style.width = '700px';
    }
  }

}


