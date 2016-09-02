import React from 'react';

class Tbar extends React.Component{
  constructor(props) {
    // call parent
    super(props);
    this.state = {
    };
  }
  render() {
    return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">{this.props.name}</a>
        </div>
        <ul className="nav navbar-nav">
          {
            this.props.lists.map(function(item) {
              // assign key for each item
              return <li key={item.id}><a href="#">{item.name}</a></li>
            })
          }
        </ul>
      </div>
    </nav>
    )
  }
}

// define propTypes for type validation
Tbar.propTypes = {
  lists: React.PropTypes.array,
  name: React.PropTypes.string
}

// define default value for props
Tbar.defaultProps = {
  name: 'Mark',
  lists: [{
    id: 'abount',
    name: 'About'
  }, {
    id: 'photo',
    name: 'Photo'
  }, {
    id: 'contact',
    name: 'Contact'
  }]
}

export default Tbar;