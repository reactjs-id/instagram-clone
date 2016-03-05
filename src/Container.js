// Smart component, semua state logic di handle disini, tidak boleh ada satupun html tag (view) disini
import React from 'react';
import {Grid} from 'react-bootstrap';
import faker from 'faker';

const posts = [];
for (var i = 10; i >= 0; i--) {
    posts.push({
        profile: {
            avatar: faker.image.avatar(),
            name: faker.name.findName(),
        },
        meta: {
            likes: Math.floor(Math.random() * 10)
        },
        message: faker.lorem.sentence(),
        image: faker.image.imageUrl()
    })
}

export default class Container extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
        posts
    }

  }

  render() {
    return (
      <Grid>{this.props.children}</Grid>
    );
  }
}
