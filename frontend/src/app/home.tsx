import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BrandsApi } from "../api/brands";
import { BrandSelector } from "../components/BrandSelector";
import { FAQList } from "../components/FAQList";
import { FAQS } from "../constants/faqs";
import { Brand, BrandSettings } from "../types/brand";

export const Home = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [brandSettings, setBrandSettings] = useState<BrandSettings | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await BrandsApi.list();
        setBrands(data);
      } catch (err) {
        setError("Error al cargar las marcas. Por favor, intenta de nuevo.");
        console.error("Error fetching brands:", err);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchBrandSettings = async () => {
      if (!selectedBrand) return;

      setLoading(true);
      setError(null);
      try {
        const data = await BrandsApi.getById(selectedBrand);
        setBrandSettings(data.settings!);
      } catch (err) {
        setError(
          "Error al cargar la configuración de la marca. Por favor, intenta de nuevo.",
        );
        console.error("Error fetching brand settings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBrandSettings();
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Image
        className="ml-auto h-14 w-auto"
        src="/images/Logo-Bloom.png"
        alt="Logo"
        width={400}
        height={100}
      />
      <div className="mx-auto mt-8 max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Desafío Dev
        </h1>

        <BrandSelector
          brands={brands}
          selectedBrand={selectedBrand}
          onSelect={setSelectedBrand}
        />

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-center text-red-800">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center text-gray-600">
            Cargando preguntas frecuentes...
          </div>
        )}

        {brandSettings && !loading && (
          <FAQList faqs={FAQS} settings={brandSettings} />
        )}
      </div>
    </div>
  );
};
