import axios from 'axios';

const local = 'http://localhost:3001';
const prod = '...';

const baseURL = process.env.NODE_ENV === 'production' ? prod : local;

export const getOccupancy = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/traffic/occupancy`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getTrafficToday = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/traffic/today`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getTrafficWeek = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/traffic/week`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getTrafficHour = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/traffic/hour`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getDwellTime = async () => {  
  try {
    const response = await axios.get(`${baseURL}/api/traffic/dwell-time`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getProducts = async () => {  
  try {
    const response = await axios.get(`${baseURL}/api/products`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getProductsTrending = async () => {  
  try {
    const response = await axios.get(`${baseURL}/api/products/trending`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getProductsUnderperforming = async () => {  
  try {
    const response = await axios.get(`${baseURL}/api/products/underperforming`);

    return response;
  } catch (err) {
    console.error(err);
  }
}
