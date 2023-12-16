import { StatusBar } from "expo-status-bar";
import { Canvas } from "@react-three/fiber";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    </Canvas>
  );
}
