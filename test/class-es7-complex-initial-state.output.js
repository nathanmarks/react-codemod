/*eslint-disable no-extra-semi*/
import React from 'React';

class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {foo} = props;
    this.requestsList = [];
    this.state = {roar: 'bar'};
  }

  static propTypes = {
    foo: React.PropTypes.string,
  };

  componentWillMount() {
    this.setState({roar: 'meow'});
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.foo !== this.props.foo;
  }

  doAutobind = text => {
    this.setState({roar: text});
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