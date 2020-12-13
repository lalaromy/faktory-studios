import Link from "next/link";
import React, { useState, useEffect } from "react";
import { WrapperCircle, WrapperCircleMobile, Circle, Number, CircleMobile, NumberMobile } from "../styles/styles"
import Menu from "./menu";
import { BrowserView, MobileView } from "react-device-detect";

const CircleMenu = () => {
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    setCurrentPath(path[1]);
  }, []);

  const data = [
    {
      index: 1,
      url: "cmt"
    },
    {
      index: 2,
      url: "manufacturing-fpp"
    },
    {
      index: 3,
      url: "pattern-making"
    },
    {
      index: 4,
      url: "fabric-trim-sourcing"
    },
    {
      index: 5,
      url: "apparel-production"
    },
    {
      index: 6,
      url: "photography"
    },
    {
      index: 7,
      url: "shipping"
    },
    {
      index: 8,
      url: "about"
    }
  ];

  console.log("currentPath", currentPath);
  return (
    <WrapperCircle>
      {data.map(item => {
        return (
          <Link
            style={{
              textDecoration: currentPath === item.url ? "" : "none",
              color: currentPath === item.url ? "black" : "black"
            }}
            href={`/` + item.url}
          >
            <Circle
              style={{
                background: currentPath === item.url ? "white" : "black"
              }}
            >
              <Number
                style={{
                  color: currentPath === item.url ? "black" : "white"
                }}
              >
                {item.index}
              </Number>
            </Circle>
          </Link>
        );
      })}
    </WrapperCircle>
  );
};

export default CircleMenu;
