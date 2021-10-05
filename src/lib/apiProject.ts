import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

// @route   POST /api/apiGetProjects
// @desc    전체 프로젝트를 조회한다.
// @access  public
export const apiGetProjects = () => {
  return axios.get(baseURL + '/getProjects');
};

// @route   POST /api/addOrUpdateProject
// @desc    프로젝트를 추가/수정한다.
// @access  private
export const apiAddOrUpdateProject = (project : any) => {
  console.log('====== api call project ', project);
  
  return axios.post(baseURL + '/addOrUpdateProject', {
    id: project.id,
    name: project.name,
    scene_name: project.scene_name,
    application_id: project.application_id,
    sms_number1: project.sms_number1,
    sms_number2: project.sms_number2,
    note: project.note,
    url: project.url,
  });
};
  
// @route   GET /api/deleteProjectById
// @desc    id로 프로젝트를 삭제한다.
// @access  private
export const apiDeleteProjectById = (id : any) => {    
  return axios.get(baseURL + '/deleteProjectById', {
    params: {
      id: id
    }
  });
};