import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsRequestsComponent } from './permissions-requests.component';

describe('PermissionsRequestsComponent', () => {
  let component: PermissionsRequestsComponent;
  let fixture: ComponentFixture<PermissionsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionsRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
