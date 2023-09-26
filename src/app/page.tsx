import Footer from "@/components/basic/Footer";

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 999999999999;

const page = async (props: Props) => {
  return (
    <>
      {/* <p>Hello world!</p> */}
      {/* <Footer /> */}
    </>
  );
};

export default page;
