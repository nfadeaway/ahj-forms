import PopUpWidget from "../popup.widget";

test("Тест метода showPopUp класса PopUpWidget", () => {
  const popUp = new PopUpWidget();
  document.body.innerHTML = '<div class="btn"></div>';
  const btn = document.querySelector(".btn");
  popUp.showPopUp(btn, "title", "text");
  expect(document.querySelector(".popup-container")).toBeTruthy();
  expect(document.querySelector(".arrow")).toBeTruthy();
  expect(document.querySelector(".popup-header")).toBeTruthy();
  expect(document.querySelector(".popup-body")).toBeTruthy();
  expect(document.querySelector(".popup-header").textContent).toBe("title");
  expect(document.querySelector(".popup-body").textContent).toBe("text");
});

test("Тест метода removePopUp класса PopUpWidget", () => {
  const popUpWidget = new PopUpWidget();
  document.body.innerHTML = '<div class="btn"></div>';
  const popUp = document.createElement("div");
  popUp.classList.add("popup-container");
  document.body.appendChild(popUp);
  popUpWidget.popups["1"] = popUp;
  popUpWidget.removePopUp(1);
  expect(Object.keys(popUpWidget.popups).length).toBe(0);
  expect(document.querySelector(".popup-container")).toBeFalsy();
});

test("Тест логики нажатия на кнопку", () => {
  const popUp = new PopUpWidget();
  const btn = document.createElement("div");
  btn.classList.add("btn");
  btn.addEventListener("click", (e) => {
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
  });
  btn.click();
  expect(btn.id).not.toBe("");
  btn.click();
  expect(btn.id).toBe("");
});
