"use client";

import { useEffect, useState } from "react";

export default function TechTimer() {
  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2020-01-01T00:00:00");

    const update = () => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;

        const previousMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();

        days += previousMonthDays;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      const diff = now.getTime() - startDate.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      const milliseconds = diff % 1000;

      setElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      });
    };

    update();

    const interval = setInterval(update, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[var(--muted)] text-sm md:text-base font-medium tracking-wide">
      <span>{elapsed.years}y</span>
      <span>·</span>

      <span>{elapsed.months}mo</span>
      <span>·</span>

      <span>{elapsed.days}d</span>
      <span>·</span>

      <span>{String(elapsed.hours).padStart(2, "0")}h</span>
      <span>·</span>

      <span>{String(elapsed.minutes).padStart(2, "0")}m</span>
      <span>·</span>

      <span>{String(elapsed.seconds).padStart(2, "0")}s</span>
      <span>·</span>

      <span className="text-[var(--foreground)]/70">
        {String(elapsed.milliseconds).padStart(3, "0")}ms
      </span>
    </div>
  );
}