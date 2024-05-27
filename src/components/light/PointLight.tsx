type Props = {
  x: number
  y: number
}

const PointLight = ({ x, y }: Props) => {
  return <pointLight position={[x, y, -0.1]} intensity={40} decay={0.1} />
}

export default PointLight
