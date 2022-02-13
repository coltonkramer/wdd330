const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
  {
    label: "Week3 notes",
    url: "week3/index.html",
  },
  {
    label: "Week4 notes",
    url: "week4/index.html",
  },
  {
    label: "Week5 notes",
    url: "week5/index.html",
  },
  {
    label: "Todo list",
    url: "challenge-one-to-do/index.html",
  },
];
const list = document.querySelector(".assignment-list");
links.forEach((i) => {
    const labelLi = document.createElement('li')
    const linkLi = document.createElement('a')
    
    linkLi.textContent = i.label
    linkLi.setAttribute('href', i.url)
    
    labelLi.appendChild(linkLi)
    list.appendChild(labelLi)
});
