import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils.js";


function RenderCanvas() {
    

    function MakeBox(){
        let [isClicked, setClick] = useState(false)

        let obj1 = useRef()
        useFrame(
            (state, delta)=>
                {
                    obj1.current.rotation.y += (isClicked ? -delta/2 : delta/2);
                    obj1.current.scale.y = lerp(obj1.current.scale.y, isClicked ? 2 : 1, delta*8)
                }
        )
        return(
            <mesh ref={obj1} onClick={()=>{setClick(!isClicked)}}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={isClicked ? "#121212" : "#eee"}/>
            </mesh>
        )
    }

    return (
        <Canvas>
            <ambientLight color={"white"} intensity={1}/>
            <directionalLight color={"white"} position={[3, 2, 0]}/>
            <MakeBox></MakeBox>
        </Canvas>
    )
}


export default RenderCanvas