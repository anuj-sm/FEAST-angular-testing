import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from './mock-data/users';
import { provideHttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let testController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      providers: [ provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(DataService);
    testController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the users', () => {
    service.getUsers().subscribe((users: any) => {
      expect(users).toBeTruthy()
      expect(users.length).toBe(2);
      const secondUser = users.find((user: any) => user.id === 1);
      expect(secondUser.name).toBe('Thor');
    });
    const mockReq = testController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS))
  });

  it('should get the user by Id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy()
      // expect(user.length).toBe(1);
      // const secondUser = user.find((user: any) => user.id === 1);
      // expect(secondUser.name).toBe('Thor');
    });
    const mockReq = testController.expectOne('api/users' + 1);
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush((USERS[1]))
  });

  // it('should update the user', () => {
  //   const change = {name: 'Loki'}
  //   service.updateUser(1, change).subscribe((user: any) => {
  //     expect(user).toBeTruthy()
  //     // expect(user.length).toBe(1);
  //     // const secondUser = user.find((user: any) => user.id === 1);
  //     // expect(secondUser.name).toBe('Thor');
  //   });
  //   const mockReq = testController.expectOne('api/users' + 1, change.name);
  //   expect(mockReq.request.method).toEqual('PUT');
  //   let modifiedUser = USERS[1];
  //   modifiedUser.name = 'Loki'
  //   expect(mockReq.request.body.name).toEqual(change.name)
  //   mockReq.flush(modifiedUser)
  // });
});
