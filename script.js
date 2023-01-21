let id1 = 0;

let fun1 = () => {
  let naam = document.getElementById("naam").value;
  let mail = document.getElementById("mail").value;
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;
  let warn = document.getElementById("warn");
  let great = document.getElementById("great");

  warn.innerText = "";
  great.innerText = "";

  let reg1 = /^[a-zA-Z]/;
  let reg2 = /[^a-zA-Z 0-9]/; //these are the only allowed characters
  if (reg1.test(naam) && !reg2.test(naam) && naam.length >= 2) {
    let reg3 = /^([_0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z])/;
    if (reg3.test(mail)) {
      let reg4 = /[A-Z]/;
      let reg5 = /[a-z]/;
      let reg6 = /[0-9]/;
      let reg7 = /[^a-zA-Z0-9]/;
      if (
        reg4.test(pass1) &&
        reg5.test(pass1) &&
        reg6.test(pass1) &&
        reg7.test(pass1) &&
        pass1 != naam &&
        pass1 != mail
      ) {
        if (pass2 === pass1) {
          window.location.assign("login.html");
          great.innerText = `Login Sucessful`;
          id1++;

          sessionStorage.setItem("id", id1);
          sessionStorage.setItem("name", naam);
          sessionStorage.setItem("email", mail);
          sessionStorage.setItem("password", pass1);

          // localStorage.setItem("", pass1);
        } else {
          warn.innerText = `The 2 passwords don't match`;
        }
      } else {
        warn.innerText = `Invalid password`;
      }
    } else {
      warn.innerText = `Invalid email`;
    }

    // if(mail.){}
  } else {
    warn.innerText = `Name can't be a single letter, it can only start with alphabets, & it can only contain alpha numeric values`;
  }
};
