import React from "react";
import Button from "../Button";
import { ButtonProps, ButtonSize } from "@/types/button";
import { FaqItem } from "@/types/faqs";
import { getStyle } from "@/utils/styles";

type Props = {
  title: string;
  content?: string;
  ctaTitle?: string;
  ctaContent?: string;
  style: string;
  items: FaqItem[];
  ctaButton?: ButtonProps;
};

const Faq1 = ({
  title,
  content,
  ctaTitle,
  ctaContent,
  style,
  items,
  ctaButton,
}: Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${
        getStyle(style).text
      } w-full p-6 py-12 md:py-16`}
    >
      <div
        className={`container mx-auto flex h-auto w-full flex-col items-center justify-center space-y-12 `}
      >
        <h3>{title}</h3>
        {content && content.length > 10 && (
          <span
            dangerouslySetInnerHTML={{ __html: content }}
            className={`mx-auto w-2/3 text-center ${
              getStyle(style).htmlContent
            }`}
          />
        )}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div className="flex h-full w-full flex-col space-y-2">
              <span className="flex w-full flex-row items-start">
                <div className="mr-4 flex h-6 w-6 items-start justify-start">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" mt-0.5 stroke-current opacity-30"
                  >
                    <path
                      d="M11 15.2582V15.2666M7.66668 8.59155C7.66668 6.7506 9.15906 5.25822 11 5.25822C12.841 5.25822 14.3333 6.7506 14.3333 8.59155C14.3333 10.1478 13.2669 11.4549 11.8249 11.822C11.3789 11.9356 11 12.298 11 12.7582M20.1667 10.2582C20.1667 15.3208 16.0626 19.4249 11 19.4249C5.9374 19.4249 1.83334 15.3208 1.83334 10.2582C1.83334 5.19561 5.9374 1.09155 11 1.09155C16.0626 1.09155 20.1667 5.19561 20.1667 10.2582Z"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold leading-6">{item.heading}</h4>
              </span>
              <span
                dangerouslySetInnerHTML={{ __html: item.panel }}
                className={`space-y-4 pl-10 ${getStyle(style).htmlContent}`}
              />
            </div>
          ))}
        </div>
        {ctaContent && ctaContent.length > 10 && (
          <span
            dangerouslySetInnerHTML={{ __html: ctaContent }}
            className={`mx-auto w-2/3 text-center ${
              getStyle(style).htmlContent
            }`}
          />
        )}

        {ctaButton && (
          <Button
            {...ctaButton}
            className="w-xl mx-auto"
            size={ButtonSize.LARGE}
          />
        )}
      </div>
    </section>
  );
};

export default Faq1;
