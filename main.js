let inpName = document.querySelector(".inpKey");
let inpValue = document.querySelector(".inpValue");
let inpDell = document.querySelector(".inpDell");

let addBtn = document.querySelector(".addBtn");
let dellBtn = document.querySelector(".dellBtn");
let clearBtn = document.querySelector(".clearBtn");
let getBtn = document.querySelector(".getBtn");

addBtn.addEventListener("click", () => {
  localStorage.setItem(inpName.value, inpValue.value);
  inpName.value = "";
  inpValue.value = "";
});

dellBtn.addEventListener("click", () => {
  localStorage.removeItem(inpDell.value);
  inpDell.value = "";
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  inpName.value = inpValue.value = "";
  inpDell.value = "";
  alert("All data has been deleted");
});

getBtn.addEventListener("click", () => {
  console.log(localStorage.getItem(inpName.value));
});

//cookielerden farkı cookielerde 4kb veri tutabilirken local storage 5mb veri tutabilir
//local storage sadece string veri tutar
//local storage sadece aynı domainde çalışır
//local storage sadece js ile kontrol edilebilir
//local storage sadece kullanıcı tarafından silinebilir

//session storage local storage gibi çalışır fakat tarayıcı kapandığında veriler silinir
//session storage sadece o sekmeye özeldir
//session storage sadece js ile kontrol edilebilir
//session storage sadece kullanıcı tarafından silinebilir
//session storage sadece string veri tutar
//session storage sadece aynı domainde çalışır
//session storage sadece aynı sekmeye özeldir

dopcument.cookie; //cookieleri görmek üçün

document.cookie = "name=Elvin"; //cookieleri yaratmaq üçün
document.cookie = "name=Elvin; expires=Sun, 1 Jan 2023 00:00:00 UTC"; //cookieleri silmək üçün

//get funksiyası
function getCookie(name) {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

//set funksiyası

function setCookie(name, value, daysToLive) {
  let cookie = name + "=" + encodeURIComponent(value);
  if (typeof daysToLive === "number") {
    cookie += "; max-age=" + daysToLive * 60 * 60 * 24;
  }
  document.cookie = cookie;
}

//delete funksiyası
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//clear funksiyası

function clearAllCookies() {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    deleteCookie(cookiePair[0].trim());
  }
}
