import React from "react";
import { getMenu } from "../../../utils/getMenu";

import DisplayMenu from "@/components/DisplayMenu";

async function Screen({
  params: { docid, sheetname },
}: {
  params: { docid: string; sheetname: string };
}) {
  const { values } = await getMenu({ docid, sheetname });
  if (!values) return null;

  return (
    <main className="flex flex-col p-1 overflow-hidden h-screen w-screen bg-gray-50">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        <DisplayMenu data={values} />
      </div>
    </main>
  );
}

export default Screen;
