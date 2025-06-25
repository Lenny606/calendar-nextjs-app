"use client"
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

export default function LandingPage() {

    return (
        <main className="max-md:flex-col flex items-center p-10 gap-24 animate-fade-in">
            <section className="flex flex-col items-center">
                <Image src={"/assets/"}
                    width={500}
                    height={500}
                    alt="logo">

                </Image>

                <h1 className="text-2xl lg:text-3xl font-black">
                    Calendar App
                </h1>

                <p className="font-extralight">
                    Short description
                </p>

                <Image src={"/assets/"}
                    width={500}
                    height={500}
                    alt="logo">

                </Image>
            </section>

            <section className="mt-3">
                <SignIn
                    routing="hash"
                    appearance={{
                        baseTheme: neobrutalism
                    }}></SignIn>
            </section>
        </main>
    )
}