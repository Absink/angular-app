import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrEditClientComponent } from './page-add-or-edit-client.component';

describe('PageAddOrEditClientComponent', () => {
  let component: PageAddOrEditClientComponent;
  let fixture: ComponentFixture<PageAddOrEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddOrEditClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddOrEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
