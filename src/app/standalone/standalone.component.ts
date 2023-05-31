import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontColorDirective } from '../font-color.directive';
import { FontSizeDirective } from '../font-size.directive';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [
    FontSizeDirective,
    FontColorDirective,
  ],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {

}
