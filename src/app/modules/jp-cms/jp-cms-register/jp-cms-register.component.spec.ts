import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpCmsRegisterComponent } from './jp-cms-register.component';

describe('JpCmsRegisterComponent', () => {
  let component: JpCmsRegisterComponent;
  let fixture: ComponentFixture<JpCmsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpCmsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpCmsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
