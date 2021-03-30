import { BASE_URL } from '../constants/apiConfig';

export const getJobsList = async () => {
  try {
    let response = await fetch(`${BASE_URL}/categories`, { method: 'GET'});

    if(response.status === 200) {
      let jobsList = await response.json();
      return jobsList;
    }

  } catch(err) {
    console.log(err);
  }
};
