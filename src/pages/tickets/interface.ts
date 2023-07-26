export interface Variant {
  id: number;
  name: string;
  description: string;
  price: {
    id: number;
    value: number;
  };
  adjusters: [
    {
      id: number;
      name: string;
      description: string;
      external: boolean;
      rateType: string;
      rate: number;
      price: {
        id: number;
        value: number;
      };
    }
  ];
  discount: null | any;
}

export interface Pricing {
  id: number;
  capacity: number;
  capacityRemaining: number;
  priceBand: {
    id: number;
    name: string;
    description: string;
    color: string;
    variants: Variant[];
  };
}

export interface Performance {
  data: {
    id: number;
    eventId: number;
    startDate: string;
    startTime: string;
    endDate: null;
    endTime: null;
    tags: [];
    timeZone: null;
    pricing: Pricing[];
    totalCapacity: number;
    totalCapacityRemaining: number;
    venuePlanId: number;
  };
}

export interface PricingTableFormat {
  name: string;
  description: string;
  type: string;
  price: number;
  adjusters: {
    price: number;
    name: string;
  }[];
}
