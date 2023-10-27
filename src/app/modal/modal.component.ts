import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TuiSwipe, TuiSwipeModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from "@taiga-ui/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
    TuiSvgModule,
    TuiSwipeModule,
    NgIf
  ]
})
export class ModalComponent {
	@Input() type = 1;
	@Input() title = '';
	@Input() opened!: boolean;
	@Output() closed: EventEmitter<any> = new EventEmitter<any>();

	ngOnChanges() {
		if (this.opened) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	close() {
		this.opened = false;
		this.closed.emit();
	}

	onSwipe(swipe: TuiSwipe) {
		const direction = swipe.direction;

		if (direction == 'right' && this.type === 2) {
			this.close();
		}

		if (direction == 'bottom' && this.type === 1) {
			this.close();
		}
	}
}
