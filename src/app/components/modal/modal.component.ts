import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [],
})
export class ModalComponent implements OnInit {
  @Input() title: string = 'Default Modal Title';
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
