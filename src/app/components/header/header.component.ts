import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartValue: string = '0';
  constructor(private cartService: SharedService) {
    this.cartService.currentCartValue.subscribe(message => this.cartValue = message);
  }

  ngOnInit(): void {
    this.cartService.currentCartValue.subscribe(message => this.cartValue = message)
  }
}
