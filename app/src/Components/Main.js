import { Component } from 'react';
import Notícias from './Notícias';
import '../SCSS/main.scss';

class Main extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95039c3e033340cbbfbb34114d1f4771')
      .then(res => res.json())
      .then(json => this.setState({
        articles: json.articles,
      }))
      .then(res => console.log('ae'))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main className="main">
        <Notícias articles={this.state.articles}/>
      </main>
    )
  }
}

export default Main;