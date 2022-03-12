import AbstractView from './AbstractView.js';

class Dashboard extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `
      <h1>Hello, My name is Yunkuk Park</h1>
      <p>Single Page App 을 Frame work 없이 만드는 중</p>
      <p><a href="/posts" data-link>View recent posts</a></p>
    `;
  }
}

export default Dashboard;
