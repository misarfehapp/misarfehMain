import dynamic from 'next/dynamic';
import ExploreHeader from "@/components/explore header/ExploreHeader";
import ExploreBody from "@/components/explore body/ExploreBody";


export default function ExplorePage() {
  return (
    <main className="flex flex-col items-center justify-between px-6 py-4 gap-4">
      {/* <ExploreHeader  /> */}
      <ExploreBody />
    </main>
  );
}
