import { getSelectionPlaylist } from "@/api/playlist";
import CenterBlock from "@/components/CenterBlock/CenterBlock";

type selectionPageType = {
  params: { id: string };
};

const selectionPage = async ({ params }: selectionPageType) => {
  const selectionData = await getSelectionPlaylist(params.id);
  return <CenterBlock tracks={selectionData} />;
};

export default selectionPage;