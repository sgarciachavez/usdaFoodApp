import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodItemPage } from './food-item.page';

describe('FoodItemPage', () => {
  let component: FoodItemPage;
  let fixture: ComponentFixture<FoodItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
