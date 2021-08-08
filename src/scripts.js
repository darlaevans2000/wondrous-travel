// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import * as dayjs from 'dayjs'
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/logo.png'
import './images/background.png'
console.log('This is the JavaScript entry file - your code begins here.');
