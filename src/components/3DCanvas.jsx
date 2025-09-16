import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RenderCanvas() {
    

    function MakeBox(){
        let obj1 = useRef()
        useFrame((state, delta)=>(obj1.current.rotation.y += delta/2))
        
        return(
            <mesh ref={obj1}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"yellow"}/>
            </mesh>
        )
    }

    return (
        <Canvas>
            <ambientLight color={"white"} intensity={2}/>

            <MakeBox></MakeBox>
        </Canvas>
    )
}


export default RenderCanvas