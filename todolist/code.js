document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
              <div class="task">
                  <span class="text">
                      ${document.querySelector("#newtask input").value}
                  </span>
                  <button class="edit">
                      <i class="far fa-edit"></i>
                  </button>
                  <button class="delete">
                      <i class="far fa-trash-alt"></i>
                  </button>
              </div>
          `;

    // Membersihkan input
    document.querySelector("#newtask input").value = "";

    // edit
    var editButtons = document.querySelectorAll(".edit");
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].onclick = function () {
        var taskText = this.parentNode.querySelector(".text");
        var newText = prompt("Edit task:", taskText.textContent);

        if (newText !== null && newText.trim() !== "") {
          taskText.textContent = newText;
        }
      };
    }

    //  event listener untuk tombol "Hapus"
    var deleteButtons = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
