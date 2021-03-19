<template>
  <div class="bg-gray-900 h-auto w-full">
    <v-container class="flex-col justify-center">
      <h1
        class="capitalize text-gray-100 flex justify-center p-2 text-5xl font-black tracking-widest"
      >
        movie ticket
      </h1>
      <div class="flex p-2 justify-center">
        <div class="showcase p-2 rounded-lg bg-gray-800">
          <div class="inline-block">
            <div class="flex justify-center">
              <div
                class="m-1 w-4 h-4 bg-gray-600"
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                "
              ></div>
              <small class="capitalize text-gray-400 p-1">n/a</small>
            </div>
          </div>
          <div class="inline-block">
            <div class="flex justify-center">
              <div
                class="m-1 w-4 h-4 bg-green-300"
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                "
              ></div>
              <small class="capitalize text-gray-400 p-1">selected</small>
            </div>
          </div>
          <div class="inline-block">
            <div class="flex justify-center">
              <div
                class="m-1 w-4 h-4 bg-white"
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                "
              ></div>
              <small class="capitalize text-gray-400 p-1">occupied</small>
            </div>
          </div>
        </div>
      </div>
      <div class="screen bg-red-100 p-5 m-2" style="height: 20rem;"></div>
      <div class="flex p-2 justify-center">
        <div class="capitalize font-semibold text-gray-100 p-2">
          pick a your movie :
        </div>
        <select
          name=""
          id="movie"
          class="capitalize bg-gray-50 text-black rounded-lg border-0 py-1 px-4 text-lg"
        >
          <option value="0" selected class="capitalize"
            >select your movie</option
          >
          <option
            v-for="(item, index) in movie"
            :key="index"
            class="capitalize"
            :value="item.value"
            v-text="item.text"
          ></option>
        </select>
      </div>
      <div class="flex justify-center">
        <div class="p-5 w-2/4 mx-auto">
          <div class="flex">
            <div class="flex rowseat flex-wrap" style="width: 55px">
              <div
                id="seat"
                v-for="n in 18"
                :key="n"
                class="w-4 h-4"
                :class="n === 1 ? 'occupied' : false"
              ></div>
            </div>
            <div class="flex rowseat flex-wrap" style="width: 290px">
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4 occupied"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
              <div id="seat" class="w-4 h-4"></div>
            </div>
            <div class="flex rowseat flex-wrap" style="width: 55px">
              <div
                id="seat"
                v-for="n in 18"
                :key="n"
                class="w-4 h-4"
                :class="n === 8 ? 'occupied' : false"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="capitalize text-white p-10 font-semibold text-lg container flex price justify-center"
      >
        <p>you have a selected</p>
        <span id="totalseat" class="mx-2 text-green-300">0</span>
        seats for a price of $
        <span id="price" class="mx-2 text-green-300">0</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "booking-ticket",
  layout(context) {
    return "secondLayout";
  },
  head() {
    return {
      title: "Ticket Booking"
    };
  },
  data: () => ({
    movie: [
      { value: 12, text: "infinity war $12" },
      { value: 10, text: "end game $10" },
      { value: 9, text: "joker $9" }
    ]
  }),
  mounted() {
    let seats = document.querySelectorAll("#seat");
    let container = document.querySelector(".container");
    let selectedMovie = document.querySelector("#movie");
    let screenImage = document.querySelector(".screen");
    let price = document.querySelector("#price");
    let totalSeat = document.querySelector("#totalseat");

    let ticketPrice = +selectedMovie.value;

    function updateSelectedSeat() {
      const selectSeat = document.querySelectorAll(".rowseat .selected").length;

      totalSeat.textContent = selectSeat;
      price.textContent = selectSeat * ticketPrice;
    }

    selectedMovie.addEventListener("change", function(params) {
      console.log(params.target.value);
      ticketPrice = +params.target.value;
    });

    container.addEventListener("click", function(param) {
      if (
        param.target.id === "seat" &&
        !param.target.classList.contains("occupied")
      ) {
        param.target.classList.toggle("selected");
        updateSelectedSeat();
      }
    });

    selectedMovie.addEventListener("change", function(e) {
      ticketPrice = +e.target.value;
      updateSelectedSeat();
    });
  }
};
</script>

<style>
#seat {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: 5ms;
  background-color: #4b5563;
  margin: 5px;
}

#seat.selected {
  background-color: #6ee7b7;
}
#seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}

#seat.occupied {
  background-color: white;
}
</style>
