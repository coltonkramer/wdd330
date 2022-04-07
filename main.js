const links = [
  {
    label: "Week 1 Notes",
    url: "week1/index.html",
  },
  {
    label: "Week 2 Notes",
    url: "week2/index.html",
  },
  {
    label: "Week 3 Notes",
    url: "week3/index.html",
  },
  {
    label: "Week 4 Notes",
    url: "week4/index.html",
  },
  {
    label: "Week 5 Notes",
    url: "week5/index.html",
  },
  {
    label: "Mid Term Project | Todo list",
    url: "challenge-one-to-do/index.html",
  },
  {
    label: "Week 7 Notes",
    url: "week7/index.html",
  },
  {
    label: "Week 8 Notes",
    url: "week8/index.html",
  },
  {
    label: "Week 9 Notes",
    url: "week9/index.html",
  },
  {
    label: "Week 10 Notes",
    url: "week10/index.html",
  },
  {
    label: "Final Project | Weather App",
    url: "final-project/src/index.html",
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
