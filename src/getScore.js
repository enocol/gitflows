import axios from 'axios';

const getScore = async (apiEndPoint) => {
  const { data } = await axios.get(apiEndPoint);

  return data.result;
};

export default getScore;
