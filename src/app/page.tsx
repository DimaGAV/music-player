import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import { CurrentTrackProvider } from "@/contexts/CurrentTrackProvider";
import { PlayerStateProvider } from "@/contexts/PlayerStateContext";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <CurrentTrackProvider>
          <PlayerStateProvider>
            <Main />
            <Bar />
          </PlayerStateProvider>
        </CurrentTrackProvider>
      </div>
    </div>
  );
}
