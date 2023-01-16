import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Body() {
  return (
    <div>
      <section className=" text-amber-600 bg-gradient-to-br from-stone-900 via-stone-900 to-orange-900 backdrop-blur-md">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg border-2 border-amber-800"
              src="/bground.jpg"
              alt="blob"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-amber-300">
              About me
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork
              pour-over freegan heirloom neutra air plant cold-pressed tacos
              poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
              hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
        <hr
          style={{
            color: "#3f2e2cc0",
            backgroundColor: "#cac48a",
            height: 6,
            borderColor: "#3f2e2cc0",
          }}
        />
      </section>

      <section className="bg-gradient-to-br from-orange-900 via-stone-900 to-stone-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 hover:scale-105">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden glass bg-gradient-to-t from-red-900 via-stone-900 to-stone-900">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/nonVeg.jpg"
                  alt="blob"
                  width={500}
                  height={500}
                ></Image>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-red-400 mb-3">
                    NON VEGETARIAN
                  </h1>
                  <p className="leading-relaxed mb-3 text-amber-100">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/non_veg">
                      <button className="flex items-center mt-auto text-white bg-red-800 border-0 py-2 px-4 w-auto focus:outline-none hover:bg-red-700 rounded">
                        Non Vegetarian
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hover:scale-105">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden glass bg-gradient-to-t from-lime-900 via-stone-900 to-stone-900 ">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/veg_1.png"
                  alt="blob"
                  width={500}
                  height={500}
                ></Image>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-lime-400 mb-3">
                    VEGETARIAN
                  </h1>
                  <p className="leading-relaxed mb-3 text-amber-100">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/veg">
                      <button className="flex items-center mt-auto text-white bg-lime-800 border-0 py-2 px-4 w-auto focus:outline-none hover:bg-lime-700 rounded">
                        Vegetarian
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hover:scale-105">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden glass bg-gradient-to-t from-yellow-900 via-stone-900 to-stone-900">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/sweets.PNG"
                  alt="blob"
                  width={500}
                  height={500}
                ></Image>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-yellow-400 mb-3">
                    SWEETS & DESERTS
                  </h1>
                  <p className="leading-relaxed mb-3 text-amber-100">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/sweets">
                      <button className="flex text-center mt-auto text-white bg-yellow-800 border-0 py-2 px-4 w-auto focus:outline-none hover:bg-yellow-700 rounded">
                        Sweets
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 md:w-1/3 hover:scale-105">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden glass bg-gradient-to-t from-gray-900 via-stone-900 to-stone-900">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/snacks.PNG"
                  alt="blob"
                  width={500}
                  height={500}
                ></Image>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
                    SNACKS & CHAI
                  </h1>
                  <p className="leading-relaxed mb-3 text-amber-100">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/snacks">
                      <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-auto focus:outline-none hover:bg-gray-700 rounded">
                        Snacks
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "#3f2e2cc0",
            backgroundColor: "#cac48a",
            height: 6,
            borderColor: "#3f2e2cc0",
          }}
        />
      </section>
    </div>
  );
}