import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextProtectedReCatpchaComponent } from './text-protected-re-catpcha.component';

describe('TextProtectedReCatpchaComponent', () => {
  let component: TextProtectedReCatpchaComponent;
  let fixture: ComponentFixture<TextProtectedReCatpchaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextProtectedReCatpchaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextProtectedReCatpchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
