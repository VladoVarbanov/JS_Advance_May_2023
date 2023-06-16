class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    const tempArticleModel = articleModel.toLowerCase();

    if (
      tempArticleModel !== "picture" &&
      tempArticleModel !== "photo" &&
      tempArticleModel !== "item"
    ) {
      throw new Error("This article model is not included in this gallery!");
    }

    // this.possibleArticles[tempArticleModel] = articleName;
    // this.possibleArticles.quantity = quantity;

    let indexOfArticleName = this.listOfArticles.findIndex(
      (obj) => obj.articleName === articleName
    );

    if (indexOfArticleName !== -1) {
      if (
        this.listOfArticles[indexOfArticleName].articleModel === articleModel
      ) {
        this.listOfArticles[indexOfArticleName].quantity += quantity;
      } else {
        this.listOfArticles.push({
          articleModel: tempArticleModel,
          articleName,
          quantity,
        });
      }
    } else {
      this.listOfArticles.push({
        articleModel: tempArticleModel,
        articleName,
        quantity,
      });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}."`;
  }

  inviteGuest(guestName, personality) {
    let points = 0;
    if (personality === "Vip") {
      points = 500;
    } else if (personality === "Middle") {
      points = 250;
    } else {
      points = 50;
    }

    let indexOfGuestName = this.guests.findIndex(
      (obj) => obj.guestName === guestName
    );

    if (indexOfGuestName !== -1) {
      throw new Error(`${guestName} has already been invited.`);
    } else {
      this.guests.push({ guestName, points: points, purchaseArticle: 0 });
    }

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const tempArticleModel = articleModel.toLowerCase();

    let indexOfArticleName = this.listOfArticles.findIndex(
      (obj) => obj.articleName === articleName
    );

    let indexOfGuestName = this.guests.findIndex(
      (obj) => obj.guestName === guestName
    );

    if (
      indexOfArticleName === -1 ||
      this.listOfArticles[indexOfArticleName].articleModel !== articleModel
    ) {
      throw new Error("This article is not found.");
    }
    if (this.listOfArticles[indexOfArticleName].quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    if (indexOfGuestName === -1) {
      return `This guest is not invited.`;
    }

    if (
      this.guests[indexOfGuestName].points >=
      this.possibleArticles[tempArticleModel]
    ) {
      this.guests[indexOfGuestName].points -=
        this.possibleArticles[tempArticleModel];
      this.guests[indexOfGuestName].purchaseArticle += 1;
      this.listOfArticles[indexOfArticleName].quantity -= 1;

      return `${guestName} successfully purchased the article worth ${this.possibleArticles[tempArticleModel]} points.`;
    } else {
      return "You need to more points to purchase the article.";
    }
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let outputArticle = [];
      this.listOfArticles.forEach((x) => {
        outputArticle.push(
          `${x.articleModel} - ${x.articleName} - ${x.quantity}`
        );
      });

      let resultArticle = outputArticle.join("\n");

      return `Articles information:\n${resultArticle}`;
    } else {
      let outputGuests = [];
      this.guests.forEach((x) => {
        outputGuests.push(`${x.guestName} - ${x.purchaseArticle}`);
      });

      let resultGuests = outputGuests.join("\n");

      return `Guests information:\n${resultGuests}`;
    }
  }
}

// INPUT 1
const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 2));
console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));
// OUTPUT 1
//   Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.

console.log("=========================================");

//INPUT 2
const artGallery2 = new ArtGallery("Curtis Mayfield");
console.log(artGallery2.inviteGuest("John", "Vip"));
console.log(artGallery2.inviteGuest("Peter", "Middle"));
// console.log(artGallery2.inviteGuest("John", "Middle"));
// OUTPUT 2
//  You have successfully invited John!
//  You have successfully invited Peter!
//  John has already been invited.

console.log("=========================================");
/**/
// INPUT 3
const artGallery3 = new ArtGallery("Curtis Mayfield");
artGallery3.addArticle("picture", "Mona Liza", 3);
artGallery3.addArticle("Item", "Ancient vase", 2);
artGallery3.addArticle("picture", "Mona Liza", 1);
artGallery3.inviteGuest("John", "Vip");
artGallery3.inviteGuest("Peter", "Middle");
console.log(artGallery3.buyArticle("picture", "Mona Liza", "John"));
console.log(artGallery3.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery3.buyArticle("item", "Mona Liza", "John"));
// OUTPUT 3
//  John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.

console.log("=========================================");

// INPUT 4
const artGallery4 = new ArtGallery("Curtis Mayfield");
artGallery4.addArticle("picture", "Mona Liza", 3);
artGallery4.addArticle("Item", "Ancient vase", 2);
artGallery4.addArticle("picture", "Mona Liza", 1);
artGallery4.inviteGuest("John", "Vip");
artGallery4.inviteGuest("Peter", "Middle");
artGallery4.buyArticle("picture", "Mona Liza", "John");
artGallery4.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery4.showGalleryInfo("article"));
console.log(artGallery4.showGalleryInfo("guest"));
// OUTPUT 4
// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1
