const getSearchResults = async (value, nextPageToken) => {
  console.log(nextPageToken);
  const pageToken = nextPageToken || '';
  const key = "AIzaSyCfRHnR9VNWlZqMYsGJnDpxqCyqcfIoHrw";
  const initUrl = 'https://www.googleapis.com/youtube/v3/search?';
  const URL = `${initUrl}&key=${key}&type=video&part=snippet&pageToken=${pageToken}&maxResults=${10}&q=${value}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default getSearchResults;
