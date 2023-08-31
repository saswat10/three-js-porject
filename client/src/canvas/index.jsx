import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Backdrop from './Backdrop'
import Shirt from './Shirt'
import CameraRig from './CameraRig'

const CanvasModel = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 18 }}
			style={{ height: '25rem' }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full max-w-full h-screen transition-all ease-in'
		>
			<ambientLight intensity={0.11} >
			<Environment preset='city' />

			<CameraRig>
				<Backdrop />
				<Center>
					<Shirt />
				</Center>
			</CameraRig>
      </ambientLight>
		</Canvas>
	)
}

export default CanvasModel
