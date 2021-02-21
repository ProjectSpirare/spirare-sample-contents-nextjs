import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Text from '../components/Text'

export default function Home () {
  return (
    <scene>
      <primitive shape="cube" id="fix_world_position" scale="0.2 0.2 0.2">
        <script src="./wasm/fix_transform.wasm" args="--position 0.3 0.3 0.1 --world" />
      </primitive>
      <primitive shape="cube" id="fix_local_position" scale="0.2 0.2 0.2">
        <script src="./wasm/fix_transform.wasm" args="--position 0.3 0.6 0.1 --local" />
      </primitive>
      <primitive shape="sphere" position="1 0.1 1" scale="0.1 0.1 0.3" />
      <model src="./gun/gun.glb" position="1 0 0.1" />
      <Text text="aa"/>
    </scene>
  )
}
