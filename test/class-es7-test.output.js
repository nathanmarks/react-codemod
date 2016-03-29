/*eslint-disable no-extra-semi*/
import React from 'React';

class Component extends React.Component {
  static propTypes = {
    foo: React.PropTypes.string,
  };

  state = {
    foo: 'bar',
  };

  componentWillMount() {
    this.setState({
      foo: 'meow',
    });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.foo !== this.props.foo;
  }

  doAutobind = text => {
    this.setState({
      foo: text,
    });
  };

  doNotAutobind() {
    return 'meow';
  }

  render() {
    return (
      <div onClick={this.doAutobind}>
        {this.doNotAutobind()}
      </div>
    );
  }
}

export default Component;
