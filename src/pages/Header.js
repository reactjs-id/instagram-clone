import React from 'react';

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data
    return <div>
      <img 
        src = {data.avatar} 
        alt = ""/>
      <div>{data.name}</div>
    </div>
  }
}
