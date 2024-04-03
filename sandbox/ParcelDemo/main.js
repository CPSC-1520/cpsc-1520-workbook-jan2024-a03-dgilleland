// When we have stylesheet frameworks that are installed
// as Node packages (like Bootstrap), we can apply the
// stylesheets to our page via JavaScript, as follows:
import 'bootstrap/dist/css/bootstrap.min.css';

// Note that this is a bit different from how we might
// consume/use some JavaScript code from a Node package.
import { isEmail } from 'validator';

const notEmail = "https://www.google.ca";
const goodEmail = "Santa@NorthPole.ca";

console.log(notEmail, isEmail(notEmail));
console.log(goodEmail, isEmail(goodEmail));
