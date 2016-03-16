// Smart component, semua state logic di handle disini, tidak boleh ada satupun html tag (view) disini
import React from 'react';
import {Grid} from 'react-bootstrap';
import faker from 'faker';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

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
    // console.log(this.state.posts)
    // console.log(this.props.children)
    return (
      <Grid>
        <Header data={this.state.posts[1].profile} />
        {
          /*this.state.posts.map((obj, index) =>
            <Home key={index} name={obj.profile.name}/>
          )*/
        }
        <Footer />
      </Grid>
    );
  }
}
