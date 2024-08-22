import { formatTime } from "./formatTime";

describe("formatTime", () => {
  it("ровное количестае секунд = 120", () => {
    expect(formatTime(120)).toBe("02:00");
  });

  it("минимальное количество секунд = 0", () => {
    expect(formatTime(0)).toBe("00:00");
  });

  it("количество секунд меньше минуты = 59", () => {
    expect(formatTime(59)).toBe("00:59");
  });

  it("количество секунд чуть больше минуты =61", () => {
    expect(formatTime(61)).toBe("01:01");
  });

  it("ровное количество часов 3600 секунд", () => {
    expect(formatTime(3600)).toBe("60:00");
  });

  it("случай с минутами и секундами 3723 секунды", () => {
    expect(formatTime(3723)).toBe("62:03");
  });

  it("максимальное значение для отображения времени в формате ММ:СС для одного дня", () => {
    expect(formatTime(86399)).toBe("1439:59");
  });
});
