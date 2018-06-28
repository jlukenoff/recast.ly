

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]            
    };
    this.searchYouTube(this.props.searchYouTube);  
  }
  
  handleClick(index) {
    let vidList = this.state.currentVideoList;
    this.setState({
      currentVideo: vidList[index]
    });
  }

  searchYouTube(term) {
    let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${window.YOUTUBE_API_KEY}&type=video&q=${term}&part=snippet&maxResults=5`;
    fetch(endpoint)
      .then(resp => resp.json())
      .then((resp) => {
        this.setState({
          currentVideoList: resp.items,
          currentVideo: resp.items[0]
        });
      });   
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
  <App searchYouTube={'Kitties'}/>,
  document.getElementById('app')
);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
window.currentInput = '';
