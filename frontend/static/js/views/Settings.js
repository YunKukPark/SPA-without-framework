import AbstractView from './AbstractView.js';

class Settings extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>Manage your Settings</p>
    `;
  }
}

export default Settings;