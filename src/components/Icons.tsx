import TwentyFourPhone from "@/assets/smallIcons/TwentyFourPhone";
import { IconProps, IconList } from "../types/icons";
import dynamic from "next/dynamic";
import Link from "@/assets/smallIcons/Link";
import Sea from "@/assets/icons/funeral/Sea";
import Tree from "@/assets/icons/funeral/Tree";
import Cremation from "@/assets/icons/funeral/Cremation";
import Burial from "@/assets/icons/funeral/Burial";

const ArrowDown = dynamic(() => import("@/assets/smallIcons/ArrowDown"));
const ArrowUp = dynamic(() => import("@/assets/smallIcons/ArrowUp"));
const ArrowLeft = dynamic(() => import("@/assets/smallIcons/ArrowLeft"));
const ArrowRight = dynamic(() => import("@/assets/smallIcons/ArrowRight"));
const Phone = dynamic(() => import("@/assets/smallIcons/Phone"));

const Icons = ({ icon }: IconProps) => {
  switch (icon) {
    case IconList.ARROW_DOWN:
      return <ArrowDown />;
    case IconList.ARROW_UP:
      return <ArrowUp />;
    case IconList.ARROW_LEFT:
      return <ArrowLeft />;
    case IconList.ARROW_RIGHT:
      return <ArrowRight />;
    case IconList.PHONE:
      return <Phone />;
    case IconList.TWENTY_FOUR:
      return <TwentyFourPhone />;
    case IconList.LINK:
      return <Link />;
    case IconList.CREMATION:
      return <Cremation />;
    case IconList.BURIAL:
      return <Burial />;
    case IconList.SEA_FUNERAL:
      return <Sea />;
    case IconList.TREE_FUNERAL:
      return <Tree />;
    default:
      return <></>;
  }
};

export default Icons;
