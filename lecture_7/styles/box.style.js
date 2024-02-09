const container = document.querySelector(".container");
export const Box = (width, height, background_color, box_margin, image_url) => {
  const box = document.createElement("div");
  const img = document.createElement("img");
  box.appendChild(img);
  box.style.width = width;
  box.style.padding = "20px"
  box.style.height = height;
  box.style.backgroundColor = background_color;
  box.style.margin = box_margin;
  img.src = image_url;
  img.style.width = "30px";
  return container.appendChild(box);
};
