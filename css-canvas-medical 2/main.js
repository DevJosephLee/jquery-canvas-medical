$(".contact-us-button").click(function() {
  $(".modal-hidden").attr("class", "modal-show");
})

$(".modal-close-button").click(function() {
  $(".modal-show").attr("class", "modal-hidden");
})

const viewPages = $(".show")

$(".nav-button").click(function() {
  for (let i = 0; i < viewPages.length; i++) {
    if (viewPages[i].getAttribute("data-view") === $(".nav-button").attr("data-view")) {
      viewPages[i].className = "show";
    } else {
      viewPages[i].className = "hidden";
    }
  }
})

$(".logo").click(function() {
  for (let i = 0; i < viewPages.length; i++) {
    if (viewPages[i].getAttribute("data-view") === $(".logo").attr("data-view")) {
      viewPages[i].className = "show";
    } else {
      viewPages[i].className = "hidden";
    }
  }
})
