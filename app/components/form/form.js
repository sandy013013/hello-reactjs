import React from 'react';

class MarkdownForm extends React.Component{
  constructor(props) {
    // call parent
    super(props);
    this.state = {
      value: this.props.default_text,
      markdowns: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmint = this.handleSubmint.bind(this);
  }

  handleChange() {
    this.setState({value: this.refs.textArea.value });
  }

  handleSubmint(e) {
    e.preventDefault();
    
    const nextItems = this.state.markdowns.concat([{
      text: this.state.value,
      id: new Date().getTime()
    }]);
    const nextText = this.props.default_text;
    
    this.setState({
      markdowns: nextItems,
      value: nextText
    });

    this.refs.textArea.value = nextText;
  }

  rawMarkup(value) {
    const md = new Remarkable();
    value = value || this.state.value;
    return { __html: md.render(value) };
  }

  render() {
    return (
      <div className="mark-down-editor">
        <form onSubmit={this.handleSubmint}>
          <h3> Input </h3>
          <textarea onChange={this.handleChange} ref="textArea" defaultValue={this.state.value} />
          <h3> Preview </h3>
          <div className="content" dangerouslySetInnerHTML={this.rawMarkup()}></div>
          <button>Click to add new markdown</button>
        </form>
        <div className="list-container">
        {
          this.state.markdowns.map(function(item) {
            // assign key for each item
            return (
              <div className="item-ct">
                <div className="item" key={item.id} dangerouslySetInnerHTML={this.rawMarkup(item.text)}></div>
              </div>
            );
          }.bind(this))
        }
        </div>
      </div>
    )
  }
}

// define propTypes for type validation
MarkdownForm.propTypes = {
  default_text: React.PropTypes.string
}

// define default value for props
MarkdownForm.defaultProps = {
  default_text: 'type anything'
}

export default MarkdownForm;