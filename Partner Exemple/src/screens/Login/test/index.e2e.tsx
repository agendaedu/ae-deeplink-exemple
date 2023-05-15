import { by, expect, element, waitFor } from "detox";

describe("Example", () => {
  describe("Swipe FlatlistBlur", () => {
    it("should render Background iqual in the index when swiped item", async () => {
      await waitFor(element(by.id("image-card-3")))
        .toBeVisible()
        .whileElement(by.id("list-card"))
        .scroll(300, "right");

      await element(by.id("image-card-3")).tap();

      expect(element(by.id("background-card-3"))).toBeVisible();
    });
  });
});
