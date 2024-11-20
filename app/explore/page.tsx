import dynamic from 'next/dynamic';
import ExploreHeader from "@/components/explore header/ExploreHeader";
import ExploreBody from "@/components/explore body/ExploreBody";

// Dynamically import MapSection with no SSR
const MapSection = dynamic(
  () => import('@/components/explore body/MapSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[calc(85vh-200px)] bg-gray-100 animate-pulse" />
    )
  }
);

export default function ExplorePage() {
  return (
    <main className="flex flex-col items-center justify-between px-6 py-4 gap-4">
      <ExploreHeader />
      <ExploreBody />
    </main>
  );
}
