import { TestBed } from '@angular/core/testing';

import { MathsService } from './maths.service';

describe('MathsService', () => {
  let service: MathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  })

  it('should add two numbers correctly', () => {
    const result = service.add(1, 2);
    expect(result).toBe(3);
  })

  it('should substract two numbers correctly', () => {
    const result = service.subtract(3, 2);
    expect(result).toBe(1);
  })

  it('should substract two numbers correctly', () => {
    const result = service.subtract(6, 3);
    expect(result).toBe(3);
  })
});
