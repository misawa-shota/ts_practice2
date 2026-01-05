function memo(): void {
  var memo: unknown = prompt("入力してください");
  var newElement = document.createElement("li");
  newElement.textContent = String(memo);

  var memo_list = document.getElementById("memo-list");
  memo_list?.appendChild(newElement);
}

var btn = document.querySelector("button");
btn?.addEventListener("click", memo);