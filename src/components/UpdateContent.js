import { Component } from 'react';

class UpdateContent extends Component {
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form action='/update_process' method='post' onSubmit={function(e) {
          e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.desc.value);
        }.bind(this)}>
          <p><input type='text' name='title' placeholder='title'></input></p>
          <p><input type='desc' name='desc' placeholder='desc'></input></p>
          <p><input type='submit'></input></p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;