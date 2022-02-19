// const newComment = {
//     name: hikeName,
//     date: new Date(),
//     content: comment
//   };

const commentList = [
  {
    name: "Teton Canyon",
    date: "02/19/2022",
    content: "I had a great time out in nature with my mom",
  },
  {
    name: "Belcher Falls",
    date: "02/07/2022",
    content: "Incredible hike",
  },
  {
    name: "Denanda Falls",
    date: "12/30/2021",
    content: "Incredible hike",
  },
];

export default class Comments {
  // constructor() {
  // let container = document.querySelector(".commentStyle");
  // let input = document.createElement('input');
  // input.setAttribute('type','text');
  // input.setAttribute('class','inputSelector');
  // container.append(input);
  // alert('Its doing it');

  // }
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
    this.backButton = this.buildBackButton();
  }
  // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
  getAllComments() {
    return commentList;
  }
  // For the first stretch we will need to get just one hike.
  getComment(commentName) {
    return this.getAllComments().find(
      (comment) => comment.name === commentName
    );
  }
  //show a list of hikes in the parentElement
  showCommentList() {
    this.parentElement.innerHTML = "";
    // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    renderCommentList(this.parentElement, this.getAllComments());
    this.addHikeListener();
    // make sure the back button is hidden
    this.backButton.classList.add("hidden");
  }
  // show one hike with full details in the parentElement
  showOneComment(commentName) {
    const comment = this.getComment(commentName);
    this.parentElement.innerHTML = "";
    this.parentElement.appendChild(renderOneCommentFull(comment));
    // show the back button
    this.backButton.classList.remove("hidden");
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addCommentListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach((child) => {
      child.addEventListener("touchend", (e) => {
        // why currentTarget instead of target?
        this.showOneComment(e.currentTarget.dataset.name);
      });
    });
  }
  buildBackButton() {
    const backButton = document.createElement("button");
    backButton.innerHTML = "&lt;- All Comments";
    backButton.addEventListener("touchend", () => {
      this.showCommentList();
    });
    backButton.classList.add("hidden");
    this.parentElement.before(backButton);
    return backButton;
  }
}
function renderCommentList(parent, hikes) {
  hikes.forEach((hike) => {
    parent.appendChild(renderOneCommentLight(hike));
  });
}
function renderOneCommentLight(comment) {
  const item = document.createElement("li");
  item.classList.add("light");
  // setting this to make getting the details for a specific comment easier later.
  item.setAttribute("data-name", comment.name);
  item.innerHTML = ` 
    <div>
    <h2>${comment.name}</h2>
    <p>${comment.date}</p>
    <p>${comment.content}</p>
    </div>`;

  return item;
}
function renderOneCommentFull(comment) {
  const item = document.createElement("li");
  item.innerHTML = ` 
    <div>
    <h2>${comment.name}</h2>
    <p>${comment.date}</p>
    <p>${comment.content}</p>
    </div>`;
  return item;
}
