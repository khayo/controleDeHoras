import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PainelComponent } from './painel.component';

describe('PainelComponent', () => {
  let component: PainelComponent;
  let fixture: ComponentFixture<PainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
