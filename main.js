const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
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
