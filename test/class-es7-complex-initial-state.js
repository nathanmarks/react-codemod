/*eslint-disable no-extra-semi*/
import React from 'React';

const Component = React.createClass({
  propTypes: {
    foo: React.PropTypes.string,
  },

  getInitialState: function() {
    const {foo} = this.props;
    this.requestsList = [];
    return {roar: 'bar'};
  },

  componentWillMount() {
    this.setState({roar: 'meow'});
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.foo !== this.props.foo;
  },

  doAutobind(text) {
    this.setState({roar: text});
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
