// ============ DOM Elements ============
let body = document.querySelector("body");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let input = document.querySelector("#input");
let todolist = document.querySelector(".todo-list");
let counter = document.querySelector(".counter");
let content = document.querySelector(".content");
let filter = document.querySelector(".filter");
let ClearCompletedBtn = document.querySelector(".Clear-completed");
let activeBtn = document.querySelector(".active");
let allBtn = document.querySelector(".all");
let completedBtn = document.querySelector(".completed");
let mobileFilter = document.querySelector(".mobile-filter");
let mobileAllBtn = document.querySelector(".mobile-filter .all");
let mobileActiveBtn = document.querySelector(".mobile-filter .active");
let mobileCompletedBtn = document.querySelector(".mobile-filter .completed");

// ============ Variables ============
let totalTodo = 0;
let completTodo = 0;
let isDarkMode = true;

// ============ ✅ ADDED: Save Todos ============
function saveTodosToLocalStorage() {
  let allTodos = document.querySelectorAll(".todoItem");
  let todos = [];

  allTodos.forEach((todo) => {
    const text = todo.querySelector(".todoText").textContent;
    const completed = todo.getAttribute("data-completed") === "true";
    todos.push({ text, completed });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// ============ ✅ ADDED: Load Todos ============
function loadTodosFromLocalStorage() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach((todoObj) => {
    createTodoItem(todoObj.text, todoObj.completed);
  });
}

// ============ ✅ ADDED: Reusable Todo Creator ============
function createTodoItem(text, completed = false) {
  let circle = document.createElement("div");
  circle.style.cursor = "pointer";
  circle.className = "circle";

  let todoItem = document.createElement("div");
  todoItem.setAttribute("data-completed", completed ? "true" : "false");
  todoItem.className = "todoItem";
  content.style.display = "flex";

  let todoText = document.createElement("span");
  todoText.className = "todoText";
  todoText.textContent = text;

  if (isDarkMode) {
    todoItem.style.backgroundColor = "var(--Navy-900)";
    todoItem.style.color = "white";
  } else {
    todoItem.style.backgroundColor = "var(--Gray-50)";
    todoItem.style.color = "var(--Navy-850)";
  }

  totalTodo++;
  if (completed) completTodo++;
  updateCounter();

  if (completed) {
    let checkImg = document.createElement("img");
    checkImg.src = "/images/icon-check.svg";
    // checkImg.src = "/todo-app-main/images/icon-check.svg";

    checkImg.alt = "check-icon";
    checkImg.className = "check-icon";
    circle.style.backgroundColor = "pink";
    circle.appendChild(checkImg);
    todoText.style.textDecoration = "line-through";
    todoText.style.opacity = "0.4";
  }

  circle.addEventListener("click", () => {
    const isCompleted = circle.querySelector(".check-icon");
    if (!isCompleted) {
      let checkImg = document.createElement("img");
      // checkImg.src = "/images/icon-check.svg";
      checkImg.src = "/todo-app-main/images/icon-check.svg";

      checkImg.alt = "check-icon";
      checkImg.className = "check-icon";
      circle.style.backgroundColor = "pink";
      circle.appendChild(checkImg);
      todoText.style.textDecoration = "line-through";
      todoText.style.opacity = "0.4";
      todoItem.setAttribute("data-completed", "true");
      completTodo++;
    } else {
      let checkIcon = circle.querySelector(".check-icon");
      checkIcon.remove();
      todoText.style.textDecoration = "none";
      todoText.style.opacity = "1";
      circle.style.backgroundColor = "transparent";
      todoItem.setAttribute("data-completed", "false");
      completTodo--;
    }
    updateCounter();
    saveTodosToLocalStorage(); // ✅ Save changes
  });

  let crossImg = document.createElement("img");
  crossImg.src = "/images/icon-cross.svg";
  crossImg.src = "/todo-app-main/images/icon-cross.svg";
  crossImg.alt = "cross-icon";
  crossImg.className = "cross-icon";
  crossImg.style.display = "none";

  crossImg.addEventListener("click", (e) => {
    e.stopPropagation();
    totalTodo--;
    if (todoItem.getAttribute("data-completed") === "true") {
      completTodo--;
    }
    todoItem.remove();
    updateCounter();
    saveTodosToLocalStorage(); // ✅ Save after delete
  });

  todoItem.addEventListener("mouseenter", () => {
    crossImg.style.display = "block";
  });

  todoItem.addEventListener("mouseleave", () => {
    crossImg.style.display = "none";
  });

  todoItem.appendChild(circle);
  todoItem.appendChild(todoText);
  todoItem.appendChild(crossImg);
  todolist.appendChild(todoItem);

  saveTodosToLocalStorage(); // ✅ Save on create
}

// ============ Counter ============
function updateCounter() {
  let itemsLeft = totalTodo - completTodo;
  let text = itemsLeft + " item";
  if (itemsLeft !== 1) {
    text += "s";
  }
  text += " left";

  counter.textContent = text;
}

// ============ Theme: Light / Dark ============
sun.addEventListener("click", () => {
  isDarkMode = false;
  body.style.backgroundColor = "var(--Gray-50)";
  moon.style.display = "block";
  sun.style.display = "none";
  light.style.display = "block";
  dark.style.display = "none";
  input.style.backgroundColor = "var(--Gray-50)";
  input.style.color = "var(--Navy-850)";
  todolist.style.boxShadow = "5px 10px 25px var(--Gray-300)";
  content.style.boxShadow = "5px 10px 25px var(--Gray-300)";
  content.style.backgroundColor = "var(--Gray-50)";
  counter.style.color = "var(--Navy-850)";
  allBtn.style.color = "var(--Navy-850)";
  activeBtn.style.color = "var(--Navy-850)";
  completedBtn.style.color = "var(--Navy-850)";
  ClearCompletedBtn.style.color = "var(--Navy-850)";
  mobileFilter.style.backgroundColor = "var(--Gray-50)";
  mobileAllBtn.style.color = "var(--Navy-850)";
  mobileActiveBtn.style.color = "var(--Navy-850)";
  mobileCompletedBtn.style.color = "var(--Navy-850)";
  mobileFilter.style.boxShadow = "5px 5px 20px 15px var(--Gray-300)";

  let todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((item) => {
    item.style.backgroundColor = "var(--Gray-50)";
    item.style.color = "var(--Navy-850)";
  });
});

moon.addEventListener("click", () => {
  isDarkMode = true;
  body.style.backgroundColor = "var(--Navy-950)";
  sun.style.display = "block";
  moon.style.display = "none";
  light.style.display = "none";
  dark.style.display = "block";
  input.style.backgroundColor = "var(--Navy-900)";
  input.style.color = "var(--Purple-100)";
  todolist.style.boxShadow = "none";
  content.style.boxShadow = "none";
  content.style.backgroundColor = "var(--Navy-900)";
  counter.style.color = "var(--Purple-300)";
  allBtn.style.color = "var(--Purple-300)";
  activeBtn.style.color = "var(--Purple-300)";
  completedBtn.style.color = "var(--Purple-300)";
  ClearCompletedBtn.style.color = "var(--Purple-300)";
  mobileFilter.style.backgroundColor = "var(--Navy-900)";
  mobileAllBtn.style.color = "var( --Purple-300)";
  mobileActiveBtn.style.color = "var( --Purple-300)";
  mobileCompletedBtn.style.color = "var( --Purple-300)";
  mobileFilter.style.boxShadow = "none";

  let todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((item) => {
    item.style.backgroundColor = "var(--Navy-900)";
    item.style.color = "var(--Purple-300)";
  });
});

// ============ ✅ Input Event Updated ============
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value.trim() !== "") {
    createTodoItem(input.value, false);
    input.value = "";
  }
});

// ============ Filter Buttons ============
allBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    todo.style.display = "flex";
  });
});

activeBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    if (todo.getAttribute("data-completed") === "true") {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  });
});

completedBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    if (todo.getAttribute("data-completed") === "true") {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
});

mobileAllBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    todo.style.display = "flex";
  });
});

mobileActiveBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    if (todo.getAttribute("data-completed") === "true") {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  });
});

mobileCompletedBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todoItem");
  allTodos.forEach((todo) => {
    if (todo.getAttribute("data-completed") === "true") {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
});

ClearCompletedBtn.addEventListener("click", () => {
  let todos = document.querySelectorAll(".todoItem");
  todos.forEach((todo) => {
    if (todo.getAttribute("data-completed") === "true") {
      todo.remove();
      totalTodo--;
      completTodo--;
    }
  });
  updateCounter();
  saveTodosToLocalStorage(); // ✅ Save after clearing
});

// ============ ✅ Load Todos on Page Load ============
loadTodosFromLocalStorage();
