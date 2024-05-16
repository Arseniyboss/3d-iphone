const Lights = () => {
  return (
    <>
      <ambientLight intensity={20} />
      <directionalLight intensity={20} position={[5, 1, 1]} />
      <directionalLight intensity={20} position={[-5, 1, 1]} />
      <directionalLight intensity={10} position={[1, 5, 1]} />
      <directionalLight intensity={10} position={[1, -5, 1]} />
    </>
  )
}

export default Lights
