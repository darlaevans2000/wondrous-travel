import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
import './images/logo.png'
import './images/background.png'
import './css/base.scss';

import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

let domUpdates = {
changePageView() {
    const loginPage = document.getElementById('loginPage');
    const userPage = document.getElementById('userPage');
    loginPage.classList.add('hidden');
    userPage.classList.remove('hidden');
  },

  welcomeUserName(user) {
    const welcomeName = document.getElementById('currUserName');
    const firstName = user.returnFirstName();
    welcomeName.innerText = `${firstName}!`;
  },

}

export default domUpdates;