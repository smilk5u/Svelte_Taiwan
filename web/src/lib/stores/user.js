import { writable } from 'svelte/store';

// 초기 사용자 정보
const initialUser = {
  userId: '',
  authorities: [],
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  enabled: false
};

// 사용자 정보를 저장할 writable 스토어 생성
export const user = writable(initialUser);

/**
 * 사용자 정보 업데이트 함수
 * @param {any} userInfo - 로그인한 사용자 정보
 */
export function updateUser(userInfo) {
  user.update(prevUserInfo => ({
    ...prevUserInfo, //...prevUserInfo 구문을 사용하여 이전 사용자 정보의 속성을 전개
    ...userInfo //...userInfo 구문을 사용하여 userInfo 매개변수의 속성을 전개
  }));
}