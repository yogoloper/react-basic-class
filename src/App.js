import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent'; 
import UpdateContent from './components/UpdateContent'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
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
  getReadContent() {
    let i = 0;
    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    let _title = null, _desc = null, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      const _contents = this.getReadContent();
      _article = <ReadContent title={_contents._itle} desc={_contents.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        const _contents = this.state.contents
        this.setState({ contents: _contents.concat({id: _contents[_contents.length-1].id + 1, title: _title, desc: _desc})});
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      const _contents = this.getReadContent();
      _article = <UpdateContent data={_contents} onSubmit={function(_id, _title, _desc) {
        const _contents = Array.from(this.state.contents)
        for (let i = 0; i < _contents.length; i++) {
          if (_id === _contents[i].id) {
            _contents[i].title = _title;
            _contents[i].desc = _desc;
            break;
          }
        }
        this.setState({ contents: _contents, mode:'read', selected_content_id: _id});
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
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
        {this.getContent()}
      </div>
    )
  }
}

export default App;
