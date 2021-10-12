import { useEffect, useState } from "react";

const LOCALE = "en";
const LOCALE_DAY_CONFIG = { weekday: "long" };
const LOCALE_MONTH_CONFIG = { month: "long" };
const LOCALE_TIME_CONFIG = {
  hour: "numeric",
  hour12: true,
  minute: "numeric",
  second: "numeric"
};

export const useDate = () => {
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60);
    return () => clearInterval(timer);
  }, []);

  // Add props dynamically to the object, will cuase a runtime error, we can
  // catch this sooner with TypeScript interfaces.
  // LOCALE_DAY_CONFIG.someNewProp = "Yesterday";
  // LOCALE_DAY_CONFIG.weekday = "Yesterday";

  const date = today.getDate();
  const day = today.toLocaleDateString(LOCALE, LOCALE_DAY_CONFIG);
  const month = today.toLocaleDateString(LOCALE, LOCALE_MONTH_CONFIG);
  const time = today.toLocaleTimeString(LOCALE, LOCALE_TIME_CONFIG);

  const formattedDate = `${day} ${date} ${month}`;

  return { formattedDate, time };
};
