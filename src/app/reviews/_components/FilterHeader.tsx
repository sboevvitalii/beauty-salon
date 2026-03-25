import { ServiceFilterProps } from "./serviceFilters";

interface FilterHeaderProps {
  handleFilter: (type: string) => void;
  isActive: string;
  serviceFilters: ServiceFilterProps[];
}

const FilterHeader = ({
  handleFilter,
  isActive,
  serviceFilters,
}: FilterHeaderProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {serviceFilters.map((item, index) => (
            <button
              key={index}
              onClick={() => handleFilter(item.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors shadow-sm ${
                isActive === item.value
                  ? "bg-primary text-white"
                  : "bg-white text-text-main hover:bg-primary hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterHeader;
