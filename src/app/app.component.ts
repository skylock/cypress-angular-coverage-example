import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate('200ms ease-out', keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})

        ]))]),
      transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate('250ms ease-in',   keyframes([
          style({transform: 'translateY(-20px)', opacity: 1, offset: 0.2}),
          style({transform: 'translateY(250px)', opacity: 0 , offset: 1})

        ]))])

    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('input1', {static: false}) inputEl: ElementRef;
  todoArray: string[] = [];

  public form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.constructForm();
  }

  ngAfterViewInit() {
    setTimeout(() => this.inputEl.nativeElement.focus());
  }

  constructForm() {
    this.form = this.fb.group({
      todo: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.todoArray.push(this.form.get('todo').value);
    this.form.reset();
  }

  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


}
