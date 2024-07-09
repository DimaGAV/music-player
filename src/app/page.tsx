import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import { CurrentTrackProvider } from "@/contexts/CurrentTrackProvider";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <CurrentTrackProvider>
          <Main />
          <Bar />
        </CurrentTrackProvider>
      </div>
    </div>
  );
}
