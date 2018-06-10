import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpCmsEditComponent } from './jp-cms-edit.component';

describe('JpCmsEditComponent', () => {
  let component: JpCmsEditComponent;
  let fixture: ComponentFixture<JpCmsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpCmsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpCmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
