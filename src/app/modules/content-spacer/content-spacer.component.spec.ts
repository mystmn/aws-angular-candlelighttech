import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpacerComponent } from './content-spacer.component';

describe('ContentSpacerComponent', () => {
  let component: ContentSpacerComponent;
  let fixture: ComponentFixture<ContentSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSpacerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
