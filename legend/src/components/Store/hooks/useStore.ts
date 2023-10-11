import { useState } from "react";

const useStore = () => {
  const [searchFilters, setSearchFilters] = useState<{
    printType: string[];
    timestamp: string;
    grant: string;
    profile: string;
    referral: {
      min: number;
      max: number;
    };
    amount: {
      min: number;
      max: number;
    };
  }>({
    printType: [],
    timestamp: "latest",
    grant: "",
    profile: "",
    referral: {
      min: 1000,
      max: 15000,
    },
    amount: {
      min: 10,
      max: 50,
    },
  });

  return {
    searchFilters,
    setSearchFilters,
  };
};

export default useStore;
