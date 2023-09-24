export default class PopUpWidget {
  constructor() {
    this.popups = {};
  }

  showPopUp(parentEl, title, text) {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    const arrow = document.createElement("div");
    arrow.classList.add("arrow");
    const popupHeader = document.createElement("div");
    popupHeader.classList.add("popup-header");
    popupHeader.textContent = title;
    const popupBody = document.createElement("div");
    popupBody.classList.add("popup-body");
    popupBody.textContent = text;
    popupContainer.appendChild(arrow);
    popupContainer.appendChild(popupHeader);
    popupContainer.appendChild(popupBody);
    document.body.appendChild(popupContainer);

    const id = performance.now();
    this.popups[id] = popupContainer;

    const wCont = popupContainer.getBoundingClientRect().width;
    const hCont = popupContainer.getBoundingClientRect().height;
    arrow.style.left = wCont / 2 - 6 + "px";
    arrow.style.top = hCont - 6 + "px";

    const { bottom, left, width } = parentEl.getBoundingClientRect();
    popupContainer.style.left = left - (wCont - width) / 2 + "px";
    popupContainer.style.bottom = bottom + 6 + "px";

    return id;
  }

  removePopUp(id) {
    this.popups[id].remove();
    delete this.popups[id];
  }
}
