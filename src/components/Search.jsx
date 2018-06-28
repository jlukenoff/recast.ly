var Search = (props) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={e => {
        currentInput = e.target.value; 
        props.onClick(currentInput);
      }}
      />
      <button className="btn hidden-sm-down" onClick={(e) => props.onClick(currentInput, e)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
