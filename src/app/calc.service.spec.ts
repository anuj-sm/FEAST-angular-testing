import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service"
import { SharedService } from "./shared.service";

describe('CalcService', () => {

  let calc : CalcService;
  let shared : SharedService;

  beforeEach(() => {    
    shared = new SharedService();
    calc = new CalcService(shared);

    shared = jasmine.createSpyObj('SharedService', ['mysharedService'])

    TestBed.configureTestingModule({
      providers:[ CalcService, {
        provide: SharedService, useValue: shared
      }]
    })

    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);

  })




  it('should add 2 numbers', () => {
    // const sharedService = new SharedService()
    // const calcService = new CalcService(sharedService);
    const result = calc.add(3, 5);
    expect(result).toBe(8)
  })

//   it('should be called', () => {
//     // const shared = new SharedService();
// const shared = jasmine.createSpyObj('SharedService', ['mysharedService'])
//     // spyOn(shared, 'mysharedService').and.callThrough();
//     const calcService = new CalcService(shared);
//     const result = calcService.multiply(3, 5);
//     // expect(shared.mysharedService).toHaveBeenCalled()
//         expect(result).toBe(15)
//   })


 describe('ads', ()=> {
  it('should multiply 2 numbers', () => {
    const shared = new SharedService()
    const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15)
  })
 })
})