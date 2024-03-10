'use client';

import { useState } from 'react';
import EventFilters from '@/components/schedule/EventFilters';
import EventsList from '@/components/schedule/EventsList';
import { EventInterface } from '@/data/events';

interface ClientComponentProps {
    events: EventInterface[];
    }

const ClientComponent : React.FC<ClientComponentProps> = ({ events }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const filters = [...new Set(events.map((event) => event.type))];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <EventFilters
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      <EventsList events={events} selectedFilter={selectedFilter} />
    </>
  );
};

export default ClientComponent;