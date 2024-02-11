import { CheckIcon } from "@heroicons/react/24/solid";

const HasPrime = () => {
  return (
    <div className="flex items-center space-x-2 mt-1">
      <div className="flex tracking-tighter">
        <CheckIcon className="h-7 font-extrabold text-yellow-500" />
        <span className="text-blue-600 -ms-1">Prime</span>
      </div>
      <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
    </div>
  );
};

export default HasPrime;
