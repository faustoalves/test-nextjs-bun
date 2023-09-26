import React from "react";
import CImage from "../CImage";

type Props = {};
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ArrowDown from "@/assets/smallIcons/ArrowDown";
const DesktopUser = (props: Props) => {
  return (
    <div className="flex flex-row border-r border-white/40 pr-2">
      <NavigationMenu.Root className="relative z-[1] flex justify-center pt-1 text-base text-white">
        <NavigationMenu.List className="center m-0 flex list-none space-x-4 rounded-[6px]">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="hover:bg-violet3  group flex w-[160px] select-none items-center justify-around py-0 text-left text-[15px] font-medium leading-none outline-none ">
              <CImage
                src="https://res.cloudinary.com/dkyl4jbxx/image/upload/v1623161066/team_chris_d2aea034ef.png"
                height={80}
                width={80}
                alt="Hi, Christoph Schlarb"
                className="h-10 w-10 rounded-full border-[2px] border-white/80 shadow-lg "
              />
              <span className="flex w-auto flex-grow break-words px-2">
                Hi, Christoph Schlarb
              </span>
              <ArrowDown
                className="m-0 p-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute -top-4 left-0 -mt-2 w-full text-black sm:w-auto">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Introduction"
                  href="/docs/primitives/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
          <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
const ListItem = ({ className, children, title, ...props }: any) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className=" hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors "
        {...props}
      >
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);
export default DesktopUser;
