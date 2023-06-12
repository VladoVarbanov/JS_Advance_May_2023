function validate() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const isCompanyBtn = document.getElementById("company");
  const companyInfoField = document.getElementById("companyInfo");
  const submitBtn = document.getElementById("submit");
  const validDiv = document.getElementById("valid");

  submitBtn.addEventListener("click", onClick);

  const validate = {
    username: /^[A-Za-z0-9]{3,20}$/,
    password: /^[A-Za-z0-9_]{5,15}$/,
    confirmPassword: /^[A-Za-z0-9_]{5,15}$/,
    email: /^.*@.*\..*$/,
  };
  isCompanyBtn.addEventListener("change", isChecked);

  function isChecked(e) {
    if (isCompanyBtn.checked) {
      companyInfoField.style.display = "block";
    } else {
      companyInfoField.style.display = "none";
    }
  }
  function onClick(e) {
    e.preventDefault();
    let isValid =
      validate.username.test(username.value) &&
      validate.email.test(email.value) &&
      validate.password.test(password.value) &&
      validate.confirmPassword.test(confirmPassword.value) &&
      password.value === confirmPassword.value;
    if (!validate.username.test(username.value)) {
      username.style.borderColor = "red";
    } else {
      username.style.border = "none";
    }

    if (!validate.email.test(email.value)) {
      email.style.borderColor = "red";
    } else {
      email.style.border = "none";
    }

    if (
      !validate.password.test(password.value) ||
      password.value !== confirmPassword.value
    ) {
      password.style.borderColor = "red";
    } else {
      password.style.border = "none";
    }
    if (
      !validate.confirmPassword.test(confirmPassword.value) ||
      password.value !== confirmPassword.value
    ) {
      confirmPassword.style.borderColor = "red";
    } else {
      confirmPassword.style.border = "none";
    }
    const companyNumber = document.getElementById("companyNumber");
    const companyNumberValue = companyNumber.valueAsNumber;
    if (isCompanyBtn.checked) {
      if (
        companyNumberValue >= 1000 &&
        companyNumberValue <= 9999 &&
        companyNumber.value !== ""
      ) {
        companyNumber.style.border = "none";
        // isValid = false;
      } else {
        companyNumber.style.border = "block";
        companyNumber.style.borderColor = "red";
        isValid = false;
      }
    }

    if (isValid) {
      validDiv.style.display = "block";
    } else {
      validDiv.style.display = "none";
    }
  }
}
