const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const div = document.createElement('div');
    div.classList.add('header');
  const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = `${date}`;
  const h1 = document.createElement('h1');
    h1.textContent =`${title}`;
  const spanT = document.createElement('span');
    spanT.classList.add('temp');
    spanT.textContent =`${temp}`;
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(spanT);
  return div;
}
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const temp = Header('title', 'date', 'temp');
 const header = document.querySelector(selector);
 header.appendChild(temp)
 return header;
}
export { Header, headerAppender }
