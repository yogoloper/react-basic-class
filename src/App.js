import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'Web', sub: 'world wide web!' },
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is ...'},
        {id: 3, title: 'JavaSCript', desc: 'JavaSCript is ...'},
      ],
    }
  }

  render() {
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title='HTML' desc='HTML is Hypertext Markup Language.'></Content>
      </div>
    )
  }
}

export default App;
