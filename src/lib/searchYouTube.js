var searchYouTube = (term) => {
  // TODO
  let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${window.YOUTUBE_API_KEY}&type=video&q=${term}&part=snippet&maxResults=5`;
  fetch(endpoint)
    .then(resp => resp.json())
    .then((resp) => {
      this.setState({
        currentVideoList: resp.items,
        currentVideo: resp.items[0]
      });
    }); 
};

window.searchYouTube = searchYouTube;
