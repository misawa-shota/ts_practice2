class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLTextAreaElement;

  constructor() {
    // form要素を取得
    this.element = document.querySelector('#task-form')!; // 非nullアサーション演算子

    // input要素を取得
    this.titleInputEl = document.querySelector('#form-title')!;
    this.descriptionInputEl = document.querySelector('#form-description')!;
    this.bindEvents();
  }

  private submitHandler(event: Event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防止

    // 確認用の処理（各入力項目のプロパティにアクセス）
    console.log(this.titleInputEl.value);
    console.log(this.descriptionInputEl.value);
  }

  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
}

new TaskForm();