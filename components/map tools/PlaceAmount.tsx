interface PlaceAmountProps {
  amount: number;
}
const PlaceAmount = ({ amount }: PlaceAmountProps) => {
  return (
    <div className="w-14 h-14 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
        <p className="text-base font-bold text-neutral-neutral25"> + {amount}</p>
    </div>
  );
};
export default PlaceAmount;
