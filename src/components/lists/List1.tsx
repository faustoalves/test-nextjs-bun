import { Lists, ListsItem } from "@/types/landingPage/list";
import { getStyle } from "@/utils/styles";
import React from "react";

type Props = {
  style: string;
  id: string;
};

const List1 = ({ style, title, lists, id }: Lists & Props) => {
  return (
    <section
      className={`${getStyle(style).bg} ${
        getStyle(style).text
      } w-full p-6 py-8`}
      id={id}
    >
      <div
        className={`container mx-auto flex h-auto w-full flex-col  space-y-12 py-8 pb-8 md:items-center md:py-16`}
      >
        <h3>{title}</h3>
        {lists.map((item, index) => (
          <div className="flex w-full flex-col space-y-6 md:items-center">
            <h5>{item.title}</h5>
            <div
              className={`grid w-full grid-cols-1 ${
                item.lists.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              }`}
            >
              {item.lists.map((list, index) => (
                <ListContainer
                  className={`w-full ${getStyle(style).htmlContent}`}
                  list={list}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

type ListContainerProps = {
  className: string;
  list: string[];
};

const ListContainer = ({ className, list }: ListContainerProps) => {
  let listInfo = `<ul>`;
  list.map((item, index) => (listInfo += `<li>${item}</li>`));
  listInfo += `</ul>`;
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: listInfo }}
    />
  );
};

export default List1;
