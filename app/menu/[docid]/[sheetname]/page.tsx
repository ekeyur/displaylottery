import React from "react";
import { getMenu } from "../../../utils/getMenu";
import AdCarousel from "@/components/AdCarousel";

async function Screen({
  params: { docid, sheetname },
}: {
  params: { docid: string; sheetname: string };
}) {
  const { data } = await getMenu({ docid, sheetname });

  if (!data) return null;

  return (
    <main className="flex flex-col p-1 overflow-hidden h-screen w-screen bg-gray-50">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        <AdCarousel ad_images={data} />
      </div>
    </main>
  );
}

export default Screen;
