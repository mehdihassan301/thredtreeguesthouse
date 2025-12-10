
import React, { useState, useEffect } from 'react';

const comparisonData = {
  headers: ['Standard', 'Deluxe', 'Executive', 'Family Suite'],
  rows: [
    { label: 'Bed Type', values: ['Queen', 'King / Twin', 'King', '2 Queen'] },
    { label: 'Room Size', values: ['Cozy', 'Spacious', 'Large', 'Extra Large'] },
    { label: 'WiFi', values: ['Fast', 'Fast', 'High-Speed', 'High-Speed'] },
    { label: 'Workspace', values: ['-', 'Desk', 'Executive Desk', 'Desk'] },
    { label: 'TV Size', values: ['32"', '42"', '50"', '55"'] },
    { label: 'Toiletries', values: ['Standard', 'Upgraded', 'Premium', 'Premium'] },
    { label: 'Suitable For', values: ['Solo / Short Stays', 'Couples', 'Business', 'Families / Long Stays'] },
  ]
};

const RoomComparisonTable: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            Compare Our Rooms
          </h2>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden lg:block border border-gray-200 dark:border-brand-gold/20 rounded-2xl p-2 bg-white dark:bg-black">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-gray-200 dark:border-brand-gold/20">
                <th className="p-6 text-left font-semibold text-lg text-gray-900 dark:text-white">Features</th>
                {comparisonData.headers.map(header => (
                  <th key={header} className="p-6 font-semibold text-lg text-gray-900 dark:text-white">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, index) => (
                <tr 
                  key={row.label} 
                  className={`border-b border-gray-100 dark:border-brand-gold/10 last:border-b-0 transition-all duration-500 ease-out hover:bg-gray-50 dark:hover:bg-brand-gold/5 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <td className="p-4 text-left font-semibold text-lg text-gray-800 dark:text-white">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={index} className="p-4 text-lg text-gray-600 dark:text-slate-gray">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-8">
          {comparisonData.headers.map((header, colIndex) => (
            <div key={header} className="border border-gray-200 dark:border-brand-gold/20 rounded-2xl bg-white dark:bg-black overflow-hidden">
              <h3 className="bg-gray-100 dark:bg-brand-gold/10 text-gray-900 dark:text-white font-semibold text-xl p-4 text-center">{header}</h3>
              <ul className="divide-y divide-gray-200 dark:divide-brand-gold/10">
                {comparisonData.rows.map(row => (
                  <li key={row.label} className="flex justify-between items-center p-4">
                    <span className="font-semibold text-lg text-gray-800 dark:text-white">{row.label}</span>
                    <span className="text-lg text-gray-600 dark:text-slate-gray">{row.values[colIndex]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomComparisonTable;