document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".showup-share-card-btn");
  const shareCard = document.querySelector(".share-container-hidden");
  const cardFooter = document.querySelector(".article-footer");
  const shareArrow = document.querySelector(".share-container-arrow");
  const popUpcardBtn = document.querySelector(".pop-up-card-btn");

  shareCard.style.display = "none";
  shareArrow.style.display = "none";

  function toggleShareContainer() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
      if (
        cardFooter.style.display === "none" ||
        cardFooter.style.display === ""
      ) {
        cardFooter.style.display = "flex"; /* shows card footer*/
      } else {
        shareCard.style.display = "flex"; /* shows share card*/
      }
    } else {
      if (shareCard.style.display === "flex") {
        shareCard.style.display = "none";
      } else {
        shareCard.style.display = "flex";
        shareArrow.style.display = "block";
      }
    }
  }

  shareBtn.addEventListener("click", toggleShareContainer);

  popUpcardBtn.addEventListener("click", function () {
    if (shareCard.style.display === "flex") {
      cardFooter.style.display = "flex";
      shareCard.style.display = "none";
    }
  });
});
