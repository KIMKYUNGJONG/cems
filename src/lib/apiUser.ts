import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

// @route   POST /api/authenticate
// @desc    사용자 로그인 시 아이디와 비밀번호를 확인한다.
// @access  public
export const apiLogin = (username:string, password:string) => {
  return axios.post(baseURL + '/authenticate', {
    username,
    password
  });
};

// @route   
// @desc    로그인 후 필요한 정보들을 세션에 저장한다.
// @access  
export const registerSuccessfulLoginForJwt = (token:string, username:string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('username', username);
  localStorage.setItem('isAuthorized', 'true');
};

// @route   
// @desc    api 전송 시 토큰 정보를 헤더에 붙여서 함께 전송한다.
// @access  
export const setupAxiosInterceptors = () =>{
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

// @route   POST /api/getUsers
// @desc    전체 사용자를 조회한다.
// @access  private
export const apiGetUsers = () => {
  return axios.get(baseURL + '/getUsers');
};

// @route   POST /api/addOrUpdateUser
// @desc    사용자를 추가/수정한다.
// @access  private
export const apiAddOrUpdateUser = (user : any) => {
  //   console.log('====== apiAddOrUpdateUser user ', user);

  return axios.post(baseURL + '/addOrUpdateUser', {
    id: user.id,
    username: user.username,
    password: user.password,
    company_name: user.company_name,
    manager_name: user.manager_name,
    contact_number: user.contact_number,
    email: user.email,
    note: user.note,
    projectNameList: user.projectNameList
  });
};

// @route   GET /api/deleteUserById
// @desc    id로 사용자를 삭제한다.
// @access  private
export const apiDeleteUserById = (user_id : any) => {    
  return axios.get(baseURL + '/deleteUserById', {
    params: {
      user_id: user_id
    }
  });
};