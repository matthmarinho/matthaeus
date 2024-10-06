"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./_components/ui/card"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import Link from "next/link"
// import { Libre_Barcode_128 } from 'next/font/google'
import { Switch } from "./_components/ui/switch"
import { useState } from "react"

// const barcode = Libre_Barcode_128({
//   weight: "400",
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-barcode-128',
// })

export default function Home() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div className={`md:w-3/4 ${isOn ? "crt" : ""}`}>
      <div className="flex flex-row space-x-2 px-4 pt-4">
        <div className="flex w-full flex-row justify-between bg-primary">
          <h1 className="text-nowrap px-2 pt-2 text-xl font-semibold text-accent-foreground">
            ➜ matthaeus
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p>CRT</p>
          <Switch checked={isOn} onCheckedChange={setIsOn} />
        </div>
      </div>

      {/* <BlinkBlocks /> */}

      <div className="grid grid-flow-row gap-4 px-4 pt-4 md:grid-cols-3">
        <div className="flex w-full flex-row md:col-span-2 md:col-start-3 md:row-start-1">
          <div className="w-full bg-[repeating-linear-gradient(45deg,#fafafa,#fafafa_10px,transparent_10px,transparent_20px)]"></div>
          <div className="flex w-fit flex-col justify-around bg-background pl-2">
            <p className="leading-4">PERSONAL▪</p>
            <p className="leading-4">PORTFOLIO</p>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-3">
          <Card>
            <CardHeader>
              <CardTitle>➜ ABOUT ME</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row space-x-4">
                <div className="relative h-[159px] w-full">
                  <Image
                    alt="Sabrino"
                    fill
                    className="object-cover"
                    src="/pxArt.png"
                  />
                </div>

                <p className="text-justify">
                  Full stack developer, passionate about creating efficient,
                  scalable solutions and delivering seamless user experiences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex w-full flex-row md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-2">
          <Card>
            <CardHeader>
              <CardTitle>➜ RESUME</CardTitle>
              <CardDescription>2024 CV</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={"/"}>DOWNLOAD</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href={"/"}>VIEW</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* <CardFooter>
              <Image
                alt="Download resume"
                src="/download-alt-solid.svg"
                width={18}
                height={18}
              />
              <Image
                alt="Download resume"
                src="/eye-solid.svg"
                width={18}
                height={18}
              />
            </CardFooter> */}
        </div>
      </div>

      {/* <div className="px-4 pt-4 flex flex-col gap-4 md:flex-row">
        <div className="md:basis-1/2">
          <Card>
            <CardHeader>
              <CardTitle>about me.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Full stack developer, passionate about creating efficient, scalable solutions
                and delivering seamless user experiences.</p>
            </CardContent>
          </Card>
        </div>
        <div className="gap-4 flex flex-col grow">
          <div className="w-full flex flex-row grow-0 bg-black">personal portfolio.</div>
          <div className="w-full flex flex-row flex-auto bg-black">resume.</div>
        </div>
      </div> */}

      <div className="grid grid-rows-3 gap-4 px-4 pt-4 md:grid-cols-6">
        <div className="flex w-full flex-row">
          <Button variant="outline" className="h-full w-full" asChild>
            <Link href={"/"}>LINKEDIN</Link>
          </Button>
        </div>
        <div className="col-start-1 row-start-2 flex w-full flex-row">
          <Button variant="outline" className="h-full w-full" asChild>
            <Link href={"/"}>GITHUB</Link>
          </Button>
        </div>
        <div className="col-start-1 row-start-3 flex w-full flex-row">
          <Button variant="outline" className="h-full w-full" asChild>
            <Link href={"/"}>EMAIL</Link>
          </Button>
        </div>
        <div className="col-span-2 col-start-2 row-span-3 row-start-1 flex w-full flex-row">
          <Card>
            <CardHeader>
              <CardTitle>➜ TECH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Full stack developer, passionate about creating efficient,
                scalable solutions and delivering seamless user experiences.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 flex w-full flex-row bg-black md:col-start-4 md:row-span-3 md:row-start-1">
          <Card>
            <CardHeader>
              <CardTitle>➜ EXPERIENCE</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Full stack developer, passionate about creating efficient,
                scalable solutions and delivering seamless user experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 px-4 pt-4 md:grid-cols-2">
        <div className="flex w-full flex-row bg-black">project 1.</div>
        <div className="flex w-full flex-row bg-black">project 2.</div>
      </div>

      {/* <h2 className="hero glitch layers font-retron" data-text="matthaeus."><span>matthaeus.</span></h2> */}
      {/* <div title="matthaeus.">matthaeus.</div> */}
      {/* <MiniBot /> */}
    </div>
  )
}
