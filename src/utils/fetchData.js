export const exerciseOptions = {
    method: 'GET',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    },
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const wgerOptions = {
  method: 'GET',
};

export const fetchWgerCategories = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log([...data.results.category.id]);
  return [...data.results.category.id];
}

export const fetchWger = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
    return data;
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
    return data;
};