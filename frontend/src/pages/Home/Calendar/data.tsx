import { Dayjs } from "dayjs";

const movies = [
  {
    title: "O Poderoso Chefão",
    day: 16,
    month: 3,
    year: 2024,
  },
  {
    title: "Taxi Driver",
    day: 18,
    month: 3,
    year: 2024,
  },
  {
    title: "007 Contra Spectre",
    day: 19,
    month: 3,
    year: 2024,
  },
  {
    title: "La La Land",
    day: 23,
    month: 3,
    year: 2024,
  },
  {
    title: "007 - Sem tempo irmão",
    day: 26,
    month: 3,
    year: 2024,
  },
];

const getListData = (value: Dayjs) => {
  if (value.day() === 3) return [{ type: "error", content: "Flamengo" }];
  return movies.map((m) => {
    if (
      value.month() === m.month &&
      value.date() === m.day &&
      value.year() === m.year
    ) {
      return { type: "success", content: m.title };
    }
  });
  // switch (value.date()) {
  //   case 8:
  //     listData = [
  //       { type: "warning", content: "This is warning event." },
  //       { type: "success", content: "This is usual event." },
  //     ];
  //     break;
  //   case 10:
  //     listData = [
  //       { type: "warning", content: "This is warning event." },
  //       { type: "success", content: "This is usual event." },
  //       { type: "error", content: "This is error event." },
  //     ];
  //     break;
  //   case 15:
  //     listData = [
  //       { type: "warning", content: "This is warning event" },
  //       { type: "success", content: "This is very long usual event......" },
  //       { type: "error", content: "This is error event 1." },
  //       { type: "error", content: "This is error event 2." },
  //       { type: "error", content: "This is error event 3." },
  //       { type: "error", content: "This is error event 4." },
  //     ];
  //     break;
  //   default:
  // }
};

export default getListData;
