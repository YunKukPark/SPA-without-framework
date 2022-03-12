import AbstractView from './AbstractView.js';

class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>You are Viewing my Posts</p>
    `;
  }
}

export default Posts;
