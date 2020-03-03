import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistratePage } from './registrate.page';

describe('RegistratePage', () => {
  let component: RegistratePage;
  let fixture: ComponentFixture<RegistratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
