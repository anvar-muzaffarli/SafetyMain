import React, { useState, useEffect } from 'react';

const QapiHesab = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pricePerSqM = 91; 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const area = width * height;
    const result = area * pricePerSqM;
    setTotal(result.toFixed(2));
  }, [width, height]);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border-t-8 border-[#FFC024]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 uppercase tracking-wider">
          Jalüz Qapı Hesablayıcısı
        </h2>
        <div className="h-1 w-24 bg-[#FFC024] mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 border-l-4 border-[#FFC024] pl-3">
            Ölçü Məlumatları
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">En (metr):</label>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-[#FFC024] transition-colors"
                onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Hündürlük (metr):</label>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-[#FFC024] transition-colors"
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="p-4 bg-amber-50 border-l-4 border-[#FFC024] rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-[#FFC024]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-amber-900">
                  <span className="font-bold uppercase underline">Vacib Qeyd:</span>
                </p>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Hesablanan məbləğ <strong>yalnız jalüz materialı (lamel) və rəngli profilləri</strong> əhatə edir.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFC024] bg-opacity-10 p-6 rounded-2xl border-2 border-[#FFC024] flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Hesablama Detalları</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#FFC024] border-opacity-30 pb-2">
              <span className="text-gray-700 font-medium">Ümumi Sahə:</span>
              <span className="text-lg font-bold">{(width * height).toFixed(2)} m²</span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#FFC024] border-opacity-30 pb-2">
              <span className="text-gray-700 font-medium">Vahid Qiymət:</span>
              <span className="text-lg font-bold">{pricePerSqM} AZN</span>
            </div>

            <div className="pt-6">
              <span className="block text-xs text-gray-500 uppercase font-bold tracking-widest">Yekun Material Qiyməti</span>
              <div className="text-5xl font-black text-gray-900 mt-1">
                {total} <span className="text-2xl font-medium text-gray-600">AZN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[11px] text-gray-400 italic">
          * Ölçülər daxil edildikdə sistem tərəfindən real vaxt rejimində hesablanır.
        </p>
      </div>
    </div>
  );
};

export default QapiHesab;
