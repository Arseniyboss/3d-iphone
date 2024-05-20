import PointLight from './PointLight'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={25} />
      <PointLight x={10} y={0} />
      <PointLight x={-10} y={0} />
      <PointLight x={0} y={10} />
      <PointLight x={0} y={-10} />
    </>
  )
}

export default Lights
