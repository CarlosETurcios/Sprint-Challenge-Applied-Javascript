// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
const articleArray = [''];

articleArray.forEach(i => {
  // console.log('https://lambda-times-backend.herokuapp.com/articles' + i);

  axios
    .get('https://lambda-times-backend.herokuapp.com/articles' + i)
    .then(response => {
      console.log(response.data);

      let cards = document.querySelector('.cards-container');

      cards.appendChild(articleCreator(response));
    })
    .catch(e => {
      console.log(e);
    });
});

function articleCreator(info) {
  //create elements
  const Article = document.createElement('div');
  const headLine = document.createElement('div');
  const authors = document.createElement('div');
  const newImg = document.createElement('img');
  const authorName = document.createElement('span');

  //set content
  console.log(info.data.articles.bootstrap[0].headline);
  headLine.textContent = info.data.articles.bootstrap[0].headline;
  authors.textContent = info.data.articles.bootstrap[0].authorName;
  newImg.setAttribute('src', info.data.articles.bootstrap[0].authorPhoto);
  //authorName.textContent = info.data;

  //creat Structure
  Article.appendChild(headLine);
  headLine.appendChild(authors);
  Article.appendChild(newImg);
  Article.appendChild(authorName);

  //apply style
  Article.classList.add('.cards-container');
  Article.classList.add('.card');
  Article.classList.add('.author');
  Article.classList.add('.span');

  return Article;
}
