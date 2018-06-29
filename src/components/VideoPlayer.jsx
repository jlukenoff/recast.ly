var VideoPlayer = (props) => {
  //add autoplay button
  let link = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  if (window.autoPlay) {
    link = link + '?autoplay=1';
  }
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={link} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div>{props.video.snippet.description}</div>
        <span>
          <label className="switch">
            <input type="checkbox" onClick={() => window.autoPlay = !window.autoPlay}/>
            <span className="slider round"></span>
          </label>
          <p>Autoplay</p>
        </span>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
