const baseUrl = `/api/lottodata`;

export const getLotteryData = async ({docid,sheetname}: {docid: string, sheetname: string}) => {
  const params = new URLSearchParams();

  params.set('docid',docid);
  params.set('sheetname', sheetname);

  const response = await fetch(`${baseUrl}?${params}`);
  const data = await response.json();
  return data;
};

