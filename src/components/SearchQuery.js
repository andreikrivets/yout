const getSearchResults = async (value, nextPageToken) => {
  console.log(nextPageToken);
  const pageToken = nextPageToken || '';
  const key = "AIzaSyC7d6ZDp82oQ5dUHJxDRSW2PJNSr5IZ_kE";
  const initUrl = 'https://www.googleapis.com/youtube/v3/search?';
  const URL = `${initUrl}&key=${key}&type=video&part=snippet&pageToken=${pageToken}&maxResults=${10}&q=${value}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default getSearchResults;
