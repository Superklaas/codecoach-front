import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import jwt_encode from "jwt-encode";
import jwt_decode from "jwt-decode";

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  let localStorageData;

  const validDummyToken = jwt_encode({
    exp: (Date.now() / 1000) + 1000,
    sub: '1',
    iat: Date.now() / 1000,
    role: 'ADMIN',
  }, "UNIT-TEST-SECRET");

  const expiredDummyToken = jwt_encode({
    exp: (Date.now() / 1000) - 1000,
    sub: '1',
    iat: Date.now() / 1000,
    role: 'ADMIN',
  }, "UNIT-TEST-SECRET");

  beforeEach(() => {
    localStorageData = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in localStorageData ? localStorageData[key] : null;
      },
      setItem: (key: string, value: string) => {
        localStorageData[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete localStorageData[key];
      },
      clear: () => {
        localStorageData = {};
      }
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

  });

  it('should be created with a null token', () => {
    service = TestBed.inject(TokenService);
    expect(service).toBeTruthy();
    expect(service.getToken()).toBeNull();
  });

  it('should be created with a valid token', () => {
    localStorageData["jwt_token"] = validDummyToken;
    service = TestBed.inject(TokenService);
    expect(service.getToken()).not.toBeNull();
    expect(service.getToken().role).toBe("ADMIN");
  });

  it('should be created with an invalid token', () => {
    localStorageData["jwt_token"] = "invalid dummy token!!!";
    service = TestBed.inject(TokenService);
    expect(service.getToken()).toBeNull();
    expect(localStorageData["jwt_token"]).toBeFalsy();
  });

  it('should be created with an expired token', () => {
    localStorageData["jwt_token"] = expiredDummyToken;
    service = TestBed.inject(TokenService);
    expect(service.getToken()).toBeNull();
    expect(localStorageData["jwt_token"]).toBeFalsy();
  });

  it('should throw when trying to set an invalid jwt', () => {
    service = TestBed.inject(TokenService);
    expect(() => service.setToken(expiredDummyToken)).toThrowError("trying to set an expired token")
  });

});
