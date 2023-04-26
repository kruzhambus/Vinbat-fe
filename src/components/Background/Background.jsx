//import "../styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Background.css"

export default function Background() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="particles">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ff3c3c"
            },
            links: {
              color: "#ff3c3c85",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 70,
                limit: 100
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
}
