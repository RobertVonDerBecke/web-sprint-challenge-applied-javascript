import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //destructure 
  const { headline, authorPhoto, authorName } = article;
  //create elements for export to dom
  const div = document.createElement('div');
    div.classList.add('card');
    //click functionality
    document.querySelector('.card');
    div.addEventListener('click', function(){console.log(`${headline}`)});
  const divC = document.createElement('div');
    divC.classList.add('headline');
    divC.textContent = `${headline}`;
  const divA = document.createElement('div');
    divA.classList.add('author');
  const divImg = document.createElement('div');
    divImg.classList.add('img-container');
  const img = document.createElement('img');
    img.src = `${authorPhoto}`;
  const span = document.createElement('span');
    span.textContent = `${authorName}`;
  //send to dom
 div.appendChild(divC);
 div.appendChild(divA);
 divA.appendChild(divImg);
 divImg.appendChild(img);
 divA.appendChild(span);

 return div;

 
}

const cardAppender = (selector) => {
  const card = document.querySelector(selector);
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles').then(resp => {
    // debugger;
    // console.log(resp)
    const { articles } = resp.data;
    const temp = Object.entries(articles);
    console.log(temp[0][1][0])
    for(let i = 0; i < 5; i++){
      temp[i][1].forEach((item, index, array) => {
        // debugger;
        card.appendChild(Card(item))
      });
      // card.appendChild(Card(temp[i][1][0]))

    }
    console.log('--------------')
    console.log(temp)
    }).catch(err => { console.error(err)})
}

export { Card, cardAppender }
