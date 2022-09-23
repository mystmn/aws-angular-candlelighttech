import { ComponentFixture, TestBed } from '@angular/core/testing' 

import { CardImagesComponent } from './card-images.component' 

describe('CardImagesComponent', () => {
  let component: CardImagesComponent 
  let fixture: ComponentFixture<CardImagesComponent> 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImagesComponent ]
    })
    .compileComponents() 

    fixture = TestBed.createComponent(CardImagesComponent) 
    component = fixture.componentInstance 
    fixture.detectChanges() 
  }) 

  it('should create', () => {
    expect(component).toBeTruthy() 
  }) 
}) 
