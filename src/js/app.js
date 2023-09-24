import PopUpWidget from "./popup.widget";

const popUp = new PopUpWidget();

const btn = document.querySelector(".btn");
btn.addEventListener("click", showPopup);

export function showPopup(e) {
  if (!e.target.id) {
    const id = popUp.showPopUp(
      e.target,
      "Popup title",
      "And here's some amazing content. It's very engaging. Right?",
    );
    e.target.id = id;
  } else {
    popUp.removePopUp(e.target.id);
    e.target.id = "";
  }
}
