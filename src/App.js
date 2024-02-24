import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'Web', sub: 'world wide web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Language.'},
        {id: 2, title: 'CSS', desc: 'CSS is ...'},
        {id: 3, title: 'JavaSCript', desc: 'JavaSCript is ...'},
      ],
    }
  }

  render() {
    let _title = null, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({ mode:'welcome' });
          }.bind(this)}>
        </Subject>
        <Control onChangeMode={function(_mode) {
          this.setState({ mode: _mode });
        }.bind(this)}></Control>
        <TOC
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({ mode:'read', selected_content_id: Number(id) });
          }.bind(this)}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
