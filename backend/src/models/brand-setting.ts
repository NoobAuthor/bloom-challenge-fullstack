export type BrandSettings = {
  brandId: string;
  shippingOptions: ReadonlyArray<'home_pickup' | 'blue_express'>;
  paymentOptions: ReadonlyArray<'coupon' | 'bank_transfer'>;
  requiresWashing?: boolean;
  washingFee?: number;
  requiresReview?: boolean;
  couponEnabled?: boolean;
  siteUrl: string;
  notes?: string;
};
