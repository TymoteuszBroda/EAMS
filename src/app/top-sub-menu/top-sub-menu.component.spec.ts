import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSubMenuComponent } from './top-sub-menu.component';

describe('TopSubMenuComponent', () => {
  let component: TopSubMenuComponent;
  let fixture: ComponentFixture<TopSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSubMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
