// CAN DELETE CODE - COMMENTED OUT AS REFERENCE:

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };

// printProfileData(profileDataArgs);

const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});