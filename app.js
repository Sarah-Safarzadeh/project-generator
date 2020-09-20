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

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
  return `
  Name: ${userName}
  Github: ${githubName}
  `;
}
console.log(name, github);
console.log(generatePage(name, github));