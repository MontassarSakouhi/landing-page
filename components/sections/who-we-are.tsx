"use client";
import { Eye, Rocket } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: <Eye size={48} />,
    header: "Investing in Possibility. Building What’s Next.",
    text:
      "NEO Ventures (NEOV) is the strategic investment arm of The Saudi National Bank (SNB), purpose-built to drive innovation at the intersection of technology," +
      " finance, and lifestyle. We invest in bold ideas, back visionary founders, and build partnerships that expand the digital frontier.",
  },
  {
    icon: <Rocket size={48} />,
    header: "Investing in Possibility. Building What’s Next.",
    text:
      "NEO Ventures (NEOV) is the strategic investment arm of The Saudi National Bank (SNB), purpose-built to drive innovation at the intersection of technology," +
      " finance, and lifestyle. We invest in bold ideas, back visionary founders, and build partnerships that expand the digital frontier.",
  },
];

export function WhoWeAre() {
  return (
    <section
      style={{
        background:
          "linear-gradient(80.41deg, rgba(5, 46, 55) 0%, rgba(12, 68, 74 ) 27.32%, rgba(19, 86, 90) 70.01%, rgba(39, 168, 168) 130.26%)",
      }}
      className="flex flex-col gap-6    pb-6 py-10 sm:py-20 px-6 mx-auto"
    >
      <div className={"flex space-x-10 justify-center items-center"}>
        <div className={" sm:max-w-[33%] "}>
          <span
            className={
              "bg-[#0097B7]/20 border-[1px] border-[#0097B7] py-1 px-6 rounded-full text-[17px]  w-[150px] text-center"
            }
          >
            Who Are We
          </span>
          <h1
            className={
              "font-bold text-[20px] md:text-[25px] lg:text-[30px] xl:text-[36px] leading-tight my-4 "
            }
          >
            Investing in Possibility.
            <br />
            Building What's Next.
          </h1>
          <p
            className={
              "text-[13px]  md:text-[10px] lg:text-[13px] xl:text-[15px] leading-[130%] align-middle font-light"
            }
          >
            NEO Ventures (NEOV) is the strategic investment arm of The Saudi
            National Bank (SNB), purpose-built to drive innovation at the
            intersection of technology, finance, and lifestyle. We invest in
            bold ideas, back visionary founders, and build partnerships that
            expand the digital frontier.
          </p>
        </div>
        <div className={"max-w-[33%]  hidden md:block"}>
          <Image
            src={"/logo-gradiant.png"}
            alt=""
            width={800}
            height={800}
            className={"max-h-[250px]"}
          />
        </div>
      </div>
      <div
        className={
          "flex justify-around md:justify-center space-x-5 md:space-x-10 "
        }
      >
        {cards.map((card, i) => (
          <div key={i} className={"md:max-w-[33%] flex flex-col"}>
            <div
              className={
                "w-[90px] h-[90px] relative flex items-center justify-center"
              }
            >
              <span
                className={
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#36BCB1] opacity-40 blur-2xl pointer-events-none"
                }
              ></span>
              <div className={"relative z-10 text-[#36BCB1]"}>{card.icon}</div>
            </div>
            <h1
              className={
                "font-bold  md:text-[25px] lg:text-[30px] xl:text-[36px] leading-[120%] mb-4"
              }
            >
              {(() => {
                const [first, ...rest] = card.header.split(". ");
                return (
                  <>
                    {first}.
                    <br />
                    {rest.join(". ")}
                  </>
                );
              })()}
            </h1>
            <p
              className={
                " text-[12px] md:text-[10px] lg:text-[13px] xl:text-[15px] font-light"
              }
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
