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
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 overflow-x-auto">
      <RadioGroup.Root
        className="flex space-x-4"
        value={selectedFilter}
        onValueChange={onFilterChange}
      >
        <RadioGroup.Item
          value="all"
          className="px-4 py-2 rounded-md bg-white text-gray-800 shadow-md"
        >
          All
        </RadioGroup.Item>
        {filters.map((filter) => (
          <RadioGroup.Item
            key={filter}
            value={filter}
            className="px-4 py-2 rounded-md bg-white text-gray-800 shadow-md"
          >
            {filter}
          </RadioGroup.Item>
        ))}
        <RadioGroup.Item
          value="scheduled"
          className="px-4 py-2 rounded-md bg-white text-gray-800 shadow-md"
        >
          My Schedule
        </RadioGroup.Item>
      </RadioGroup.Root>
    </section>
  );
};

export default EventFilters;