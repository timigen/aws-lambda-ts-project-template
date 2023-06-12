import { handler } from "../src/handler";

test("handler response is not null", () => {
  handler(null).then((resp) => {
    expect(resp !== null).toBe(true);
  });
});
