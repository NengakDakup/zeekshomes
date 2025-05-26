'use client'

import { useState } from 'react'
import { GLTFModel } from 'react-3d-viewer'

export default function ModelViewer({ modelUrl }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <div className="w-full h-full min-h-[400px] relative bg-gray-100 rounded-lg">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2" />
            <p>Loading 3D Model...</p>
          </div>
        </div>
      )}

      <GLTFModel
        src={modelUrl}
        width={800}
        height={400}
        backgroundColor="#f0f0f0"
        onLoad={() => setLoading(false)}
        onError={(e) => setError(e)}
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: 0, y: 0, z: 0 }}
        zoom={1}
      />

      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-500 bg-white p-4 rounded-lg shadow">
            Error loading model: {error.message}
          </div>
        </div>
      )}
    </div>
  )
}
