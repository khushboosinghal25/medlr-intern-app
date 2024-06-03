// components/FiltersAndSorting.js
import { useState } from 'react';

const FiltersAndSorting = ({ applyFilters }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleFilter = () => {
    applyFilters({ minPrice, maxPrice, manufacturer, sortOption });
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label>Min Price</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Manufacturer</label>
        <input
          type="text"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Sort By</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      <button onClick={handleFilter} className="p-2 bg-blue-500 text-white rounded">
        Apply
      </button>
    </div>
  );
};

export default FiltersAndSorting;
