/* eslint-disable react/jsx-key */
import SelectComponent from "@/components/SelectComponent";
import Footer from "@/components/basic/Footer";
import Header from "@/components/header/Header";
import Customers from "@/components/landingPage/customers/Customers";
import { Page } from "@/services/Page";
import { getMetadata } from "@/utils/metadata";
import { Metadata } from "next";

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 999999999999;

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const info = await Page.getStrapiInfo(`/${params.slug.join("/")}`);
  return getMetadata("", info);
}

const page = async ({ params, searchParams }: Props) => {
  // console.log(props.);
  const info = await Page.getStrapiInfo(`/${params.slug.join("/")}`);

  return (
    <>
      <Header {...info.header} />

      {info.components.map((component: any, index: number) => (
        <SelectComponent {...component} id={`component_${index + 1}`} />
      ))}

      <Customers className="default-container bg-secondary-800 w-full text-white " />
      <Footer />
    </>
  );
};

export default page;
