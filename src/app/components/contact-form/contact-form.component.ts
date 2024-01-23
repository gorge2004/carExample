import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'components-contact-form',
  templateUrl: './contact-form.component.html',
  styles: ``,
  providers: [MessageService]

})
export class ContactFormComponent {
  public myContact: {} ={};
  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phoneNumber: ['', [ Validators.required]],
    comunicationType: ['', Validators.required],
  });
  public isLoading: boolean = false;
  @ViewChild('myFormRef') myFormRef!: ElementRef<HTMLFormElement> ;

  constructor(private fb: FormBuilder, private messageService: MessageService){}


  onSave(){
    console.log(this.myForm.value, this.myFormRef);

    if (!this.myForm.valid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Complete required Information(*).'  });

      return;
    }
    this.isLoading = true;


    console.log(this.myForm.value,);
    emailjs.sendForm('rgxe bpqy ytqx stwj', 'template_ujsinlu', this.myFormRef?.nativeElement , 'QZbSQuNRiyyMA-weY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.isLoading = false;
        this.messageService.add({ severity: 'success', summary: 'success', detail: 'your information was saved, we communicate you soon; Thanks you.'  });

      }, (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error try to save your information.'  });
      });

  }
}
