import { WordGrid } from "@/app/grid";

const TITLE: string = "WORDLE";

export default function Home() {
  return (
    <>
      <div className="header">{TITLE}</div>
      <div className="content">
        <WordGrid />
      </div>
    </>
  );
}
