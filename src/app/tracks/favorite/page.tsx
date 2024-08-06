"use client";

import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppSelector } from "@/hooks";

export default function Favorite() {
  const favorite = useAppSelector((state) => state.playlist.likedPlaylist);
  return <CenterBlock tracks={favorite} />;
}
