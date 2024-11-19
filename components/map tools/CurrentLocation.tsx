import TargetIcon from "./TargetIcon";
import { useMap } from 'react-leaflet';

interface CurrentLocationProps {
  onClick: () => void;
}

const CurrentLocation = ({ onClick }: CurrentLocationProps) => {
  return (
    <button 
      onClick={onClick}
      className="w-12 h-12 rounded-rounded-9 bg-[#252629] flex justify-center items-center hover:bg-[#3a3a3d] transition-colors"
    >
      <TargetIcon />
    </button>
  );
};

export default CurrentLocation;
