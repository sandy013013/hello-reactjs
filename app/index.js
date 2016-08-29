import React from 'react';
import ReactDOM from 'react-dom';
import Tbar from './components/tbar';
import Timer from './components/timer';
import MarkdownForm from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Tbar name={this.props.name} />
        <Timer />
        <h1>Hello, World!</h1>
        <h2>My name is {this.props.user_name}</h2>
        <MarkdownForm />
      </div>
    );
  }
}

// define propTypes for type validation
App.propTypes = {
  name: React.PropTypes.string,
  user_name: React.PropTypes.string,
  attr: React.PropTypes.object
}

// define default value for props
App.defaultProps = {
  name: 'test app',
  user_name: 'Sandy',
  attr: {}
}

ReactDOM.render(<App />, document.getElementById('app'));
