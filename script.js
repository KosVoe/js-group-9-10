"use strict";
const adminLogin = "adm@gmail.com";
const adminPassword = "adm123";

const cancelLog = "canceled by user!";
const wrongLog = "Access is denied!";

const cancelPass = "canceled by user!";
const wrongPass = "Access is denied!";

const greet = "Welcome!";

const logInput = prompt("please, enter your login", "");

if (logInput === null) {
  alert(cancelLog);
} else if (logInput !== adminLogin) {
  alert(wrongLog);
} else {
  const passInput = prompt("please, enter your password", "");

  if (passInput === null) {
    alert(cancelPass);
  } else if (passInput !== adminPassword) {
    alert(wrongPass);
  } else {
    alert(greet);
  }
}
