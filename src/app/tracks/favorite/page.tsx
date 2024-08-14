"use client";

import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getFavoriteTrack } from "@/store/features/playlistSlice";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Favorite() {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state) => state.playlist.likedPlaylist);
  const tokens = useAppSelector((state) => state.user.tokens);
  // const router = useRouter();

  useEffect(() => {
    // if (!tokens) {
    // router.push("/");
    // } else
    if (tokens && tokens.access && tokens.refresh) {
      dispatch(
        getFavoriteTrack({ access: tokens.access, refresh: tokens.refresh })
      )
        .unwrap()
        .catch((error) => {
          console.error("Ошибка:", error.message);
        });
    } else {
      console.error("Ошибка избранного");
    }
  }, [dispatch, tokens]);

  return <CenterBlock tracks={favorite} />;
}
