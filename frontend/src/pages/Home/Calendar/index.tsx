import {
  Badge,
  BadgeProps,
  CalendarProps,
  Calendar as OriginalCalendar,
} from "antd";
import { Dayjs } from "dayjs";
import getListData from "./data";

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Calendar = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    const filteredData = listData.filter((i) => i !== undefined);
    return (
      <ul className="events">
        {filteredData.map((item) => (
          <li key={item?.content}>
            <Badge
              status={item?.type as BadgeProps["status"]}
              text={item?.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return <OriginalCalendar cellRender={cellRender} />;
};

export default Calendar;
