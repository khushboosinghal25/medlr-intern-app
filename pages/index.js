// pages/index.js
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MedicineList from '../components/MedicineList';
import FiltersAndSorting from '../components/FiltersAndSorting';

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    // Fetch data from mock data file
    fetch('/data/medicines.json')
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
        setFilteredMedicines(data);
      });
  }, []);

  const applyFilters = ({ minPrice, maxPrice, manufacturer, sortOption }) => {
    let filtered = medicines;

    if (minPrice) {
      filtered = filtered.filter((medicine) => medicine.price >= minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter((medicine) => medicine.price <= maxPrice);
    }
    if (manufacturer) {
      filtered = filtered.filter((medicine) => medicine.manufacturer.toLowerCase().includes(manufacturer.toLowerCase()));
    }
    if (sortOption) {
      filtered = filtered.sort((a, b) => (sortOption === 'price' ? a.price - b.price : a.name.localeCompare(b.name)));
    }

    setFilteredMedicines(filtered);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <FiltersAndSorting applyFilters={applyFilters} />
        <MedicineList medicines={filteredMedicines} />
      </div>
    </div>
  );
};

export default Home;
