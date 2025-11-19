import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const CacheSimulator = () => {
  const [version, setVersion] = useState('A');
  const [matrixSize, setMatrixSize] = useState(4);
  const [accesses, setAccesses] = useState([]);
  const [cacheState, setCacheState] = useState([]);
  const [stats, setStats] = useState({ miss: 0, hit: 0 });
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Configuración
  const BLOCK_SIZE = 16; // bytes
  const NUM_BLOCKS = 4; // bloques en caché
  const ELEMENT_SIZE = 4; // bytes

  // Calcular dirección de memoria para A[i][j]
  const getAddress = (i, j) => {
    return (i * matrixSize + j) * ELEMENT_SIZE;
  };

  // Calcular a qué bloque de caché va una dirección
  const getCacheBlock = (address) => {
    return Math.floor(address / BLOCK_SIZE) % NUM_BLOCKS;
  };

  // Calcular qué direcciones se cargan en un bloque
  const getBlockAddresses = (address) => {
    const blockStart = Math.floor(address / BLOCK_SIZE) * BLOCK_SIZE;
    const addrs = [];
    for (let i = 0; i < BLOCK_SIZE; i += ELEMENT_SIZE) {
      addrs.push(blockStart + i);
    }
    return addrs;
  };

  // Generar secuencia de accesos según la versión
  const generateAccesses = (v, n) => {
    const sequence = [];
    
    if (v === 'A') {
      // Versión A: A[i][k] * A[k][i]
      for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
          // Acceso 1: A[i][k]
          sequence.push({
            element: `A[${i}][${k}]`,
            i, j: k,
            address: getAddress(i, k),
            operation: `A[${i}][${k}] * A[${k}][${i}]`,
            accessNum: 1
          });
          // Acceso 2: A[k][i]
          sequence.push({
            element: `A[${k}][${i}]`,
            i: k, j: i,
            address: getAddress(k, i),
            operation: `A[${i}][${k}] * A[${k}][${i}]`,
            accessNum: 2
          });
        }
      }
    } else if (v === 'B') {
      // Versión B: Loop unrolling 2x2
      for (let i = 0; i < n; i += 2) {
        for (let k = 0; k < n; k += 2) {
          // total += A[i][k]*A[k][i];
          sequence.push({ element: `A[${i}][${k}]`, i, j: k, address: getAddress(i, k), operation: `A[${i}][${k}]*A[${k}][${i}]` });
          sequence.push({ element: `A[${k}][${i}]`, i: k, j: i, address: getAddress(k, i), operation: `A[${i}][${k}]*A[${k}][${i}]` });
          
          // total += A[i][k+1]*A[k+1][i];
          if (k + 1 < n) {
            sequence.push({ element: `A[${i}][${k+1}]`, i, j: k+1, address: getAddress(i, k+1), operation: `A[${i}][${k+1}]*A[${k+1}][${i}]` });
            sequence.push({ element: `A[${k+1}][${i}]`, i: k+1, j: i, address: getAddress(k+1, i), operation: `A[${i}][${k+1}]*A[${k+1}][${i}]` });
          }
          
          // total += A[i+1][k]*A[k][i+1];
          if (i + 1 < n) {
            sequence.push({ element: `A[${i+1}][${k}]`, i: i+1, j: k, address: getAddress(i+1, k), operation: `A[${i+1}][${k}]*A[${k}][${i+1}]` });
            sequence.push({ element: `A[${k}][${i+1}]`, i: k, j: i+1, address: getAddress(k, i+1), operation: `A[${i+1}][${k}]*A[${k}][${i+1}]` });
          }
          
          // total += A[i+1][k+1]*A[k+1][i+1];
          if (i + 1 < n && k + 1 < n) {
            sequence.push({ element: `A[${i+1}][${k+1}]`, i: i+1, j: k+1, address: getAddress(i+1, k+1), operation: `A[${i+1}][${k+1}]*A[${k+1}][${i+1}]` });
            sequence.push({ element: `A[${k+1}][${i+1}]`, i: k+1, j: i+1, address: getAddress(k+1, i+1), operation: `A[${i+1}][${k+1}]*A[${k+1}][${i+1}]` });
          }
        }
      }
    }
    
    return sequence;
  };

  // Simular todos los accesos
  const simulate = () => {
    setIsRunning(true);
    const sequence = generateAccesses(version, matrixSize);
    const cache = Array(NUM_BLOCKS).fill(null);
    const results = [];
    let missCount = 0;
    let hitCount = 0;

    sequence.forEach((access, idx) => {
      const { element, address, operation } = access;
      const block = getCacheBlock(address);
      const blockAddrs = getBlockAddresses(address);
      
      // Verificar si es HIT o MISS
      let isHit = false;
      if (cache[block] !== null) {
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
        element,
        address,
        addressHex: address.toString(16).toUpperCase().padStart(3, '0'),
        block,
        result: isHit ? 'HIT' : 'MISS',
        cacheState: cache.map(b => b ? [...b] : null),
        wasReplaced: !isHit && cache[block] !== null,
        operation
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

  const totalTime = stats.miss * 70 + stats.hit * 1.1;

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
        Simulador de Caché - Versión A vs B
      </h1>

      {/* Código de las versiones */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-bold text-lg mb-2">Versión A (original):</h3>
          <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`for (int i = 0; i < n; ++i) {
  for (int k = 0; k < n; ++k) {
    total += A[i][k] * A[k][i];
  }
}`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="font-bold text-lg mb-2">Versión B (unrolling):</h3>
          <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`for (int i = 0; i < n; i += 2) {
  for (int k = 0; k < n; k += 2) {
    total += A[i][k]*A[k][i];
    total += A[i][k+1]*A[k+1][i];
    total += A[i+1][k]*A[k][i+1];
    total += A[i+1][k+1]*A[k+1][i+1];
  }
}`}
          </pre>
        </div>
      </div>

      {/* Controles */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div>
            <label className="font-semibold mr-2">Versión:</label>
            <select 
              value={version} 
              onChange={(e) => { setVersion(e.target.value); reset(); }}
              className="border-2 border-gray-300 rounded px-4 py-2"
            >
              <option value="A">Versión A (original)</option>
              <option value="B">Versión B (unrolling)</option>
            </select>
          </div>

          <div>
            <label className="font-semibold mr-2">Tamaño matriz (n):</label>
            <select 
              value={matrixSize} 
              onChange={(e) => { setMatrixSize(parseInt(e.target.value)); reset(); }}
              className="border-2 border-gray-300 rounded px-4 py-2"
            >
              <option value="4">4×4</option>
              <option value="6">6×6</option>
              <option value="8">8×8</option>
            </select>
          </div>
          
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
          <div className="grid grid-cols-5 gap-4">
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
            <div className="bg-orange-100 p-4 rounded text-center">
              <div className="text-2xl font-bold text-orange-700">{totalTime.toFixed(1)}ns</div>
              <div className="text-sm text-gray-600">Tiempo Total</div>
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
                  <div><strong>Dirección:</strong> {accesses[currentStep].address} (0x{accesses[currentStep].addressHex})</div>
                  <div><strong>Bloque de caché:</strong> {accesses[currentStep].block}</div>
                  <div className="text-sm text-gray-600 mt-2"><strong>Operación:</strong> {accesses[currentStep].operation}</div>
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
                  <th className="p-2 border">Operación</th>
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
                    <td className="p-2 border text-center font-mono text-xs">{access.element}</td>
                    <td className="p-2 border text-center">{access.address}</td>
                    <td className="p-2 border text-center font-mono">0x{access.addressHex}</td>
                    <td className="p-2 border text-center">{access.block}</td>
                    <td className={`p-2 border text-center font-bold ${
                      access.result === 'HIT' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {access.result}
                    </td>
                    <td className="p-2 border text-center">
                      {access.wasReplaced ? '🔄' : '-'}
                    </td>
                    <td className="p-2 border text-xs">{access.operation}</td>
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