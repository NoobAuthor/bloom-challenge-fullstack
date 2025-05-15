import { Brand } from "../types/brand";

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrand: string;
  onSelect: (brandId: string) => void;
}

export const BrandSelector: React.FC<BrandSelectorProps> = ({
  brands,
  selectedBrand,
  onSelect,
}) => (
  <div className="mb-12 flex flex-col items-center gap-4">
    <label
      htmlFor="brand-select"
      className="text-lg font-semibold text-gray-700"
    >
      Selecciona una marca:
    </label>
    <select
      id="brand-select"
      className="w-64 rounded-lg border bg-white px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      value={selectedBrand}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">-- Selecciona --</option>
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
  </div>
);
