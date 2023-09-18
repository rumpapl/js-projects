document.head.innerHTML += `<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>`;

const divEle = document.createElement("div");
const h2Ele = document.createElement("h2");
const pEle = document.createElement("p");
const hrEle = document.createElement("hr");

divEle.className = "alert";
divEle.innerHTML =
  "<strong>Hi there!</strong> You've read an important message.";
h2Ele.innerHTML = "<h2>Hi</h2>";
pEle.innerHTML = "<p>Hello</p>";

document.body.append(divEle);
divEle.before(h2Ele, hrEle);
divEle.after(pEle);
setTimeout(() => {
  h2Ele.remove();
  document.body.insertAdjacentHTML("afterbegin", `<span>Greeting...</span>`);
}, 1000);

const div2Ele = divEle.cloneNode(true);
div2Ele.querySelector("strong").innerHTML = "Bye there!";

divEle.after(div2Ele);

// Task: Create a tree from the object
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

console.log(data);

const createTreeText = (obj) => {
  let li = "";
  let ul;
  for (let key in obj) {
    log(createTreeText(obj[key]));
    li += "<li>" + key + createTreeText(obj[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
};

const createTree = (container, data) => {
  container.innerHTML = createTreeText(data);
};

// let container = document.getElementById("container");
// createTree(container, data);

let lis = document.getElementsByTagName("li");
console.log({ lis });

for (let li of lis) {
  // get the count of all <li> below this <li>
  console.log(li.getElementsByTagName("li").length);
  console.log(li.getElementsByTagName("li"));
  let descendantsCount = li.getElementsByTagName("li").length;
  if (!descendantsCount) continue;

  // add directly to the text node (append to the text)
  li.firstChild.data += " [" + descendantsCount + "]";
  console.log(li.firstChild.data);
}
