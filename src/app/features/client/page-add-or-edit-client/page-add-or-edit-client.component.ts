import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateClient } from 'src/app/shared/enums/state-client';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-page-add-or-edit-client',
  templateUrl: './page-add-or-edit-client.component.html',
  styleUrls: ['./page-add-or-edit-client.component.scss']
})
export class PageAddOrEditClientComponent {

  public client = new Client();
  public states = Object.values(StateClient);
  public form!: FormGroup;
  public btnName: string = 'Ajouter';
  public formReady: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cs: ClientService) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get("id");
    if (param != 'add') {
      this.cs.getById(Number(param)).subscribe(cl => {
        this.client = cl;
        this.btnName = 'Sauvegarder';
        this.buildFormGroup();
      })
    } else
      this.buildFormGroup();
  }

  public buildFormGroup(): void {
    this.form = this.formBuilder.group({
      name: [this.client.name],
      state: [this.client.state],
      ca: [this.client.ca],
      tva: [this.client.tva],
    });
    this.formReady = true;
  }

  public save(): void {
    if (this.client.id)
      this.cs.update(this.form.value, this.client.id).subscribe(x => {
        if (x.id)
          this.router.navigateByUrl('clients');
      });

    else
      this.cs.add(this.form.value).subscribe(x => {
        if (x.id)
          this.router.navigateByUrl('clients');
      });
  }

}
