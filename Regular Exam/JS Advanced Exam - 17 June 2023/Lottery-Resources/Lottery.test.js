const { describe, it } = require("mocha");
const expect = require("chai").expect;

const lottery = require("./Lottery");

describe("Lottary test", function () {
  it("buyLotteryTicket ", () => {
    () =>
      expect(lottery.buyLotteryTicket("2", 2, true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, "2", true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, 2, "true")).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket([2], 2, true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, [2], true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(0, 2, true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(-1, 2, true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, 0, true)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, 0, false)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(0, 2, false)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(0, 0, "true")).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.buyLotteryTicket(2, 2, false)).to.throw.Error(
        "Unable to buy lottery ticket!"
      );

    expect(lottery.buyLotteryTicket(2, 2, true)).to.equal(
      "You bought 2 tickets for 4$."
    );

    expect(lottery.buyLotteryTicket(2, 1, true)).to.equal(
      "You bought 1 tickets for 2$."
    );

    expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(
      "You bought 1 tickets for 1$."
    );
  });

  it("checkTicket ", () => {
    () => expect(lottery.checkTicket([], [])).to.throw.Error("Invalid input!");

    () =>
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])
      ).to.throw.Error("Invalid input!");

    () =>
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])
      ).to.throw.Error("Invalid input!");

    () =>
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])
      ).to.throw.Error("Invalid input!");

    () =>
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])
      ).to.throw.Error("Invalid input!");

    () =>
      expect(lottery.checkTicket({}, [1, 2, 3, 4, 5, 6])).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], {})).to.throw.Error(
        "Invalid input!"
      );

    expect(
      lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
    ).to.equal("You win the JACKPOT!!!");

    expect(
      lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 3, 3, 3])
    ).to.equal("Congratulations you win, check your reward!");

    expect(
      lottery.checkTicket([1, 2, 3, 4, 3, 3], [1, 2, 3, 4, 5, 6])
    ).to.equal("Congratulations you win, check your reward!");

    expect(
      lottery.checkTicket([1, 2, 3, 4, 5, 3], [1, 2, 3, 4, 5, 6])
    ).to.equal("Congratulations you win, check your reward!");

    expect(
      lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 3, 3])
    ).to.equal("Congratulations you win, check your reward!");
    expect(
      lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 3])
    ).to.equal("Congratulations you win, check your reward!");
  });

  it("secondChance ", () => {
    () =>
      expect(lottery.secondChance("123456", [1, 2, 3, 4, 5, 6])).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(
        lottery.secondChance([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
      ).to.throw.Error("Invalid input!");

    () =>
      expect(lottery.secondChance(123456, 123456)).to.throw.Error(
        "Invalid input!"
      );

    () =>
      expect(lottery.secondChance(123456, "123456")).to.throw.Error(
        "Invalid input!"
      );

    expect(lottery.secondChance(123456, [123456, 2, 3, 4, 5, 3])).to.equal(
      "You win our second chance prize!"
    );

    expect(lottery.secondChance(123456, [12345, 2, 3, 4, 5, 3])).to.equal(
      "Sorry, your ticket didn't win!"
    );
  });

  console.log();
});
