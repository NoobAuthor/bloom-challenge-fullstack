export type BrandSettings = {
  brandId: string;
  shippingOptions: ReadonlyArray<"home_pickup" | "blue_express">;
  paymentOptions: ReadonlyArray<"coupon" | "bank_transfer">;
  requiresWashing?: boolean;
  washingFee?: number;
  requiresReview?: boolean;
  couponEnabled?: boolean;
  siteUrl: string;
  notes?: string;
};

export type Brand = {
  id: string;
  name: string;
  url: string;
  settings?: BrandSettings;
};

export type FAQ = {
  question: string;
  answer: string | ((settings: BrandSettings) => string);
  always: boolean;
};
