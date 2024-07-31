import { disLikeTrack, likeTrack } from "@/api/playlist";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setDisLikeTrack, setLikeTrack } from "@/store/features/playlistSlice";

const useLikeTrack = (trackId: number) => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.user.tokens);

  //   получаем состояние лайка из избранных треков
  const likeTracks = useAppSelector((state) => state.playlist.likedPlaylist);
  //   !! - двойное отрицание на типы
  // console.log("likeTracks:", likeTracks);
  const isLiked = !!likeTracks.find((track) => track._id === trackId);
  // console.log("isLiked:", isLiked);

  const handleLike = async () => {
    if (!tokens || !tokens.access || !tokens.refresh)
      return alert("Вы не авторизованы");
    const action = isLiked ? disLikeTrack : likeTrack;
    try {
      await action({
        trackId: trackId,
        access: tokens.access,
        refresh: tokens.refresh,
      });
      if (isLiked) {
        dispatch(setDisLikeTrack(trackId));
      } else {
        dispatch(setLikeTrack(trackId));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { handleLike, isLiked };
};

export default useLikeTrack;
