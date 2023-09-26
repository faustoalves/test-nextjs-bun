import { DrawingIconList } from "@/types/icons";
import dynamic from "next/dynamic";

const Candle = dynamic(() => import("@/assets/drawing/Candle"));
const Check = dynamic(() => import("@/assets/drawing/Check"));
const Eight = dynamic(() => import("@/assets/drawing/Eight"));
const Euro = dynamic(() => import("@/assets/drawing/Euro"));
const Five = dynamic(() => import("@/assets/drawing/Five"));
const Four = dynamic(() => import("@/assets/drawing/Four"));
const Nine = dynamic(() => import("@/assets/drawing/Nine"));
const One = dynamic(() => import("@/assets/drawing/One"));
const Seven = dynamic(() => import("@/assets/drawing/Seven"));
const Six = dynamic(() => import("@/assets/drawing/Six"));
const Ten = dynamic(() => import("@/assets/drawing/Ten"));
const Three = dynamic(() => import("@/assets/drawing/Three"));
const Two = dynamic(() => import("@/assets/drawing/Two"));

type Props = {
  icon: DrawingIconList;
  size?: number;
  className?: string;
};

const DrawingIcons = ({ icon, size, className }: Props) => {
  switch (icon) {
    case DrawingIconList.CANDLE:
      return <Candle size={size && size} className={className} />;
    case DrawingIconList.EURO:
      return <Euro size={size && size} className={className} />;
    case DrawingIconList.CHECK:
      return <Check size={size && size} className={className} />;
    case DrawingIconList.ONE:
      return <One size={size && size} className={className} />;
    case DrawingIconList.TWO:
      return <Two size={size && size} className={className} />;
    case DrawingIconList.THREE:
      return <Three size={size && size} className={className} />;
    case DrawingIconList.FOUR:
      return <Four size={size && size} className={className} />;
    case DrawingIconList.FIVE:
      return <Five size={size && size} className={className} />;
    case DrawingIconList.SIX:
      return <Six size={size && size} className={className} />;
    case DrawingIconList.SEVEN:
      return <Seven size={size && size} className={className} />;
    case DrawingIconList.EIGHT:
      return <Eight size={size && size} className={className} />;
    case DrawingIconList.NINE:
      return <Nine size={size && size} className={className} />;
    case DrawingIconList.TEN:
      return <Ten size={size && size} className={className} />;
    default:
      return <></>;
  }
};

export default DrawingIcons;
