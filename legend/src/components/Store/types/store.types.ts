export type FilterProps = {
  searchFilters: {
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
  };
  setSearchFilters: (e: {
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
  }) => void;
};
