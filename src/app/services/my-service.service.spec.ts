import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = service.addTwoNumbers(1,2);
    expect(result).toBe(3);
  })

  describe('convertToTileCase', () => {
    it('should convert to title case', () => {
      const phrase = 'good morning';
      expect(service.convertToTileCase(phrase)).toBe('Good Morning');
    })

    it('should test title case for null input', () => {
      expect(service.convertToTileCase('')).toBe('');
    })
  })
});
