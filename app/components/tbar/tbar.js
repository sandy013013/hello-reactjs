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
      <div>
      {this.props.name}
        <div className="list-container">
        {
          this.props.lists.map(function(item) {
            // assign key for each item
            return <span key={item.id}>{item.name}</span>
          })
        }
        </div>
      </div>
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