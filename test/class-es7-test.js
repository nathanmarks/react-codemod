/*eslint-disable no-extra-semi*/
import React from 'React';

const Component = React.createClass({
  propTypes: {
    foo: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      foo: 'bar',
    };
  },

  componentWillMount() {
    this.setState({
      foo: 'meow',
    });
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.foo !== this.props.foo;
  },

  doAutobind(text) {
    this.setState({
      foo: text,
    });
  },

  doNotAutobind() {
    return 'meow';
  },

  render: function() {
    return (
      <div onClick={this.doAutobind}>
        {this.doNotAutobind()}
      </div>
    );
  },
});

export default Component;
