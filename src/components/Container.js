import Wave from "@/elements/Wave";

export default function Container({ children, article, bgClass = "", className = "", grid, amountOfPages }) {
  const dynamicStyle = amountOfPages ? { height: `${parseFloat(amountOfPages) * 100}vh` } : {};

  const classes = [
    "w-full max-w-wrapper mx-auto px-wrapper-mobile md:px-wrapper ",
    grid ? "grid grid-cols-12 gap-4 gap-x-8 lg:gap-x-12 xl:gap-x-24" : "",
    className
  ].filter(Boolean).join(" ");

  const Tag = article ? "article" : "section";

  const content = (
    <Tag className={classes} style={dynamicStyle}>
      {children}
    </Tag>
  );

  if (bgClass) {
    return (
      <section className={`${bgClass} py-32 dark relative`}>
        <Wave className="-translate-y-[99%] absolute top-0" colorClass={bgClass.replace("bg-", "text-")} startAt={15} />
        {content}
        <Wave className="translate-y-[99%] absolute bottom-0" colorClass={bgClass.replace("bg-", "text-")} side="left" startAt={75} />
      </section>
    );
  }

  return content;
}