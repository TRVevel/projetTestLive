import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test si name est vide
  it('should have a default gretting for guests', () => {
    component.name='';
    component.updateGreeting();
    expect(component.greeting).toBe('Hello, Guest!')});

    //Test avec 2 valeurs différente
    it('should have the name Carlos',() => {
      component.name='Carlos';
      component.updateGreeting();
      expect(component.greeting).toBe('Hello, Carlos!')}
    );

    it('should have the name Ava',() => {
      component.name='Ava';
      component.updateGreeting();
      expect(component.greeting).toBe('Hello, Ava!')}
    );
});
