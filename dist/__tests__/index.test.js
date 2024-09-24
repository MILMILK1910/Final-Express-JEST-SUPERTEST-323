"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import request from "supertest";
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
describe("Sanity test", () => {
    test("1 should equal 1", () => {
        expect(1).toBe(1);
    });
});
/*describe('users', () => {
  test('Name', async () => {
    const response = await request(app)
      .get('/users')
      .query({ name: 'Yanisa' })
      .expect(200);
    expect(response.text).toBe('Name: Yanisa');
  });
  test('Id', async () => {
    const response = await request(app)
      .get('/id')
      .query({Id:6604101323 })
      .expect(200);
    expect(response.text).toBe('Id:6604101323');
  });
});*/
describe('GET/user', () => {
    it('Profile', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get('/user')
            .expect(200)
            .expect('Content-Type', /json/);
        expect(response.body).toEqual({
            id: 323,
            name: 'Yanisa',
            age: 20
        });
    }));
});
