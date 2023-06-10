const { describe, it } = require("mocha");
const expect = require("chai").expect;
const bookSelection = require("./bookSelection");

describe("bookSelection tests", function () {
  describe("isGenreSuitable", function () {
    it("With Thriller or Horror genre, should return correct value.", function () {
      // Arrange.
      let genre1 = "Thriller";
      let genre2 = "Horror";
      let age1 = 12;
      let age2 = 13;

      //Act.
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age1);
      let result3 = bookSelection.isGenreSuitable(genre1, age2);
      let result4 = bookSelection.isGenreSuitable(genre2, age2);
      //Assert.
      expect(result1).to.equal(
        `Books with ${genre1} genre are not suitable for kids at ${age1} age`
      );
      expect(result2).to.equal(
        `Books with ${genre2} genre are not suitable for kids at ${age1} age`
      );
      expect(result3).to.equal(`Those books are suitable`);
      expect(result4).to.equal(`Those books are suitable`);
    });

    it("With non-Thriller or non-Horror genre, should return that the books are suitable.", function () {
      // Arrange.
      let genre1 = "Something";
      let genre2 = "Some Genre";
      let age1 = 12;
      let age2 = 13;

      //Act.
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age1);
      let result3 = bookSelection.isGenreSuitable(genre1, age2);
      let result4 = bookSelection.isGenreSuitable(genre2, age2);
      //Assert.
      expect(result1).to.equal(`Those books are suitable`);
      expect(result2).to.equal(`Those books are suitable`);
      expect(result3).to.equal(`Those books are suitable`);
      expect(result4).to.equal(`Those books are suitable`);
    });
  });

  describe("isItAffordable", function () {
    it("With non-number price and budget, should throw correct Error.", function () {
      // Arrange.
      let price = "20";
      let budget = "30";

      //Act.
      let result1Func = () => bookSelection.isItAffordable(price, 30);
      let result2Func = () => bookSelection.isItAffordable(20, budget);

      //Assert.
      expect(result1Func).to.throw(Error, "Invalid input");
      expect(result2Func).to.throw(Error, "Invalid input");
    });

    it("With more budget than price, should return correct result.", function () {
      // Arrange.
      let price1 = 30;
      let price2 = 22.3;
      let budget1 = 30;
      let budget2 = 33.3;

      //Act.
      let result1 = bookSelection.isItAffordable(price1, budget1);
      let result2 = bookSelection.isItAffordable(price2, budget2);

      //Assert.
      expect(result1).to.equal(
        `Book bought. You have ${budget1 - price1}$ left`
      );
      expect(result2).to.equal(
        `Book bought. You have ${budget2 - price2}$ left`
      );
    });

    it("With less budget than price, should return correct result.", function () {
      // Arrange.
      let price1 = 31;
      let price2 = 32.3;
      let budget1 = 30;
      let budget2 = 23.3;

      //Act.
      let result1 = bookSelection.isItAffordable(price1, budget1);
      let result2 = bookSelection.isItAffordable(price2, budget2);

      //Assert.
      expect(result1).to.equal("You don't have enough money");
      expect(result2).to.equal("You don't have enough money");
    });
  });

  describe("suitableTitles", function () {
    it("When non-array books or non-string wantedGenre, should throw correct Error.", function () {
      //Arrange.
      let arr = "test";
      let arrCorrect = [
        { title: "The Da Vinci code", genre: "Thriller" },
        { title: "Some Title", genre: "Horror" },
      ];
      let genre = 23;

      //Act.
      let result1Func = () => bookSelection.suitableTitles(arr, "test");
      let result2Func = () => bookSelection.suitableTitles(arrCorrect, genre);

      //Assert.
      expect(result1Func).to.throw(Error, "Invalid input");
      expect(result2Func).to.throw(Error, "Invalid input");
    });

    it("When correct books Array and genre, should return correct values.", function () {
      //Arrange.
      let arr1 = [
        { title: "The Da Vinci code", genre: "Thriller" },
        { title: "Some Title", genre: "Trill" },
        { title: "Thrill", genre: "Random" },
      ];
      let genre = "Thrill";
      let expectedResult1 = arr1
        .filter((x) => x.genre === genre)
        .map((x) => x.title);

      //Act.
      let result1 = bookSelection.suitableTitles(arr1, genre);
      let result2 = bookSelection.suitableTitles([], genre);

      //Assert.
      expect(result1).to.deep.equal(expectedResult1);
      expect(result2).to.deep.equal([]);
    });
  });
});
