import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgErrorComponent } from './msg-error.component';

describe('MsgErrorComponent', () => {
  let component: MsgErrorComponent;
  let fixture: ComponentFixture<MsgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
