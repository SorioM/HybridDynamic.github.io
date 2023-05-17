export const exerciseOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '4768da30efmsh58c64e50bc06b7dp133f71jsn2534ac38185b'
    }
  }; 

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0903d93719mshfaf1059a36a61edp14cfe5jsn35f25a7ec13b',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData = async (url, options) => {
     const response = await fetch(url, options);
     const data = await response.json();

     return data;
}