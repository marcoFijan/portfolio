import React from "react";

export default function FlexArticle({
  children,
  className,
  reverse,
  alignBottom,
  alignTop,
  smallMargin,
}) {
  const extras = className || "";

  return (
    <article
      className={`flex relative flex-col gap-12 ${
        smallMargin ? "my-6 xl:my-12" : "my-16 xl:my-32"
      } ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"} ${extras}`}
    >
      {React.Children.map(children, (child) => (
        <section
          className={`flex-1 xl:max-w-1/2 ${
            alignBottom
              ? "items-end"
              : alignTop
              ? "items-start"
              : "items-center"
          } flex justify-center`}
        >
          {child}
        </section>
      ))}
    </article>
  );
}
