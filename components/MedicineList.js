// components/MedicineList.js
import { useState } from 'react';

const MedicineList = ({ medicines }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [medicinesPerPage] = useState(10);

  // Pagination logic
  const indexOfLastMedicine = currentPage * medicinesPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  const currentMedicines = medicines.slice(indexOfFirstMedicine, indexOfLastMedicine);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul>
        {currentMedicines.map((medicine) => (
          <li key={medicine.id} className="p-4 border-b">
            <h2 className="text-xl">{medicine.name}</h2>
            <p>{medicine.manufacturer}</p>
            <p>${medicine.price}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        {Array.from({ length: Math.ceil(medicines.length / medicinesPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className="p-2 m-2 bg-blue-500 text-white rounded"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MedicineList;
