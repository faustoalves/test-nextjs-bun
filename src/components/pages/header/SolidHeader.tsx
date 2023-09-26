import ResponsiveDesktop from "@/components/basic/ResponsiveDesktop";
import DesktopNavBar from "@/components/navigation/DesktopNavBar";

type Props = {
  children: React.ReactNode;
};

const SolidHeader = ({ children }: Props) => {
  return (
    <div className="header header-gradient-secondary ">
      {/* <ResponsiveDesktop>
        <DesktopNavBar />
      </ResponsiveDesktop> */}
      {children}
    </div>
  );
};

export default SolidHeader;
