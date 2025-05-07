const btn_add = document.querySelector(".add-row");
let tbody = document.querySelector("table tbody");

btn_add.onclick = () => {
  let row = `<tr class="bg-white relative group">
              <td class="px-2 py-2 border">
                <input
                  type="text"
                  class="block border rounded-none outline-none w-full px-3 py-2"
                  placeholder="Name.."
                />
              </td>
              <td class="px-1 py-1 border">
                <input
                  type="text"
                  class="block border rounded-none outline-none w-full px-3 py-2"
                  placeholder="Email.."
                />
              </td>
              <td class="px-1 py-1 border">
                <input
                  type="text"
                  class="block border rounded-none outline-none w-full px-3 py-2"
                  placeholder="Age.."
                />
              </td>
              <td
                class="px-3 py-1 absolute top-3 opacity-0 group-hover:opacity-100 duration-300"
              >
                <i
                  onclick="delete_row(event)"
                  class="delete fas fa-times text-red-400 text-xl cursor-pointer"
                ></i>
              </td>
            </tr>`;
  tbody.insertAdjacentHTML("beforeend", row);
};

function delete_row(e) {
  // e.target.parentElement.parentElement.remove();
  e.target.closest("tr").remove();
}
