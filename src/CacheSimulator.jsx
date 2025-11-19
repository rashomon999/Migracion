import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const CacheSimulator = () => {
  const [version, setVersion] = useState('V1');
  const [accesses, setAccesses] = useState([]);
  const [cacheState, setCacheState] = useState([]);
  const [stats, setStats] = useState({ miss: 0, hit: 0 });
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Configuración
  const BLOCK_SIZE = 16; // bytes
  const NUM_BLOCKS = 4; // bloques en caché
  const MATRIX_SIZE = 6;

  // Calcular dirección de memoria para A[i][j]
  const getAddress = (i, j) => {
    return (i * MATRIX_SIZE + j) * 4;
  };

  // Calcular a qué bloque de caché va una dirección
  const getCacheBlock = (address) => {
    return Math.floor(address / BLOCK_SIZE) % NUM_BLOCKS;
  };

  // Calcular qué direcciones se cargan en un bloque
  const getBlockAddresses = (address) => {
    const blockStart = Math.floor(address / BLOCK_SIZE) * BLOCK_SIZE;
    return [blockStart, blockStart + 4, blockStart + 8, blockStart + 12];
  };

  // Generar secuencia de accesos según la versión
  const generateAccesses = (v) => {
    const sequence = [];
    
    if (v === 'V1') {
      // Por filas: A[0,0], A[0,1], ..., A[0,5], A[1,0], ...
      for (let i = 0; i < MATRIX_SIZE; i++) {
        for (let j = 0; j < MATRIX_SIZE; j++) {
          sequence.push({ i, j, address: getAddress(i, j) });
        }
      }
    } else if (v === 'V2') {
      // Por columnas: A[0,0], A[1,0], ..., A[5,0], A[0,1], ...
      for (let j = 0; j < MATRIX_SIZE; j++) {
        for (let i = 0; i < MATRIX_SIZE; i++) {
          sequence.push({ i, j, address: getAddress(i, j) });
        }
      }
    } else if (v === 'V3') {
      // Por bloques 2x2
      for (let bi = 0; bi < MATRIX_SIZE; bi += 2) {
        for (let bj = 0; bj < MATRIX_SIZE; bj += 2) {
          for (let i = bi; i < bi + 2; i++) {
            for (let j = bj; j < bj + 2; j++) {
              sequence.push({ i, j, address: getAddress(i, j) });
            }
          }
        }
      }
    }
    
    return sequence;
  };

  // Simular todos los accesos
  const simulate = () => {
    setIsRunning(true);
    const sequence = generateAccesses(version);
    const cache = Array(NUM_BLOCKS).fill(null);
    const results = [];
    let missCount = 0;
    let hitCount = 0;

    sequence.forEach((access, idx) => {
      const { i, j, address } = access;
      const block = getCacheBlock(address);
      const blockAddrs = getBlockAddresses(address);
      
      // Verificar si es HIT o MISS
      let isHit = false;
      if (cache[block] !== null) {
        // Verificar si la dirección está en el bloque cargado
        if (cache[block].includes(address)) {
          isHit = true;
          hitCount++;
        }
      }
      
      if (!isHit) {
        missCount++;
        cache[block] = blockAddrs;
      }

      results.push({
        step: idx + 1,
        element: `A[${i},${j}]`,
        address,
        block,
        result: isHit ? 'HIT' : 'MISS',
        cacheState: cache.map(b => b ? [...b] : null),
        wasReplaced: !isHit && cache[block] !== null
      });
    });

    setAccesses(results);
    setStats({ miss: missCount, hit: hitCount });
    setCurrentStep(0);
  };

  // Resetear
  const reset = () => {
    setAccesses([]);
    setStats({ miss: 0, hit: 0 });
    setCurrentStep(0);
    setIsRunning(false);
    setCacheState([]);
  };

  // Ver paso a paso
  const showStep = (step) => {
    setCurrentStep(step);
    if (accesses[step]) {
      setCacheState(accesses[step].cacheState);
    }
  };

  const missRate = stats.miss + stats.hit > 0 
    ? ((stats.miss / (stats.miss + stats.hit)) * 100).toFixed(1)
    : 0;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
        Simulador de Caché - MISS y HIT
      </h1>

      {/* Controles */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <label className="font-semibold">Versión:</label>
          <select 
            value={version} 
            onChange={(e) => { setVersion(e.target.value); reset(); }}
            className="border-2 border-gray-300 rounded px-4 py-2"
          >
            <option value="V1">V1 - Por Filas</option>
            <option value="V2">V2 - Por Columnas</option>
            <option value="V3">V3 - Por Bloques 2×2</option>
          </select>
          
          <button 
            onClick={simulate}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <Play size={20} />
            Simular
          </button>
          
          <button 
            onClick={reset}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
          >
            <RotateCcw size={20} />
            Reset
          </button>
        </div>

        {/* Configuración */}
        <div className="grid grid-cols-3 gap-4 text-sm bg-gray-100 p-4 rounded">
          <div><strong>Tamaño de bloque:</strong> 16 bytes</div>
          <div><strong>Bloques en caché:</strong> 4</div>
          <div><strong>Tamaño de caché:</strong> 64 bytes</div>
        </div>
      </div>

      {/* Estadísticas */}
      {isRunning && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Estadísticas</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-100 p-4 rounded text-center">
              <div className="text-3xl font-bold text-red-700">{stats.miss}</div>
              <div className="text-sm text-gray-600">MISS</div>
            </div>
            <div className="bg-green-100 p-4 rounded text-center">
              <div className="text-3xl font-bold text-green-700">{stats.hit}</div>
              <div className="text-sm text-gray-600">HIT</div>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <div className="text-3xl font-bold text-blue-700">{stats.miss + stats.hit}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="bg-purple-100 p-4 rounded text-center">
              <div className="text-3xl font-bold text-purple-700">{missRate}%</div>
              <div className="text-sm text-gray-600">Miss Rate</div>
            </div>
          </div>
        </div>
      )}

      {/* Visualización paso a paso */}
      {accesses.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Paso a Paso</h2>
          
          <div className="mb-4">
            <input 
              type="range" 
              min="0" 
              max={accesses.length - 1}
              value={currentStep}
              onChange={(e) => showStep(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-sm text-gray-600">
              Paso {currentStep + 1} de {accesses.length}
            </div>
          </div>

          {accesses[currentStep] && (
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 p-4 rounded">
                  <div><strong>Elemento:</strong> {accesses[currentStep].element}</div>
                  <div><strong>Dirección:</strong> {accesses[currentStep].address}</div>
                  <div><strong>Bloque de caché:</strong> {accesses[currentStep].block}</div>
                </div>
                <div className={`p-4 rounded text-center ${
                  accesses[currentStep].result === 'HIT' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  <div className="text-3xl font-bold">{accesses[currentStep].result}</div>
                  {accesses[currentStep].wasReplaced && (
                    <div className="text-sm mt-2">⚠️ Reemplazo</div>
                  )}
                </div>
              </div>

              {/* Estado de la caché */}
              <div className="border-2 border-gray-300 rounded p-4">
                <h3 className="font-bold mb-2">Estado de la Caché:</h3>
                <div className="space-y-2">
                  {cacheState.map((block, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded ${
                        idx === accesses[currentStep].block 
                          ? 'bg-yellow-100 border-2 border-yellow-500' 
                          : 'bg-gray-50'
                      }`}
                    >
                      <strong>Bloque {idx}:</strong> {
                        block 
                          ? `[${block.join(', ')}]` 
                          : '[vacío]'
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tabla de resultados */}
      {accesses.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Tabla Completa de Accesos</h2>
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Elemento</th>
                  <th className="p-2 border">Dirección</th>
                  <th className="p-2 border">Hex</th>
                  <th className="p-2 border">Bloque</th>
                  <th className="p-2 border">Resultado</th>
                  <th className="p-2 border">Reemplazo</th>
                </tr>
              </thead>
              <tbody>
                {accesses.map((access, idx) => (
                  <tr 
                    key={idx}
                    className={`cursor-pointer hover:bg-gray-100 ${
                      idx === currentStep ? 'bg-yellow-50' : ''
                    }`}
                    onClick={() => showStep(idx)}
                  >
                    <td className="p-2 border text-center">{access.step}</td>
                    <td className="p-2 border text-center">{access.element}</td>
                    <td className="p-2 border text-center">{access.address}</td>
                    <td className="p-2 border text-center">
                      {access.address.toString(16).toUpperCase().padStart(3, '0')}
                    </td>
                    <td className="p-2 border text-center">{access.block}</td>
                    <td className={`p-2 border text-center font-bold ${
                      access.result === 'HIT' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {access.result}
                    </td>
                    <td className="p-2 border text-center">
                      {access.wasReplaced ? '🔄' : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CacheSimulator;