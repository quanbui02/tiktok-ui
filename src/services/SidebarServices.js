import httpRequest from '~/utils/httpRequest';

export const accountSuccess = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get(`users/account`, {
      params: {
        q,
        type,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
