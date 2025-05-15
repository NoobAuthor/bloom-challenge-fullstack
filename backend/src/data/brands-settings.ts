/**
 * Debes completar este archivo como consideres adecuado
 */

export default [
  {
    brandId: 'karyn_coo',
    shippingOptions: ['home_pickup', 'blue_express'] as const,
    paymentOptions: ['coupon', 'bank_transfer'] as const,
    couponEnabled: true,
    siteUrl: 'https://karyncoo.bloomreuse.com',
  },
  {
    brandId: 'andesgear',
    shippingOptions: ['home_pickup', 'blue_express'] as const,
    paymentOptions: ['bank_transfer'] as const,
    couponEnabled: false,
    siteUrl: 'https://circular.andesgear.cl',
  },
  {
    brandId: 'milu_rugs',
    shippingOptions: ['home_pickup'] as const,
    paymentOptions: ['coupon', 'bank_transfer'] as const,
    requiresWashing: true,
    washingFee: 10000,
    couponEnabled: true,
    siteUrl: 'https://milu.bloomreuse.com',
  },
  {
    brandId: 'kokoro',
    shippingOptions: ['home_pickup', 'blue_express'] as const,
    paymentOptions: ['coupon', 'bank_transfer'] as const,
    requiresReview: true,
    couponEnabled: true,
    siteUrl: 'https://vintage.kokoro.cl',
  },
];
