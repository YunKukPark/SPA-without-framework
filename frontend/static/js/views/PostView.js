import AbstractView from './AbstractView.js';

class PostView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    return `
      <h1>Post #${this.params.id}</h1>
      <p>You Read post number ${this.params.id}</p>
    `;
  }
}

export default PostView;
