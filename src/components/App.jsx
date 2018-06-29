

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoList: [],
      currentVideo: {}            
    };  
  }
  
  componentDidMount() {
    if (this.props.searchYouTube === undefined) {
      this.searchYouTube('Puppy videos');
    } else {
      this.setState({
        currentVideoList: this.props.searchYouTube,
        currentVideo: this.props.searchYouTube[0]
      });
    }
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
            <Search onClick = {_.debounce(this.searchYouTube.bind(this), 500)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {this.state.currentVideoList.length === 0 ? null : <VideoPlayer video = {this.state.currentVideo}/>}
          </div>
          <div className="col-md-5">
            {this.state.currentVideoList.length === 0 ? null : <VideoList videos = {this.state.currentVideoList} click = {this.handleClick.bind(this)}/>}
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
window.currentInput = '';
window.autoPlay = false;
