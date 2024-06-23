"use client";
import { images } from "@/data/galery";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Gallery() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  function handleChangeState(src) {
    setIsActiveModal(true);
    setCurrentImage(src);
  }
  return (
    <>
             
        <ul className="list">
          {images.map((el, index) => (
            <li key={index}>
              <Image
                src={el.src}
                alt='exurs photo'
                width={160}
                height={80}
                className="cursor-pointer transition duration-150 hover:scale-110"
                onClick={() => handleChangeState(el.id)}
              />
            </li>
          ))}
        </ul>
      
      <Modal
        setCurrentImage={setCurrentImage}
        currentImage={currentImage}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
    </>
  );
}