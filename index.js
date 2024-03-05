const victor = {
  name: "Victor",
  id: 1,
  img: "victor.png",
};

let cloneArr = [victor];

const clones = document.querySelector("#clones");
const select = document.querySelector("select");

const addClone = (victor) => {
  const clone = document.createElement("div");
  clone.className = "clone";
  const h2 = document.createElement("h2");
  h2.textContent = victor.name;
  const p = document.createElement("p");
  p.textContent = `ID: ${victor.id}`;
  const img = document.createElement("img");
  img.src = victor.img;
  img.style.borderRadius = "30px";
  img.style.width = "200px";
  const btn = document.createElement("button");
  btn.textContent = "Clone!";
  btn.style.marginTop = "10px";
  clone.appendChild(h2);
  clone.appendChild(p);
  clone.appendChild(img);
  clone.appendChild(btn);
  clones.appendChild(clone);

  btn.addEventListener("click", () => {
    const cloneVictor = { ...victor, id: cloneArr.length + 1 };
    cloneArr.push(cloneVictor);
    addClone(cloneVictor);
  });
  const option = document.createElement("option");
  option.textContent = victor.id;
  option.value = victor.id;
  select.appendChild(option);
};

addClone(victor);

select.addEventListener("change", () => {
  const selected = cloneArr.filter(
    (clone) => clone.id !== +select.value
  );
  cloneArr = selected;
  clones.replaceChildren();
  select.replaceChildren();
  for (let clone of cloneArr) {
    addClone(clone);
  }
});
