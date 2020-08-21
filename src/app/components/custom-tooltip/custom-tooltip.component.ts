import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {
    @Input() content: string;
    
    constructor() { }

    ngOnInit(): void {
    }

}
