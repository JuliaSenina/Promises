import result from "../app";

test("Проверка объекта", async () => {
  expect(await result()).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
});

test("Проверка ошибки объекта", async () => {
  expect.assertions(0);
  try {
    const data = await result();
  } catch(e) {
    expect(e).toEqual("error");
  }
})