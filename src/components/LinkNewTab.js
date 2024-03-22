import React, { useState } from "react";
import { useRef } from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
import { useEffect } from "react";
import useHover from "../hooks/useHover";

const LinkNewTab = () => {
  const { hovered, nodeRef } = useHover();
  return (
    <div>
      <button
        className={`w-[100px] p-5 ${hovered ? "bg-blue-500" : ""} `}
        ref={nodeRef}
      >
        submit
      </button>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        cumque aliquam pariatur voluptatibus ipsa? Atque animi voluptates ea ut
        recusandae! Itaque nisi inventore mollitia quis eius quam provident
        optio accusantium ipsum. Ex, ratione ea, exercitationem ipsam excepturi
        repellat ad officia, consectetur incidunt quo sed tempora fuga id
        dignissimos molestiae. Aperiam.:{" "}
        <a className={`underline `} href="https://www.google.com/">
          google
        </a>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        cumque aliquam pariatur voluptatibus ipsa? Atque animi voluptates ea ut
        recusandae! Itaque nisi inventore mollitia quis eius quam provident
        optio accusantium ipsum. Ex, ratione ea, exercitationem ipsam excepturi
        repellat ad officia, consectetur incidunt quo sed tempora fuga id
        dignissimos molestiae. Aperiam.:{" "}
        <a href="https://www.google.com/">google</a>
      </div>
    </div>
  );
};

export default LinkNewTab;
