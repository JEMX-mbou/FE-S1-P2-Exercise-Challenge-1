document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  const flex = {
    "flex-direction": {
      name: "flexDirection",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    "flex-wrap": {
      name: "flexWrap",
      options: ["nowrap", "wrap"],
    },
    "align-content": {
      name: "alignContent",
      options: [
        "flex-start",
        "flex-end",
        "center ",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
    },
    "justify-content": {
      name: "justifyContent",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    "align-items": {
      name: "alignItems",
      options: ["baseline", "flex-start", "flex-end", "center", "stretch"],
    },
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentElement.parentElement;
      const row = parent.querySelector(".row");
      let property = parent.id;

      if (property == "all") {
        property = button.value;
        console.log(property);
      }

      const optionElement = parent
        .querySelector(".options")
        .querySelector("." + property);

      changeProperty(
        flex[property].name,
        flex[property].options,
        optionElement,
        row
      );
    });
  });

  function changeProperty(property, options, optionElement, row) {
    const count = parseInt(row.getAttribute("data-count"));
    const length = options.length;
    let newCount = false;

    if (count != NaN && count < length - 1) {
      newCount = count + 1;
    } else {
      newCount = 0;
    }

    row.setAttribute("data-count", newCount);
    row.style[property] = options[newCount];

    optionElement.querySelector("span").innerHTML = options[newCount];
  }
});
