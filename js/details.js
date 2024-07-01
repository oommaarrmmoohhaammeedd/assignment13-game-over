"use strict";
import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(idGames) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': '33846abe6emsh3fe56199540e77cp162b62jsnb5b66803ef86',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
      options
    );
    const response = await api.json();
    this.ui.displayDetails(response);
    loading.classList.add("d-none");
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
