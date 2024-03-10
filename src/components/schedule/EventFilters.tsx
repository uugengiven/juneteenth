import * as RadioGroup from '@radix-ui/react-radio-group';

interface EventFiltersProps {
  filters: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({
  filters,
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <RadioGroup.Root
        className="flex space-x-4"
        value={selectedFilter}
        onValueChange={onFilterChange}
      >
        <RadioGroup.Item value="all" className="px-4 py-2 rounded-md bg-gray-200 text-gray-800">
          All
        </RadioGroup.Item>
        {filters.map((filter) => (
          <RadioGroup.Item
            key={filter}
            value={filter}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800"
          >
            {filter}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </section>
  );
};

export default EventFilters;