

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]            
    };  
  }
  
  handleClick(index) {
    let vidList = this.state.currentVideoList;
    this.setState({
      currentVideo: vidList[index]
    });
  }

  searchYouTube(term) {
    // fetch(`https://www.googleapis.com/youtube/v3/search?key=${window.YOUTUBE_API_KEY}&type=video&q=${term}&part=snippet,id&maxResults=5`)
    //   .then(resp => resp.json())
    //   .then((resp) => {
    //     console.log(resp);
    //     //this.setState({video: resp.results});
    //     // this.setState({video: resp.items});
    //     // console.log(this.state.video);
    //   });
    console.log(term);
    // make request with template to YouTube
    // if success: set state of currentVideo, currentVideoList   
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick = {this.searchYouTube.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.currentVideoList} click = {this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
