const { describe, it } = require("mocha");
const expect = require("chai").expect;

const cinema = require("./cinema");

describe("cinema functions", function () {
  it("showMovies", function () {
    expect(cinema.showMovies([])).to.equal(
      "There are currently no movies to show."
    );

    expect(cinema.showMovies([{ a: 0 }, { b: 1 }, { c: 3 }])).to.equal(
      "[object Object], [object Object], [object Object]"
    );

    expect(cinema.showMovies(["a", "b", "c"])).to.equal("a, b, c");
  });

  it("ticketPrice", function () {
    expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
    expect(cinema.ticketPrice("Normal")).to.equal(7.5);
    expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    () => {
      expect(cinema.ticketPrice("Error")).to.throw.Error(
        "Invalid projection type."
      );
    };
    () => {
      expect(cinema.ticketPrice({})).to.throw.Error("Invalid projection type.");
    };

    () => {
      expect(cinema.ticketPrice([])).to.throw.Error("Invalid projection type.");
    };

    () => {
      expect(cinema.ticketPrice(undefined)).to.throw.Error(
        "Invalid projection type."
      );
    };

    () => {
      expect(cinema.ticketPrice(NaN)).to.throw.Error(
        "Invalid projection type."
      );
    };
  });

  it("swapSeatsInHall", function () {
    expect(cinema.swapSeatsInHall("Premiere", 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall({}, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(undefined, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(2, "Premiere")).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(2, {})).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(2, undefined)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(["Premiere"], 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, ["Premiere"])).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(0.5, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(2, 5.5)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(0, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(-1, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(21, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, 0)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, -1)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, 21)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, 2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(2)).to.equal(
      "Unsuccessful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(2, 4)).to.equal(
      "Successful change of seats in the hall."
    );

    expect(cinema.swapSeatsInHall(4, 2)).to.equal(
      "Successful change of seats in the hall."
    );
  });
});
