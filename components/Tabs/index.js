// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//const topicsArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];
//topicsArray.forEach(items => {
// axios
//   .get(' https://lambda-times-backend.herokuapp.com/topics')
//   .then(response => {
//     console.log(response.data);
//     let tabs = document.querySelector('.topics');
//   });

// const tabs = document.querySelector('.tabs');

// function createTabs() {
//   const tabslist = document.createElement('div');

//   tabslist.appendChild('div');

//   tabslist.textContent = data.javascript;
//   tabslist.textContent = data.bootstrap;
//   tabslist.textContent = data.technology;
//   tabslist.textContent = data.jquery;
//   tabslist.textContent = data.node.js;

//   tabslist.classList.add('.tabs');
//   return tabslist;
// }

//     let t = document.querySelector('.topics');
//     t.appendChild(tabs(response));
//   })
//   .catch(err => {
//     console.log(err);
//   });
// //});

// function tabs(per) {
//   const Tab = document.createElement('div');

//   Tab.textContent = per.data.javascript;

//   //Tab.appendChild(Tab);

//   Tab.classList.add('.topics');

//   return tabs;
// };
