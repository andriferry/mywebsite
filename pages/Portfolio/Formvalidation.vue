<template>
  <div class="bg-gray-100 backgroud h-screen flex">
    <div
      class="m-auto bg-white rounded-lg shadow-2xl p-8 w-4/5 sm:w-96 lg:w-2/4"
    >
      <form class="text-uppercase">
        <h2 class="font-semibold text-2xl py-3 capitalize">
          Register with us
        </h2>
        <div
          class="form-control pb-5"
          v-for="(item, index) in formData"
          :key="index"
        >
          <label
            for="email"
            class="text-gray-600 block capitalize py-1 text-xl"
            v-text="item.label"
          ></label>
          <input
            :id="item.inputId"
            :type="item.type"
            :placeholder="`Input Your ${item.label}`"
            class="w-full border-gray-200 capitalize placeholder-gray-600 border-solid rounded-md p-2 border-2 focus:outline-none focus:border-gray-500"
          />
          <small class="text-red-500 pt-2 hidden capitalize"></small>
        </div>
        <button
          class="w-full bg-blue-400 p-2 rounded-md text-white active:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-validation",
  layout(context) {
    return "secondLayout";
  },
  head() {
    return {
      title: "Form Validation"
    };
  },
  data: () => ({
    formData: [
      { label: "name", inputId: "name", type: "text" },
      { label: "email", inputId: "email", type: "email" },
      { label: "password", inputId: "password", type: "password" },
      {
        label: "password confirm",
        inputId: "password confirm",
        type: "password"
      }
    ]
  }),

  mounted() {
    console.log(this.$route);
    let form = document.getElementsByClassName("form");
    let name = document.getElementById("name");
    let input = document.querySelectorAll("input");
    let errorMessage = document.querySelectorAll("small");
    let btnSubmit = document.querySelector("button");

    //Check required
    function checkRequired(value) {
      ErrorMessage([value], `${value.id} is required`);
    }

    //Check Length
    function checkLength(inputElement, min, max) {
      if (inputElement.value.length === 0) {
        checkRequired(inputElement);
      } else if (inputElement.value.length < min) {
        ErrorMessage(
          [inputElement],
          `${inputElement.id} at least ${min} character`
        );
      } else if (inputElement.value.length > max) {
        ErrorMessage(
          [inputElement],
          `${inputElement.id} Must Be A Less Than ${max} character`
        );
      } else {
        successMessage([inputElement]);
      }
    }

    //Password Match
    function passwordMatch() {
      if (input[2].value && input[3].value !== "") {
        if (input[2].value !== input[3].value) {
          ErrorMessage([input[2], input[3]], `${input[2].id} is Do not match`);
        } else {
          successMessage([input[2], input[3]]);
        }
      }
    }

    //Email Required
    function emailInput(inputElement) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const email = emailRegex.test(
        String(inputElement.value)
          .toLowerCase()
          .trim()
      );

      if (inputElement.type === "email") {
        email
          ? successMessage([inputElement])
          : ErrorMessage([inputElement], `${inputElement.id} is not validate`);
      }
    }

    //Error Message
    function ErrorMessage(element, message) {
      element.forEach(item => {
        let error = item.nextElementSibling;

        error.classList.remove("hidden");
        error.textContent = message;

        if (item.classList.contains("border-green-500")) {
          item.classList.replace("border-green-500", "border-red-500");
        } else {
          item.classList.replace("border-gray-200", "border-red-500");
        }
      });
    }

    //Success Message
    function successMessage(element) {
      element.forEach(item => {
        let error = item.nextElementSibling;

        if (error.classList.contains("hidden")) {
          item.classList.replace("border-gray-200", "border-green-500");
        } else {
          error.classList.add("hidden");
          item.classList.replace("border-red-500", "border-green-500");
        }
      });
    }

    input.forEach(element => {
      element.addEventListener("blur", function(e) {
        checkLength(element, 5, 10);
        emailInput(element);
        passwordMatch();
      });

      element.addEventListener("input", function() {
        emailInput(element);
        checkLength(element, 5, 10);
      });
    });

    btnSubmit.addEventListener("click", function(e) {
      e.preventDefault();
      input.forEach((element, index) => {
        checkLength(element, 5, 10);
        emailInput(element);
        passwordMatch();

        if (element.classList.contains("border-green-500")) {
          console.log(index);
          alert("Sudah Di Kirim");
        }
      });
    });
  }
};
</script>

<style></style>
