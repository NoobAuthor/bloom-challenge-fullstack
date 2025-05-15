import { Brand } from '../models/brand';
import { NotFoundError } from '../models/errors';
import brands from '../data/brands';
import brandSettings from '../data/brands-settings';

export interface IBrandService {
  retrieve(id: string): Promise<Brand>;
  list(): Promise<Brand[]>;
}

class BrandService implements IBrandService {
  async retrieve(id: string): Promise<Brand> {
    const brand = brands.find((brand) => brand.id === id);
    const brandSetting = brandSettings.find(
      (setting) => setting.brandId === id,
    );

    if (!brand || !brandSetting) {
      throw new NotFoundError('Brand');
    }

    return {
      ...brand,
      settings: brandSetting,
    };
  }

  async list(): Promise<Brand[]> {
    return brands;
  }
}

export default new BrandService();
