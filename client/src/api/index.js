import axios from 'axios';

const local = 'http://localhost:3001';
const prod = 'http://Vendeeprod-env.eba-pswampqy.us-east-1.elasticbeanstalk.com';

const baseURL = process.env.NODE_ENV === 'production' ? prod : local;

export const getAuthToken = async (password) => {
  try {
    const response = await axios({ method: 'post', url: `${baseURL}/api/auth`, data: { password } });
    const token = response.data;
    
    return token;
  } catch (err) {
    return console.error(err);
  }
}

export const apiRequest = async (reqestUrl, requestMethod, data) => {
  const url = baseURL + reqestUrl;
  const method = requestMethod || 'get';

  const token = localStorage.getItem('x-auth-token');

  try {
    const response = await axios({ method, url, data, headers: { 'x-auth-token': token } });
    localStorage.setItem(reqestUrl, JSON.stringify(response.data));

    return response;
  } catch (err) {
    if(err.response.data.id === 'INVALID_TOKEN') localStorage.removeItem('x-auth-token');
    return console.log('error', err);
  }
}

