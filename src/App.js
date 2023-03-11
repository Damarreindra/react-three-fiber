import logo from "./logo.svg";
import "./App.css";
import { Environment, Float, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Butterfly } from "./models/Butterfly";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";

function App() {
  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} shadowBias={-0.0001} />
      <Environment preset="warehouse" />

      
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          <Float 
          speed={1}
          rotationIntensity={2}
          floatIntensity={0.2}
          floatingRange={[1,1]}
          >
           <Butterfly rotation-x={Math.PI * 0.05} scale={0.05} position={[0,-2.5,0]}/>
        <Butterfly scale={0.05} position={[-10,-3,-6]}/>
        <Butterfly scale={0.05} position={[10,-4,-10]}/>   
          </Float>

          <Float 
          speed={1}
          rotationIntensity={2}
          floatIntensity={0.2}
          floatingRange={[1,1]}
          >
          <Butterfly scale={0.05} position={[-1, -13, 0]} />
          <Butterfly scale={0.05} position={[12, -14.5, -10]} />
         
          </Float>

          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Life can be so fcking HARDDDD
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0 30px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    But chill dont give up!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
