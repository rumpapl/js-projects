function showNotification({ top = 0, right = 0, className, html }) {
  /* my code */
  const notification_div = document.createElement("div");
  notification_div.innerHTML = html;
  notification_div.classList.add("notification");
  className && notification_div.classList.add(className);
  notification_div.style.top = top + "px";
  notification_div.style.right = right + "px";
  document.body.append(notification_div);

  setTimeout(() => notification_div.remove(), 1500);
}

// call script
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
