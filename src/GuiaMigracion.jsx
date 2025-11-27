import React, { useState } from 'react';
import { Home, FileText, MapPin, Briefcase, Heart, GraduationCap, Building, Users, AlertCircle, CheckCircle, Phone, Menu, X, ExternalLink, Map, Info, Scale } from 'lucide-react';

const GuiaMigracionCompleta = () => {
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [motivoMigracion, setMotivoMigracion] = useState(null);
  const [tienePasaporte, setTienePasaporte] = useState(null);
  const [perfilRegularizacion, setPerfilRegularizacion] = useState(null);
  const [situacionLaboral, setSituacionLaboral] = useState(null);

  const secciones = [
    { id: 'inicio', nombre: 'Inicio', icono: Home },
    { id: 'preparacion', nombre: 'Antes de salir', icono: FileText },
    { id: 'frontera', nombre: 'Cruce Fronterizo', icono: MapPin },
    { id: 'regularizacion', nombre: 'Regularización', icono: CheckCircle },
    { id: 'trabajo', nombre: 'Trabajo', icono: Briefcase },
    { id: 'salud', nombre: 'Salud', icono: Heart },
    { id: 'educacion', nombre: 'Educación', icono: GraduationCap },
    { id: 'vivienda', nombre: 'Vivienda', icono: Building },
    { id: 'comunidad', nombre: 'Comunidad', icono: Users },
    { id: 'emergencia', nombre: 'Emergencias', icono: Phone }
  ];

  const SeccionInicio = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">🇻🇪 ➜ 🇨🇴</h1>
        <h2 className="text-3xl font-bold mb-2">Guía Completa de Migración</h2>
        <p className="text-xl">Venezuela → Colombia 2025</p>
        <p className="text-sm mt-2 opacity-90">Información actualizada a noviembre 2025</p>
      </div>


 

      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">🎯 Encuentra tu ruta</h3>
        <p className="mb-4">Cada situación es diferente. Selecciona la tuya:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { seccion: 'preparacion', icono: FileText, titulo: 'Voy a migrar por primera vez', desc: 'Qué documentos necesito' },
            { seccion: 'frontera', icono: MapPin, titulo: 'Estoy por cruzar la frontera', desc: 'Con o sin pasaporte' },
            { seccion: 'regularizacion', icono: CheckCircle, titulo: 'Ya estoy en Colombia', desc: 'Necesito regularizarme' },
            { seccion: 'trabajo', icono: Briefcase, titulo: 'Busco trabajo', desc: 'Con o sin PPT' }
          ].map(item => {
            const Icono = item.icono;
            return (
              <button
                key={item.seccion}
                onClick={() => setSeccionActiva(item.seccion)}
                className="bg-white text-gray-800 p-4 rounded-lg hover:bg-gray-100 transition text-left"
              >
                <div className="flex items-start">
                  <Icono className="mr-3 flex-shrink-0 text-blue-600" size={24} />
                  <div>
                    <p className="font-semibold">{item.titulo}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border-2 border-red-500 p-5 rounded-lg">
          <AlertCircle className="text-red-500 mb-2" size={24} />
          <h3 className="font-bold text-red-800 mb-2">⚠️ PPT cerrado desde 2023</h3>
          <p className="text-sm text-red-700">El registro cerró el 28/05/2023. Solo menores de 18 años pueden solicitarlo hasta 2031.</p>
        </div>
        <div className="bg-yellow-50 border-2 border-yellow-500 p-5 rounded-lg">
          <AlertCircle className="text-yellow-600 mb-2" size={24} />
          <h3 className="font-bold text-yellow-800 mb-2">🚨 Evita trochas</h3>
          <p className="text-sm text-yellow-700">Controladas por grupos armados. Usa pasos oficiales.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <CheckCircle className="text-blue-500 mb-3" size={28} />
          <h3 className="font-bold text-lg mb-2">Gratuito</h3>
          <p className="text-sm text-gray-700">Todos los trámites oficiales son 100% gratuitos</p>
        </div>
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <Info className="text-green-500 mb-3" size={28} />
          <h3 className="font-bold text-lg mb-2">Pasaporte vencido OK</h3>
          <p className="text-sm text-gray-700 mb-1">Colombia acepta pasaportes vencidos por 10 años desde su vencimiento (Res. 2231/2021)</p>
          <p className="text-xs text-gray-600">Ejemplo: Si venció en 2020, es válido hasta 2030</p>
        </div>
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <Scale className="text-purple-500 mb-3" size={28} />
          <h3 className="font-bold text-lg mb-2">Sin pasaporte</h3>
          <p className="text-sm text-gray-700">Puedes cruzar por tierra con solo cédula</p>
        </div>
      </div>

          {/* AQUÍ AGREGAS LA IMAGEN */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">📊 Estadísticas de Migración</h3>
      <p>Al planificar tu llegada a Colombia, es útil conocer las regiones con mayor concentración de venezolanos. Estas zonas no solo ofrecen redes de apoyo, sino que también suelen ser puntos estratégicos de comercio y actividad económica, donde es más fácil encontrar trabajo, emprendimientos o negocios que atienden a la comunidad venezolana.

</p>
      <img 
        src="/estadisticas.png" 
        alt="Estadísticas de migración Venezuela-Colombia"
        className="w-full h-auto rounded-lg"
      />
    </div>

    </div>
  );

  const SeccionPreparacion = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">📋 Preparación antes de salir</h2>
      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">¿Por qué vas a migrar?</h3>
        <p className="mb-4 text-sm">Tu motivo determina los pasos a seguir:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { id: 'economico', titulo: 'Busco mejores oportunidades', desc: 'Trabajo, educación, calidad de vida' },
            { id: 'refugio', titulo: 'Huyo de persecución/peligro', desc: 'Conflicto, persecución, violencia' },
            { id: 'reunion', titulo: 'Reunificación familiar', desc: 'Tengo familia en Colombia' },
            { id: 'transito', titulo: 'Solo estoy de paso', desc: 'Voy hacia otro país' }
          ].map(motivo => (
            <button
              key={motivo.id}
              onClick={() => setMotivoMigracion(motivo.id)}
              className={`p-4 rounded-lg text-left transition ${motivoMigracion === motivo.id ? 'bg-white text-gray-800' : 'bg-white bg-opacity-20 hover:bg-opacity-30'}`}
            >
              <p className="font-semibold">{motivo.titulo}</p>
              <p className="text-xs mt-1 opacity-90">{motivo.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {motivoMigracion === 'economico' && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
          <h4 className="font-bold text-blue-800 mb-3">Migrante económico</h4>
          
                    <div className="bg-white p-4 rounded mb-4">
            <h5 className="font-semibold text-gray-800 mb-3 text-sm">🚶 Pasos fronterizos oficiales</h5>
            <p className="text-xs text-gray-700 mb-3">Usa SOLO estos puntos de control migratorio:</p>
            
            {/* Mapa visual simplificado */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg mb-4 border-2 border-blue-200">
              <div className="relative h-48 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm mb-2">
                      🇻🇪 VENEZUELA
                    </div>
                    <div className="flex items-center justify-center gap-8 my-4">
                      <div className="text-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-xs font-semibold">Táchira</div>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-xs font-semibold">Zulia</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-400 w-64 mx-auto my-2"></div>
                    <div className="flex items-center justify-center gap-8 my-4">
                      <div className="text-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-xs font-semibold">Norte de Santander</div>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-xs font-semibold">La Guajira</div>
                      </div>
                    </div>
                    <div className="inline-block bg-blue-400 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm mt-2">
                      🇨🇴 COLOMBIA
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">Principales zonas de cruce oficial</p>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Puente Simón Bolívar</p>
                    <p className="text-gray-600 text-xs">San Antonio del Táchira → Villa del Rosario (Cúcuta)</p>
                  </div>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">PRINCIPAL</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-green-700">24/7</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Flujo</p>
                    <p className="font-semibold text-green-700">Alto</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 El más transitado y con más servicios cercanos</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Puente Francisco de Paula Santander</p>
                    <p className="text-gray-600 text-xs">Ureña → Cúcuta</p>
                  </div>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">ALTERNATIVO</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-blue-700">6am-6pm</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Flujo</p>
                    <p className="font-semibold text-blue-700">Medio</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 Menos congestionado que Simón Bolívar</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Paraguachón</p>
                    <p className="text-gray-600 text-xs">Zulia → La Guajira</p>
                  </div>
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">COSTA</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-orange-700">24/7</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Destino</p>
                    <p className="font-semibold text-orange-700">Caribe</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 Para Maicao, Riohacha, Barranquilla, Santa Marta</p>
              </div>
            </div>

            <div className="bg-red-50 p-3 rounded mt-3 border-2 border-red-400">
              <p className="font-semibold text-red-700 text-sm mb-2">❌ NUNCA uses trochas:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Grupos armados</p>
                  <p className="text-xs text-gray-600">ELN, FARC disidentes</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Extorsión</p>
                  <p className="text-xs text-gray-600">Cobros ilegales, robos</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Status irregular</p>
                  <p className="text-xs text-gray-600">Riesgo de deportación</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded mb-4">
            <h5 className="font-semibold text-gray-800 mb-3 text-sm">📖 Entiende estos términos</h5>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 bg-green-50 p-3 rounded">
                <p className="font-bold text-green-800 text-xs mb-1">✅ REGULAR</p>
                <p className="text-xs text-gray-700 mb-2">Entraste por paso oficial con sello de Migración Colombia. Tienes:</p>
                <ul className="text-xs text-gray-600 ml-4 space-y-1">
                  <li>• PIP (90 días de turista)</li>
                  <li>• PPT (permiso hasta 2031)</li>
                  <li>• Visa colombiana</li>
                  <li>• Salvoconducto de refugio</li>
                </ul>
                <p className="text-xs text-green-700 font-semibold mt-2">Puedes trabajar (solo con PPT/visa), acceder a salud, educación.</p>
              </div>
              
              <div className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
                <p className="font-bold text-red-800 text-xs mb-1">❌ IRREGULAR</p>
                <p className="text-xs text-gray-700 mb-2">Entraste sin registro oficial o se venció tu permiso. Significa:</p>
                <ul className="text-xs text-gray-600 ml-4 space-y-1">
                  <li>• Cruzaste por trocha</li>
                  <li>• Tu PIP expiró (pasaron 90+ días)</li>
                  <li>• No tienes documento migratorio vigente</li>
                </ul>
                <p className="text-xs text-red-700 font-semibold mt-2">NO puedes trabajar legal, riesgo de deportación, sin acceso a servicios.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-3 text-sm">Opciones de regularización disponibles:</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Visa V de Visitante Especial:</strong> Si entraste antes del 4 dic 2024</li>
            <li>• <strong>Visa de trabajo (Tipo M):</strong> Si tienes oferta laboral</li>
            <li>• <strong>Visa de estudiante:</strong> Si tienes admisión educativa</li>
            <li>• <strong>PIP:</strong> 90 días temporales, no permite trabajar</li>
          </ul>
          <div className="bg-yellow-50 p-3 rounded mt-3">
            <p className="text-xs text-gray-700"><strong>Importante:</strong> NO solicites refugio si tu motivo es económico. Será rechazado.</p>
          </div>
        </div>
      )}
      {motivoMigracion === 'refugio' && (
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded">
          <h4 className="font-bold text-indigo-800 mb-3">Solicitante de refugio</h4>
          <p className="text-gray-700 mb-3 text-sm">El refugio es para quien huye de:</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-3">
            <li>• Persecución política, religiosa, étnica</li>
            <li>• Conflicto armado generalizado</li>
            <li>• Violencia que pone en riesgo tu vida</li>
          </ul>
          <a href="https://www.cancilleria.gov.co/determinacion-condicion-refugiado" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center">
            <ExternalLink size={14} className="mr-1" />Guía oficial para refugio
          </a>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">📄 Documentos necesarios</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
          <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ La realidad</p>
          <p className="text-xs text-gray-700">No todos tienen pasaporte o apostillas. Aquí qué es indispensable y qué no.</p>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">✅ INDISPENSABLE (mínimo para cruzar)</h4>
            <div className="text-sm mb-3">
              <p className="font-semibold">Cédula de identidad venezolana</p>
              <p className="text-xs text-gray-600 mb-2">Vigente o vencida. Puedes cruzar por tierra con solo esto (Tratado de Tonchalá).</p>
              <div className="bg-white p-2 rounded text-xs">
                <p className="font-semibold text-gray-700 mb-1">Limitación importante:</p>
                <p className="text-gray-600">Solo con cédula NO podrás volar dentro de Colombia ni será fácil regularizarte después.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🔵 MUY RECOMENDADO (para mejores opciones)</h4>
            <div className="text-sm mb-3">
              <p className="font-semibold mb-2">Pasaporte venezolano</p>
              
              <div className="bg-green-50 border-2 border-green-400 p-3 rounded mb-3">
                <p className="font-bold text-green-800 text-xs mb-2">📋 RESOLUCIÓN 2231 DE 2021 (Norma oficial)</p>
                <div className="text-xs text-gray-700 space-y-2">
                  <p className="font-semibold">Colombia acepta pasaportes venezolanos vencidos por 10 AÑOS desde su fecha de vencimiento.</p>
                  <p><strong>Esto significa:</strong></p>
                  <ul className="ml-4 space-y-1 mt-1">
                    <li>• Si tu pasaporte venció en 2020, es válido hasta 2030</li>
                    <li>• Si venció en 2015, es válido hasta 2025</li>
                    <li>• Puedes ingresar, transitar, permanecer y salir de Colombia con él</li>
                    <li>• Sirve como documento de identificación con el sello de Migración Colombia</li>
                    <li>• Puedes solicitar visa con pasaporte vencido</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700 text-xs mb-1">✅ Pasaporte vigente:</p>
                  <p className="text-xs text-gray-600">Ideal. Sin ninguna limitación. Válido para todo.</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700 text-xs mb-1">🔵 Pasaporte vencido (hace menos de 10 años):</p>
                  <p className="text-xs text-gray-600 mb-1"><strong>¡TOTALMENTE VÁLIDO por ley!</strong> Colombia lo acepta igual que uno vigente según Resolución 2231 de 2021.</p>
                  <p className="text-xs text-green-700 font-semibold">Puedes: ingresar, volar, hacer trámites, solicitar visa, regularizarte.</p>
                </div>
                
                <div className="bg-red-50 p-3 rounded border border-red-300">
                  <p className="font-semibold text-red-800 text-xs mb-1">❌ Pasaporte vencido (hace más de 10 años):</p>
                  <p className="text-xs text-gray-700 mb-1">NO es válido. Ejemplo: Si venció en 2013, ya NO sirve en 2025 (pasaron más de 10 años).</p>
                  <p className="text-xs text-gray-600">Opciones: Renovarlo o cruzar solo con cédula por tierra.</p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-3 rounded mt-3">
                <p className="text-xs font-semibold text-gray-800 mb-2">💡 Ejemplo práctico de cálculo:</p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Pasaporte venció: <strong>15 de marzo de 2018</strong></p>
                  <p>• Válido hasta: <strong>15 de marzo de 2028</strong></p>
                  <p>• En noviembre 2025: <strong>✅ SÍ es válido</strong> (faltan 2+ años)</p>
                  <p className="mt-2 pt-2 border-t border-gray-300">• Pasaporte venció: <strong>10 de enero de 2014</strong></p>
                  <p>• Válido hasta: <strong>10 de enero de 2024</strong></p>
                  <p>• En noviembre 2025: <strong>❌ NO es válido</strong> (ya pasaron los 10 años)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">💜 ÚTIL (si puedes conseguirlos)</h4>
            <ul className="text-xs space-y-2">
              <li>
                <strong>• Acta de nacimiento apostillada</strong>
                <p className="text-gray-600 ml-2">Útil para regularización, matrimonio, trámites bancarios</p>
              </li>
              <li>
                <strong>• Títulos/certificados apostillados</strong>
                <p className="text-gray-600 ml-2">Solo necesario si trabajarás en tu profesión y necesitas convalidación</p>
              </li>
              <li>
                <strong>• Carnet de vacunación</strong>
                <p className="text-gray-600 ml-2">Especialmente fiebre amarilla (requerida para algunas zonas)</p>
              </li>
              <li>
                <strong>• Antecedentes penales apostillados</strong>
                <p className="text-gray-600 ml-2">Pueden pedirlo para algunos trabajos o trámites de visa</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-semibold text-orange-800 mb-2 text-sm">💡 Resumen: ¿Tu pasaporte sirve?</h4>
            <div className="text-xs text-gray-700 space-y-2">
              <p className="font-semibold">Calcula cuándo vence la validez en Colombia:</p>
              <div className="bg-white p-3 rounded">
                <p className="mb-2"><strong>FÓRMULA:</strong> Fecha de vencimiento del pasaporte + 10 años = Válido hasta</p>
                <ul className="ml-4 space-y-1 mt-2">
                  <li>✅ <strong>Si aún no llega esa fecha:</strong> Tu pasaporte ES VÁLIDO</li>
                  <li>❌ <strong>Si ya pasó esa fecha:</strong> Tu pasaporte NO es válido</li>
                </ul>
              </div>
              <p className="mt-3"><strong>¿No tienes pasaporte válido?</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Cruza con cédula por tierra (Tratado de Tonchalá)</li>
                <li>• Una vez en Colombia, evalúa si necesitas renovar pasaporte</li>
                <li>• Puedes tramitarlo en consulado venezolano (~$100-200 USD)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">💡 Apostilla explicada</h3>
        <p className="text-gray-700 mb-3 text-sm">Certifica que tus documentos son auténticos para Colombia.</p>
        <div className="bg-yellow-50 p-4 rounded">
          <p className="font-semibold text-yellow-800 text-sm mb-2">⚠️ Realidad:</p>
          <p className="text-xs text-gray-700">Apostillar es costoso y lento en Venezuela. Solo hazlo si realmente lo necesitas. Muchos empiezan sin apostillas.</p>
        </div>
        <a href="https://legalizacionve.mppre.gob.ve/cal/static/legalizacionve/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center mt-3">
          <ExternalLink size={14} className="mr-1" />Portal de apostilla
        </a>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">📋 INFORMACIÓN LEGAL IMPORTANTE</h3>
        <div className="bg-white bg-opacity-20 p-4 rounded mb-3">
          <p className="font-bold mb-2">Resolución 2231 de 2021 - Ministerio de Relaciones Exteriores de Colombia</p>
          <p className="text-sm mb-2">Esta resolución oficial establece que:</p>
          <div className="bg-white text-gray-800 p-3 rounded text-sm space-y-2">
            <p><strong>Artículo 1:</strong> Los venezolanos pueden ingresar, transitar, permanecer y salir de Colombia con pasaporte vencido.</p>
            <p><strong>Artículo 2:</strong> El pasaporte vencido es válido durante los <strong>10 años siguientes</strong> contados desde su fecha de vencimiento.</p>
            <p><strong>Artículo 3:</strong> El pasaporte vencido con sello de Migración Colombia sirve como documento de identificación en Colombia.</p>
            <p><strong>Artículo 4:</strong> Con pasaporte vencido puedes obtener PIP (Permiso de Ingreso y Permanencia).</p>
            <p><strong>Artículo 5:</strong> Con pasaporte vencido puedes solicitar visa colombiana.</p>
          </div>
        </div>
        <div className="bg-yellow-100 text-yellow-900 p-3 rounded text-sm">
          <p className="font-semibold mb-1">⚠️ Esto significa:</p>
          <p>Si te dijeron que tu pasaporte vencido no sirve, <strong>están equivocados</strong>. La ley colombiana lo acepta por 10 años desde el vencimiento.</p>
        </div>
      </div>
    </div>
  );

  const SeccionFrontera = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🗺️ Cruzando la Frontera</h2>
      
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">¿Tienes pasaporte?</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { valor: true, titulo: 'Sí, tengo pasaporte', desc: 'Vigente o vencido hace menos de 10 años' },
            { valor: false, titulo: 'No, solo tengo cédula', desc: 'O mi pasaporte venció hace más de 10 años' }
          ].map(opt => (
            <button
              key={String(opt.valor)}
              onClick={() => setTienePasaporte(opt.valor)}
              className={`p-4 rounded-lg text-left transition ${tienePasaporte === opt.valor ? 'bg-white text-gray-800' : 'bg-white bg-opacity-20 hover:bg-opacity-30'}`}
            >
              <p className="font-semibold">{opt.titulo}</p>
              <p className="text-xs mt-1 opacity-90">{opt.desc}</p>
            </button>
          ))}
        </div>

          <div className="bg-white p-4 rounded mb-4">
            <h5 className="font-semibold text-gray-800 mb-3 text-sm">🚶 Pasos fronterizos oficiales</h5>
            <p className="text-xs text-gray-700 mb-3">Usa SOLO estos puntos de control migratorio:</p>
            
            {/* Mapa visual simplificado */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg mb-4 border-2 border-blue-200">
  <div className="relative h-96 flex items-center justify-center">
    <img 
      src="frontera.png" 
      alt="Mapa de pasos fronterizos Venezuela-Colombia"
      className="w-full h-full object-contain rounded-lg"
    />
  </div>
  <p className="text-center text-xs text-gray-600 mt-2">Principales zonas de cruce oficial</p>
</div>


<div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-lg mb-4 border-2 border-blue-200">
              <div className="relative h-48 flex items-center justify-center">
                  
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold text-sm mb-2">
                      🇻🇪 VENEZUELA
                    </div>
                    <div className="flex items-center justify-center gap-8 my-4">
                      <div className="text-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-gray-600 text-xs">Táchira</div>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-gray-600 text-xs">Zulia</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-400 w-64 mx-auto my-2"></div>
                    <div className="flex items-center justify-center gap-8 my-4">
                      <div className="text-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-gray-600 text-xs">Norte de Santander</div>
                      </div>
                      <div className="text-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                        <div className="text-gray-600 text-xs">La Guajira</div>
                      </div>
                    </div>
                    <div className="inline-block bg-blue-400 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm mt-2">
                      🇨🇴 COLOMBIA
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">Principales zonas de cruce oficial</p>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Puente Simón Bolívar</p>
                    <p className="text-gray-600 text-xs">San Antonio del Táchira → Villa del Rosario (Cúcuta)</p>
                  </div>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">PRINCIPAL</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-green-700">24/7</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Flujo</p>
                    <p className="font-semibold text-green-700">Alto</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 El más transitado y con más servicios cercanos</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Puente Francisco de Paula Santander</p>
                    <p className="text-gray-600 text-xs">Ureña → Cúcuta</p>
                  </div>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">ALTERNATIVO</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-blue-700">6am-6pm</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Flujo</p>
                    <p className="font-semibold text-blue-700">Medio</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 Menos congestionado que Simón Bolívar</p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">✅ Paraguachón</p>
                    <p className="text-gray-600 text-xs">Zulia → La Guajira</p>
                  </div>
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded font-semibold ml-2">COSTA</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Horario</p>
                    <p className="font-semibold text-orange-700">24/7</p>
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="text-gray-500">Destino</p>
                    <p className="font-semibold text-orange-700">Caribe</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">🎯 Para Maicao, Riohacha, Barranquilla, Santa Marta</p>
              </div>
            </div>

            <div className="bg-red-50 p-3 rounded mt-3 border-2 border-red-400">
              <p className="font-semibold text-red-700 text-sm mb-2">❌ NUNCA uses trochas:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Grupos armados</p>
                  <p className="text-xs text-gray-600">ELN, FARC disidentes</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Extorsión</p>
                  <p className="text-xs text-gray-600">Cobros ilegales, robos</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <p className="text-xs font-semibold text-red-700">⚠️ Status irregular</p>
                  <p className="text-xs text-gray-600">Riesgo de deportación</p>
                </div>
              </div>
            </div>
          </div>
          
      </div>

      {tienePasaporte === true && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
          <h4 className="font-bold text-green-800 text-lg mb-4">✅ Con pasaporte válido</h4>
          
          <div className="bg-blue-50 p-4 rounded mb-4 border border-blue-300">
            <p className="font-semibold text-blue-800 mb-2 text-sm">📋 Resolución 2231 de 2021</p>
            <p className="text-xs text-gray-700 mb-2">Tu pasaporte venezolano es válido en Colombia si <strong>no han pasado más de 10 años desde su vencimiento</strong>.</p>
            <p className="text-xs text-green-700 font-semibold">Puedes ingresar, volar, hacer trámites y solicitar visa con pasaporte vencido (dentro de los 10 años).</p>
          </div>

          <div className="space-y-3">
            {[
              { num: 1, titulo: 'Llega al Puesto de Control Migratorio', desc: 'Ver pasos habilitados abajo' },
              { num: 2, titulo: 'Presenta tu pasaporte', desc: 'Vigente o vencido hace menos de 10 años' },
              { num: 3, titulo: 'Recibe tu PIP', desc: 'El agente sella con días autorizados (generalmente 90 días)' },
              { num: 4, titulo: 'Ingresa a Colombia', desc: '¡Listo! Estás legal por el tiempo del PIP' }
            ].map(paso => (
              <div key={paso.num} className="flex items-start bg-white p-3 rounded">
                <div className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">{paso.num}</div>
                <div>
                  <p className="font-semibold text-sm">{paso.titulo}</p>
                  <p className="text-xs text-gray-600">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 p-4 rounded mt-4">
            <h5 className="font-semibold text-blue-800 mb-2 text-sm">¿Qué es el PIP?</h5>
            <p className="text-xs text-gray-700">Permiso de 90 días. GRATUITO. <strong>NO permite trabajar.</strong></p>
          </div>
        </div>
      )}

      {tienePasaporte === false && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h4 className="font-bold text-blue-800 text-lg mb-4">🔵 Sin pasaporte - Solo cédula</h4>
          <div className="bg-purple-50 p-4 rounded mb-4">
            <h5 className="font-semibold text-purple-800 mb-2 text-sm">Tratado de Tonchalá</h5>
            <p className="text-xs text-gray-700 mb-2">Puedes ingresar por tierra con solo cédula.</p>
            <p className="text-xs font-semibold text-purple-700">Limitaciones:</p>
            <ul className="text-xs text-gray-700 space-y-1 mt-2">
              <li>• Solo por TIERRA (no avión)</li>
              <li>• No podrás volar dentro de Colombia</li>
              <li>• Más difícil regularizarte después</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="font-semibold text-yellow-800 mb-2 text-sm">💡 Recomendación:</p>
            <p className="text-xs text-gray-700">Intenta conseguir pasaporte lo antes posible. Puedes tramitarlo en el consulado venezolano en Colombia (aproximadamente $100-200 USD).</p>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Pasos fronterizos habilitados</h3>
        <div className="space-y-3">
          {[
            { nombre: 'Puente Simón Bolívar', ubicacion: 'San Antonio - Villa del Rosario', nota: 'El más transitado' },
            { nombre: 'Puente Francisco de Paula Santander', ubicacion: 'Ureña - Cúcuta', nota: 'Alternativa' },
            { nombre: 'Paraguachón', ubicacion: 'Zulia - La Guajira', nota: 'Ruta a costa caribeña' }
          ].map((paso, i) => (
            <div key={i} className="border-l-4 border-green-500 bg-gray-50 p-4 rounded">
              <h4 className="font-bold text-sm">{paso.nombre}</h4>
              <p className="text-xs text-gray-600">{paso.ubicacion}</p>
              <p className="text-xs text-gray-700">{paso.nota}</p>
            </div>
          ))}
        </div>
        <a href="https://www.dian.gov.co/aduanas/Paginas/Pasos-de-Frontera.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs flex items-center mt-4">
          <ExternalLink size={12} className="mr-1" />Lista oficial DIAN
        </a>
      </div>

      <div className="bg-red-50 border-2 border-red-500 p-5 rounded-lg">
        <AlertCircle className="text-red-500 mb-2" size={24} />
        <h3 className="font-bold text-red-800 mb-2">🚨 NUNCA cruces por trochas</h3>
        <p className="text-sm text-red-700 mb-2">Controladas por ELN y FARC. Riesgos:</p>
        <ul className="text-xs text-red-700 space-y-1">
          <li>• Extorsión y cobros ilegales</li>
          <li>• Riesgo de secuestro</li>
          <li>• Serás irregular (deportación)</li>
          <li>• No podrás regularizarte</li>
        </ul>
      </div>

    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
  <h3 className="font-bold text-blue-800 mb-2 text-sm">ℹ️ Cómo ingresar a Colombia</h3>

  <p className="text-xs text-gray-700 mb-2">
    Para ingresar a los municipios fronterizos entre Venezuela y Colombia, el 
    Instructivo Integral de Frontera establece que se aceptan los siguientes documentos:
    <strong> pasaporte (vigente o vencido hasta 10 años), cédula de identidad venezolana,
    PEP, PPT y la Tarjeta de Movilidad Fronteriza (TMF)</strong>.
  </p>

  <p className="text-xs text-gray-700 mb-2">
    La <strong>cédula venezolana</strong> puede usarse para entrar a zona de frontera 
    (como Cúcuta, Villa del Rosario o Maicao), pero esta facilidad solo permite
    permanencia limitada a la franja fronteriza y por periodos cortos 
    (generalmente hasta 7 días según lineamientos locales).
  </p>

  <p className="text-xs text-gray-700 mb-2">
    La <strong>Resolución 2231 de 2021</strong> de la Cancillería establece que los pasaportes 
    venezolanos vencidos, hasta por 10 años, son válidos para ingresar, transitar y permanecer 
    en territorio colombiano.
  </p>

  <p className="text-xs text-gray-700">
    🔍 Importante: La <strong>TMF</strong> y la entrada con cédula venezolana 
    <strong>no permiten viajar al interior de Colombia</strong>. Solo habilitan movilidad 
    dentro de la zona fronteriza. Para desplazarte a otras ciudades o viajar en avión es 
    obligatorio usar pasaporte y hacer control migratorio oficial.
  </p>
</div>


    </div>
  );

  const SeccionRegularizacion = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">✅ Regularización</h2>
      
      <div className="bg-red-50 border-2 border-red-500 p-5 rounded-lg">
        <AlertCircle className="text-red-500 mb-2" size={28} />
        <h3 className="font-bold text-red-800 text-lg mb-3">⚠️ REALIDAD DEL PPT EN 2025</h3>
        <p className="text-red-700 font-semibold text-sm mb-2">El registro para PPT CERRÓ el 28 de mayo de 2023.</p>
        <p className="text-red-700 text-sm">Si NO te registraste antes, NO puedes solicitarlo ahora.</p>
        <div className="bg-white p-3 rounded mt-3">
          <p className="font-semibold text-green-700 mb-2 text-sm">✅ EXCEPCIONES:</p>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>• <strong>Menores de 18 años:</strong> Hasta 30 mayo 2031</li>
            <li>• <strong>PEP Tutor:</strong> Para representantes de menores con PPT (hasta abril 2026)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">🔍 ¿Cuál es tu situación?</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { id: 'ppt-vigente', titulo: '✅ Tengo PPT vigente' },
            { id: 'irregular', titulo: '❌ Estoy irregular' },
            { id: 'menor', titulo: '👶 Soy menor de 18' },
            { id: 'visa', titulo: '💼 Tengo oferta trabajo/estudio' }
          ].map(perfil => (
            <button
              key={perfil.id}
              onClick={() => setPerfilRegularizacion(perfil.id)}
              className={`p-4 rounded-lg border-2 text-left transition ${perfilRegularizacion === perfil.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <p className="font-semibold text-sm">{perfil.titulo}</p>
            </button>
          ))}
        </div>
      </div>

      {perfilRegularizacion === 'ppt-vigente' && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
          <h4 className="font-bold text-green-800 text-lg mb-3">✅ Con PPT vigente - ¡Perfecto!</h4>
          <p className="text-sm text-gray-700 mb-3">Regularizado hasta 2031. El PPT permite:</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>✅ Trabajar legalmente</li>
            <li>✅ Acceder a salud (EPS)</li>
            <li>✅ Estudiar</li>
            <li>✅ Programas sociales</li>
            <li>✅ Abrir cuentas bancarias</li>
          </ul>
          <a href="https://apps.migracioncolombia.gov.co/consultappt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center">
            <ExternalLink size={14} className="mr-1" />Consultar estado PPT
          </a>
        </div>
      )}

      {perfilRegularizacion === 'irregular' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
          <h4 className="font-bold text-red-800 text-lg mb-3">❌ Situación irregular</h4>
          <p className="text-sm text-gray-700 mb-4">Opciones disponibles:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold">1. Visa V de Visitante Especial</p>
              <p className="text-xs text-gray-600">Solo si ingresaste antes del 4 dic 2024 y tienes vínculos especiales</p>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="font-semibold">2. Visa de Trabajo (PEPFF)</p>
              <p className="text-xs text-gray-600">Si consigues empleador formal que te contrate</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded">
              <p className="font-semibold">3. Solicitud de Refugio</p>
              <p className="text-xs text-gray-600">SOLO si huyes de persecución, NO por economía</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold">4. Salir y reingresar</p>
              <p className="text-xs text-gray-600">Vuelve a Venezuela, cruza oficial y recibe PIP válido</p>
            </div>
          </div>
        </div>
      )}

      {perfilRegularizacion === 'menor' && (
        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded">
          <h4 className="font-bold text-pink-800 text-lg mb-3">👶 Menores de 18 años</h4>
          <div className="bg-green-50 p-4 rounded mb-3">
            <p className="font-semibold text-green-800 mb-2">✅ Buenas noticias</p>
            <p className="text-sm text-gray-700">Pueden acceder al PPT hasta el 30 de mayo de 2031, incluso si:</p>
            <ul className="text-sm text-gray-700 space-y-1 mt-2">
              <li>• No te registraste en 2023</li>
              <li>• Tus padres no tienen regularización</li>
              <li>• Estás en procesos del ICBF</li>
            </ul>
          </div>
          <a href="https://apps.migracioncolombia.gov.co/registro/public/formularioRegistro.jsf" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center">
            <ExternalLink size={14} className="mr-1" />Iniciar registro RUMV
          </a>
        </div>
      )}

      {perfilRegularizacion === 'visa' && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
          <h4 className="font-bold text-orange-800 text-lg mb-3">💼 Visa por trabajo o estudio</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2 text-sm">Visa de Trabajo (Tipo M):</p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>• Tu empleador debe solicitarla por ti</li>
                <li>• También puede solicitar PEPFF (más rápido y económico)</li>
                <li>• Necesitas contrato laboral formal</li>
              </ul>
              <a href="https://app2.mintrabajo.gov.co/PEPFF/login.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center mt-3">
                <ExternalLink size={14} className="mr-1" />Portal PEPFF
              </a>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2 text-sm">Visa de Estudiante:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Necesitas admisión en institución educativa reconocida</li>
                <li>• La institución puede ayudarte con el proceso</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">🏛️ Entidades</h3>
        <div className="space-y-3">
          {[
            { nombre: 'Migración Colombia', desc: 'PPT, PIP, cédula', tel: '01 8000 51 8888', url: 'https://www.migracioncolombia.gov.co/' },
            { nombre: 'Min. Relaciones Exteriores', desc: 'Visas, refugio', url: 'https://www.cancilleria.gov.co/' },
            { nombre: 'Min. del Trabajo', desc: 'PEPFF', url: 'https://www.mintrabajo.gov.co/' }
          ].map((ent, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded">
              <p className="font-semibold mb-1 text-sm">{ent.nombre}</p>
              <p className="text-xs text-gray-600 mb-2">{ent.desc}</p>
              {ent.tel && <p className="text-xs text-gray-600 mb-1">☎️ {ent.tel}</p>}
              <a href={ent.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs flex items-center">
                <ExternalLink size={12} className="mr-1" />{ent.url.replace('https://www.', '')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SeccionTrabajo = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">💼 Buscar Trabajo</h2>
      
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">¿Cuál es tu situación?</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { id: 'con-ppt', titulo: 'Tengo PPT vigente', desc: 'Puedo trabajar legalmente' },
            { id: 'sin-ppt', titulo: 'NO tengo PPT', desc: 'Necesito opciones' }
          ].map(sit => (
            <button
              key={sit.id}
              onClick={() => setSituacionLaboral(sit.id)}
              className={`p-4 rounded-lg text-left transition ${situacionLaboral === sit.id ? 'bg-white text-gray-800' : 'bg-white bg-opacity-20 hover:bg-opacity-30'}`}
            >
              <p className="font-semibold">{sit.titulo}</p>
              <p className="text-xs mt-1 opacity-90">{sit.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {situacionLaboral === 'con-ppt' && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
          <h4 className="font-bold text-green-800 text-lg mb-3">✅ Con PPT</h4>
          <p className="text-gray-700 text-sm mb-4">Puedes trabajar en cualquier actividad legal.</p>
          
          <div className="bg-white p-4 rounded mb-4">
            <p className="font-semibold mb-2 text-sm">Dónde buscar:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Portales: Computrabajo, Indeed, LinkedIn, ElEmpleo</li>
              <li>• Grupos de WhatsApp de venezolanos</li>
              <li>• Redes sociales (Facebook, grupos de empleo)</li>
              <li>• Agencias temporales: ManpowerGroup, Adecco, Kelly</li>
              <li>• Directamente en empresas</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <p className="font-semibold mb-2 text-sm">Tus derechos:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✅ Salario mínimo legal</li>
              <li>✅ Afiliación a salud (EPS)</li>
              <li>✅ Afiliación a pensión</li>
              <li>✅ Riesgos laborales (ARL)</li>
              <li>✅ Vacaciones, cesantías, primas</li>
            </ul>
          </div>
        </div>
      )}

      {situacionLaboral === 'sin-ppt' && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
          <h4 className="font-bold text-orange-800 text-lg mb-3">🔶 Sin PPT</h4>
          <div className="bg-red-50 p-4 rounded mb-4">
            <p className="font-semibold text-red-800 mb-2 text-sm">⚠️ Realidad:</p>
            <p className="text-xs text-gray-700">Sin PPT o visa, NO puedes trabajar legalmente. No tendrás contrato formal ni seguridad social.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-sm">1. PEPFF - La mejor opción</p>
              <p className="text-xs text-gray-600 mb-2">Si consigues empleador formal, él solicita tu PEPFF.</p>
              <p className="text-xs text-gray-600"><strong>Proceso:</strong> Empleador te ofrece trabajo → Solicita PEPFF → Obtienes permiso</p>
              <a href="https://app2.mintrabajo.gov.co/PEPFF/login.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs flex items-center mt-2">
                <ExternalLink size={12} className="mr-1" />Portal PEPFF
              </a>
            </div>

            <div className="bg-blue-50 p-3 rounded">
              <p className="font-semibold text-sm">2. Visa de trabajo</p>
              <p className="text-xs text-gray-600">Si el empleador prefiere, puede solicitar visa tipo M (más formal pero costoso).</p>
            </div>

            <div className="bg-green-50 p-3 rounded">
              <p className="font-semibold text-sm">3. Trabajo informal (temporal)</p>
              <p className="text-xs text-gray-600 mb-2">Mientras te regularizas:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Ventas ambulantes</li>
                <li>• Trabajo doméstico</li>
                <li>• Construcción</li>
                <li>• Gastronomía</li>
              </ul>
              <p className="text-xs text-red-600 mt-2">⚠️ Sin protección legal ni seguridad social</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded mt-4">
            <p className="font-semibold text-yellow-800 mb-2 text-sm">💡 Consejo:</p>
            <p className="text-xs text-gray-700">Prioriza regularizarte. Acepta trabajo informal para sobrevivir, pero busca empleadores formales que soliciten tu PEPFF.</p>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">🌆 Ciudades con más oportunidades</h3>
        <div className="space-y-3">
          {[
            { ciudad: 'Bogotá', desc: 'Mayor mercado laboral. Servicios, comercio, tecnología. Mayor costo.', nivel: 'Alto' },
            { ciudad: 'Medellín', desc: 'Industria, servicios, turismo. Buena calidad de vida.', nivel: 'Alto' },
            { ciudad: 'Cali', desc: 'Comercio, agricultura, servicios. Costo medio.', nivel: 'Medio' },
            { ciudad: 'Barranquilla', desc: 'Puerto, comercio, turismo. Costa caribeña.', nivel: 'Medio' },
            { ciudad: 'Cúcuta', desc: 'Mayor comunidad venezolana. Comercio fronterizo. Menor costo.', nivel: 'Medio' }
          ].map((item, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm">{item.ciudad}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded whitespace-nowrap ml-2">{item.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SeccionSalud = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🏥 Salud</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Sistema de salud</h3>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-bold text-green-800 mb-2">Con PPT o estatus regular</h4>
            <p className="text-gray-700 text-sm mb-2">Puedes afiliarte al Sistema de Seguridad Social en Salud (SGSSS)</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Régimen contributivo (si trabajas formalmente)</li>
              <li>• Régimen subsidiado (si cumples requisitos de vulnerabilidad)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold text-yellow-800 mb-2">Sin regularización</h4>
            <p className="text-gray-700 text-sm">Derecho a atención de urgencias vitales en hospitales públicos</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Números de emergencia</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded">
            <Phone className="text-red-500 mb-2" size={24} />
            <p className="font-bold text-lg">123</p>
            <p className="text-sm text-gray-700">Emergencias médicas</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <Phone className="text-blue-500 mb-2" size={24} />
            <p className="font-bold text-lg">125</p>
            <p className="text-sm text-gray-700">Línea atención en salud</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionEducacion = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🎓 Educación</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Educación básica (menores)</h3>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-4">
          <p className="text-gray-700 mb-2 text-sm">Todos los niños tienen derecho a educación en Colombia, sin importar estatus migratorio.</p>
          <p className="text-sm text-gray-600">Las escuelas públicas NO pueden negar acceso por falta de documentos.</p>
        </div>
        
        <h4 className="font-semibold mb-3">Documentos necesarios:</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Certificados de estudios anteriores (apostillados si es posible)</li>
          <li>• Documento de identidad (pasaporte, PPT, o registro civil)</li>
          <li>• Carnet de vacunas</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Convalidación de títulos universitarios</h3>
        <p className="text-gray-700 mb-4 text-sm">Para ejercer profesionalmente, debes convalidar tu título ante el Ministerio de Educación.</p>
        <div className="space-y-3">
          {[
            { num: 1, titulo: 'Apostilla tu título', desc: 'En Venezuela, antes de viajar' },
            { num: 2, titulo: 'Solicita la convalidación', desc: 'Ministerio de Educación de Colombia' },
            { num: 3, titulo: 'Espera la resolución', desc: 'Puede tomar varios meses' }
          ].map(paso => (
            <div key={paso.num} className="flex items-start">
              <div className="bg-purple-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">{paso.num}</div>
              <div>
                <p className="font-semibold text-sm">{paso.titulo}</p>
                <p className="text-xs text-gray-600">{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Opciones de formación</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-sm">SENA</p>
            <p className="text-xs text-gray-600">Cursos técnicos y tecnológicos gratuitos</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="font-semibold text-sm">Universidades públicas</p>
            <p className="text-xs text-gray-600">Pregrados y posgrados con costos accesibles</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SeccionVivienda = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🏠 Vivienda</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Opciones de alojamiento</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-blue-800 mb-2">Temporal</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Hostales y residencias</li>
              <li>• Hoteles económicos</li>
              <li>• Casas de acogida (ONG)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <h4 className="font-bold text-green-800 mb-2">Arrendamiento</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Habitaciones en arriendo</li>
              <li>• Apartamentos compartidos</li>
              <li>• Apartamentos independientes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Consejos para arrendar</h3>
        <div className="space-y-3">
          {[
            'Verifica que el propietario sea el dueño legítimo',
            'Lee el contrato cuidadosamente',
            'Toma fotos al momento de entrar',
            'Exige recibo por cada pago',
            'El depósito no debe superar un mes'
          ].map((consejo, i) => (
            <div key={i} className="flex items-start p-3 bg-gray-50 rounded">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
              <p className="text-gray-700 text-sm">{consejo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-800 mb-2">⚠️ Cuidado con estafas</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• No pagues sin ver el inmueble</li>
          <li>• Desconfía de precios muy bajos</li>
          <li>• No entregues dinero sin contrato</li>
        </ul>
      </div>
    </div>
  );

  const SeccionComunidad = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">👥 Comunidad</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">🏛️ Organizaciones de apoyo</h3>
        <div className="space-y-4">
          {[
            { nombre: 'ACNUR', desc: 'Protección a refugiados, asesoría legal', url: 'https://www.acnur.org' },
            { nombre: 'OIM', desc: 'Apoyo migración segura, orientación', url: 'https://colombia.iom.int' },
            { nombre: 'Cruz Roja', desc: 'Asistencia humanitaria inmediata', url: 'https://www.cruzrojacolombiana.org' },
            { nombre: 'HIAS', desc: 'Acompañamiento psicosocial y legal', url: 'https://www.hias.org/where/colombia' }
          ].map((org, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-1">{org.nombre}</h4>
              <p className="text-xs text-gray-700 mb-2">{org.desc}</p>
              <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs flex items-center">
                <ExternalLink size={12} className="mr-1" />{org.url.replace('https://www.', '')}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">💬 Grupos comunitarios</h3>
        <div className="bg-green-50 p-4 rounded mb-3">
          <h4 className="font-semibold mb-2 text-sm">Grupos de WhatsApp/Telegram</h4>
          <p className="text-xs text-gray-700 mb-2">Comparten información sobre trabajo, vivienda, trámites</p>
          <div className="bg-yellow-50 p-3 rounded mt-2">
            <p className="text-xs font-semibold text-yellow-800 mb-1">⚠️ Precauciones:</p>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• Verifica información con fuentes oficiales</li>
              <li>• NO compartas datos personales sensibles</li>
              <li>• Cuidado con estafas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">🤝 Integración cultural</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { titulo: 'Lenguaje', desc: 'Menos tuteo, más "usted". Expresiones diferentes' },
            { titulo: 'Ritmo de vida', desc: 'Varía por ciudad. Bogotá más acelerada' },
            { titulo: 'Gastronomía', desc: 'Muy variada por regiones' },
            { titulo: 'Horarios', desc: 'Almuerzo 12-2pm. Cena más temprano' }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-sm mb-1">{item.titulo}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Nuevo grupo agregado */}
        <div className="bg-white border border-green-200 p-3 rounded mb-3">
          <p className="font-semibold text-sm mb-1 text-green-800">Grupo: Venezolanos en Colombia 🇻🇪🇨🇴</p>
          <a
            href="https://chat.whatsapp.com/HctRiXeikl98UJ1G9hpdxZ?mode=ems_copy_c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 text-xs flex items-center"
          >
            <ExternalLink size={12} className="mr-1" />
            Abrir grupo en WhatsApp
          </a>

           <img 
        src="/grupo.png" 
        alt="Estadísticas de migración Venezuela-Colombia"
        className="w-full h-auto rounded-lg"
      />
        </div>

    </div>
  );

  const SeccionEmergencia = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🚨 Emergencias</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { num: '123', desc: 'Emergencias (Policía, Bomberos, Ambulancia)', color: 'red' },
          { num: '122', desc: 'Policía Nacional', color: 'blue' },
          { num: '119', desc: 'Cruz Roja', color: 'green' },
          { num: '141', desc: 'Fiscalía (denuncias)', color: 'purple' }
        ].map((em, i) => (
          <div key={i} className={`bg-${em.color}-50 p-6 rounded-lg shadow border-l-4 border-${em.color}-500`}>
            <Phone className={`text-${em.color}-500 mb-2`} size={24} />
            <p className="font-bold text-xl">{em.num}</p>
            <p className="text-sm text-gray-700">{em.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Migración Colombia</h3>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded">
            <p className="font-semibold mb-1">Línea gratuita nacional</p>
            <p className="text-2xl font-bold text-blue-600">01 8000 51 8888</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <p className="font-semibold mb-1">Correo</p>
            <p className="text-blue-600 text-sm">info@migracioncolombia.gov.co</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Violencia de género y LGBTI+</h3>
        <div className="space-y-3">
          <div className="p-4 bg-pink-50 rounded">
            <p className="font-semibold mb-1">Línea 155</p>
            <p className="text-sm text-gray-700">Orientación a mujeres víctimas de violencia</p>
          </div>
          <div className="p-4 bg-purple-50 rounded">
            <p className="font-semibold mb-2">Caribe Afirmativo</p>
            <p className="text-sm text-gray-700 mb-2">Atención a casos de VBG de personas LGBTI+ migrantes</p>
            <a href="https://caribeafirmativo.lgbt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center">
              <ExternalLink size={14} className="mr-1" />Visitar sitio web
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSeccion = () => {
    switch(seccionActiva) {
      case 'inicio': return <SeccionInicio />;
      case 'preparacion': return <SeccionPreparacion />;
      case 'frontera': return <SeccionFrontera />;
      case 'regularizacion': return <SeccionRegularizacion />;
      case 'trabajo': return <SeccionTrabajo />;
      case 'salud': return <SeccionSalud />;
      case 'educacion': return <SeccionEducacion />;
      case 'vivienda': return <SeccionVivienda />;
      case 'comunidad': return <SeccionComunidad />;
      case 'emergencia': return <SeccionEmergencia />;
      default: return <SeccionInicio />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Map size={32} />
              <div>
                <h1 className="text-2xl font-bold">Guía de Migración</h1>
                <p className="text-sm opacity-90">Venezuela → Colombia</p>
              </div>
            </div>
            <button 
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded"
            >
              {menuAbierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className={`md:w-64 ${menuAbierto ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">Contenido</h3>
              <nav className="space-y-2">
                {secciones.map(seccion => {
                  const Icono = seccion.icono;
                  return (
                    <button
                      key={seccion.id}
                      onClick={() => {
                        setSeccionActiva(seccion.id);
                        setMenuAbierto(false);
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                        seccionActiva === seccion.id
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Icono size={20} />
                      <span className="text-sm font-medium">{seccion.nombre}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              {renderSeccion()}
            </div>
          </main>
        </div>
      </div>

      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Información actualizada a noviembre de 2025</p>
          <p className="text-sm text-gray-400 mb-4">
            Esta guía es informativa. Verifica siempre con fuentes oficiales.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.migracioncolombia.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Migración Colombia
            </a>
            <a 
              href="https://www.cancilleria.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Cancillería
            </a>
            <a 
              href="https://www.mintrabajo.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Min. Trabajo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuiaMigracionCompleta;