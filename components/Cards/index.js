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
// Create a card for each of the articles and add the card to the DOM.
// const articleArray = [
//   'bootstrap',
//   'javascript',
//   'jquery',
//   'node',
//   'technology'
// ];

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const articleT = response.data.articles;
    for (topic in articleT) {
      for (article in articleT[topic]) {
        Article.appendChild(articleCreator(articleT[topic][article], topic));
      }
    }
  });

//.cartch(err => console.log(err));s

function articleCreator(info) {
  //create elements
  const Article = document.createElement('div');
  const headLine = document.createElement('div');
  const authors = document.createElement('div');
  const img = document.createElement('div');
  const authorName = document.createElement('span');

  //set content
  headLine.textContent = info.data.headline;
  authors.textContent = info.data.authorName;
  img.setAttribute('src', info.data.authorName);
  authorName.textContent = info.data.authorName;

  //creat Structure
  Article.appendChild('headLine');
  Article.appendChild('authors');
  Article.appendChild('img');
  Article.appendChild('authorName');

  //apply style
  Article.classList.add('.cards-container');
  Article.classList.add('.card');
  Article.classList.add('author');
  Article.classList.add('span');
  return Article;
}
