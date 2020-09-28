import { request } from './request';

export function phoneLogin(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function loginStatu() {
  return request({
    url: '/login/status'
  })
}