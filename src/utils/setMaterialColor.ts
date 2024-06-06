import { Color } from 'three'
import { Material } from '@/types'

export const setMaterialColor = (material: Material, color: string) => {
  const materialId = material[0]
  const materialOptions = material[1]

  const isFrontFrame = materialId === 'zFdeDaGNRwzccye'
  const isFrontCamera = materialId === 'ujsvqBWRMnqdwPx'
  const isBackCamera = materialId === 'PaletteMaterial003'
  const isBackCameraLenseOutline = materialId === 'PpwUTnTFZJXxCoE'
  const isBackCameraDot = materialId === 'vhaEJjZoqGtyLdo'
  const isSide = materialId === 'eShKpuMNVJTRrgg'

  if (!isFrontFrame && !isFrontCamera) {
    materialOptions.color = new Color(color)
  }

  if (isBackCamera || isBackCameraLenseOutline || isBackCameraDot) {
    materialOptions.emissive = new Color(color)
  }

  if (isSide) {
    materialOptions.roughness = 1.8
  }
}
