
import React from 'react';

const availability = {
  branches: ['The Red Tree (Main)', 'Red Tree II Executive', 'Red Tree III Premium', 'Red Sea (Clifton)'],
  rooms: [
    { name: 'Standard Room', available: [true, true, true, true] },
    { name: 'Deluxe Room', available: [true, true, true, true] },
    { name: 'Executive Room', available: [false, true, true, false] },
    { name: 'Premium Family Suite', available: [true, false, true, true] },
  ]
};

const BranchAvailabilitySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            Available At Our Branches
          </h2>
        </div>
        
        <div className="overflow-x-auto pb-4 -mb-4">
            <table className="w-full min-w-[700px] text-center border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-brand-gold/20">
                <th className="p-4 text-left font-semibold text-lg text-gray-900 dark:text-white">Room Type</th>
                {availability.branches.map(branch => (
                  <th key={branch} className="p-4 font-semibold text-lg text-gray-800 dark:text-white whitespace-nowrap">{branch}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {availability.rooms.map(room => (
                <tr key={room.name} className="border-b border-gray-100 dark:border-brand-gold/10 last:border-b-0">
                  <td className={`p-4 text-left font-semibold text-lg ${room.name.includes('Executive') || room.name.includes('Premium') ? 'text-brand-gold' : 'text-gray-800 dark:text-white'}`}>
                    {room.name}
                  </td>
                  {room.available.map((isAvailable, index) => (
                    <td key={index} className="p-4">
                      {isAvailable ? (
                        <span className="text-green-500 text-2xl">✔</span>
                      ) : (
                        <span className="text-gray-400 dark:text-brand-grey text-2xl">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BranchAvailabilitySection;