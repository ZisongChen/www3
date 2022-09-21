import "./styles.css";

setTimeout(async function getUsers() {
  var j = 0;
  const usersTable = document.getElementById("users");
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const usersPromise = await fetch(url);
  const user = await usersPromise.json();
  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const dataPromise = await fetch(url2);
  const data = await dataPromise.json();
  var name = user.dataset.dimension.Alue.category.label;
  var value1 = user.dataset.value;
  var value2 = data.dataset.value;
  for (let i in name) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.innerHTML = name[i];
    td1.className = "tcell";

    td2.innerHTML = value1[j];
    td2.className = "tcell";

    td3.innerHTML = value2[j];
    td3.className = "tcell";
    var rate = (2, (value2[j] / value1[j]) * 100).toFixed(2);
    td4.innerHTML = rate + "%";

    td4.className = "tcell";
    for (var w = 0; w < 310; w++) {
      if (j === 2 * w + 1) {
        td1.id = "even";
        td2.id = "even";
        td3.id = "even";
        td4.id = "even";
        break;
      }
      if (j === 2 * w) {
        td1.id = "odd";
        td2.id = "odd";
        td3.id = "odd";
        td4.id = "odd";
        break;
      }
    }
    if (rate > 45) {
      td1.id = "over";
      td2.id = "over";
      td3.id = "over";
      td4.id = "over";
    }
    if (rate < 25) {
      td1.id = "less";
      td2.id = "less";
      td3.id = "less";
      td4.id = "less";
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    usersTable.appendChild(tr);
    j++;
  }
});
