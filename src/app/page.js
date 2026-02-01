"use client"
import * as RSP from "@dist/react-spacial";
import { useEffect, useState } from "react";

function BGBox({ style = {}, children }) {
  return (
    <RSP.SpacialImage
      spacial={false}
      src="./img/spacial/kutc.jpg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      rounded={10}
    >
      {children}
    </RSP.SpacialImage>
  )
}

export default function Home() {
  const [neko, setNeko] = useState([]);
  useEffect(() => {
    setNeko(Array(10).fill(0).map(() => ({
      shift: Math.random()*30,
      pos: {
        top: `${~~(Math.random() * 60 + 20)}%`,
        left: `${~~(Math.random() * 60 + 20)}%`,
      }
    })))
  }, []);
  return (
    <RSP.SpacialBody
      style={{
        padding: "2rem 0 10rem 0",
      }}
    >
      <h1>Home</h1>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <div>
          <RSP.SpacialImages src={[
            "./img/spacial/IMG_2396_left.jpg",
            "./img/spacial/IMG_2396_left.jpg",
          ]}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <RSP.SpacialImages src={[
            "./img/spacial/IMG_2396_right.jpg",
            "./img/spacial/IMG_2396_left.jpg",
          ]}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常写真</h2>
        <div>
          <RSP.SpacialImage spacial={false} rounded={10} src="./img/spacial/kutc.jpg" />
        </div>
        <h2>空間写真</h2>
        <div>
          <RSP.SpacialImage rounded={10} src="./img/spacial/kutc.jpg" />
        </div>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常写真</h2>
        <div>
          <RSP.SpacialImage spacial={false} rounded={10} src="./img/spacial/lab.jpg" />
        </div>
        <h2>空間写真</h2>
        <div>
          <RSP.SpacialImage rounded={10} src="./img/spacial/lab.jpg" />
        </div>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常写真</h2>
        <div>
          <RSP.SpacialImage spacial={false} rounded={10} src="./img/spacial/tokyoStation.jpg" />
        </div>
        <h2>空間写真</h2>
        <div>
          <RSP.SpacialImage rounded={10} src="./img/spacial/tokyoStation.jpg" />
        </div>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常写真</h2>
        <div>
          <RSP.SpacialImage spacial={false} rounded={10} src="./img/spacial/tokyoBus.jpg" />
        </div>
        <h2>空間写真</h2>
        <div>
          <RSP.SpacialImage rounded={10} src="./img/spacial/tokyoBus.jpg" />
        </div>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常の重ね画像</h2>
        <BGBox>
          <RSP.SpacialContainer shift={0}>
            <img
              src="./img/neko512.png"
              alt="spacial neko"
              style={{
                width: "10vw"
              }}
            />
          </RSP.SpacialContainer>
        </BGBox>

        <h2>奥行き感のある重ね画像</h2>
        <BGBox>
          <RSP.SpacialContainer shift={1}>
            <img
              src="./img/neko512.png"
              alt="spacial neko"
              style={{
                width: "10vw"
              }}
            />
          </RSP.SpacialContainer>
        </BGBox>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>通常の重ね文字</h2>
        <BGBox style={{
          fontSize: "3vw",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 0 10px black",
        }}>
          <RSP.SpacialContainer
            shift={0}
            rounded={10}
            style={{
              fontSize: "3vw",
              fontWeight: "bold",
              color: "white",
              textShadow: "0 0 10px black",
            }}
          >
            React Spacial
          </RSP.SpacialContainer>
        </BGBox>

        <h2>奥行き感のある重ね文字</h2>
        <BGBox style={{
          fontSize: "3vw",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 0 10px black",
        }}>
          <RSP.SpacialContainer shift={1}>
            React Spacial
          </RSP.SpacialContainer>
        </BGBox>
      </div>

      <div style={{
        textAlign: "center",
        padding: "0 10%",
      }}>
        <h2>複数画像</h2>
        <BGBox style={{
          fontSize: "3vw",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 0 10px black",
          position: "relative",
        }}>
          {neko.map((n, i) => {
            return (
              <RSP.SpacialContainer
                key={i}
                style={{
                  position: "absolute",
                  ...n.pos,
                }}
                shift={n.shift}
              >
                <img
                  src="./img/neko512.png"
                  alt="spacial neko"
                  style={{ width: "3vw" }}
                />
              </RSP.SpacialContainer>
            )
          })}
        </BGBox>
      </div>
      <div style={{
        textAlign: "center",
        padding: "0 20%",
      }}>
        <h2>インライン</h2>
        <p>
          react-spacialは、
          {" "}
          <RSP.SpacialContainer inline shift={3}>
            インライン要素
          </RSP.SpacialContainer>
          {" "}
          にも対応しています。
        </p>
      </div>
    </RSP.SpacialBody>
  );
}
