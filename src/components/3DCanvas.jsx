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
            <mesh ref={obj1} onClick={(e)=>{setClick(!isClicked)}}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={isClicked ? "yellow" : "purple"}/>
            </mesh>
        )
    }

    return (
        <Canvas>
            

            <ambientLight color={"white"} intensity={1}/>
            <directionalLight color={"white"} position={[3, 2, 0]}/>
            <MakeBox></MakeBox>

            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[10,.05,10]}/>
                <meshStandardMaterial color={"grey"}/>
            </mesh>
        </Canvas>
    )
}


export default RenderCanvas