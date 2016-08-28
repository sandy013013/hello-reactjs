import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>My name is {this.props.name}</h2>
      </div>
    );
  }
}

// define propTypes for type validation
App.propTypes = {
  name: React.PropTypes.string,
  attr: React.PropTypes.object
}

// define default value for props
App.defaultProps = {
  name: 'test app',
  attr: {}
}

ReactDOM.render(<App />, document.getElementById('app'));
