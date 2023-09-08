import axios from 'axios';

const createScore = async (apiEndPoint, obj) => {
  const { data } = await axios.post(apiEndPoint, obj);

  return data;
};

export default createScore;
