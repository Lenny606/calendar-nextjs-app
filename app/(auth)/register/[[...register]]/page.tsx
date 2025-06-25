import { SignUp } from "@clerk/nextjs"
import Image from "next/image"

export default function RegisterPage() {
    return (
        <main className="flex flex-col items-center gap-10 p-5 animate-fade-in">
            <Image src={"/assets/"}
                width={100}
                height={100}
                alt="logo">

            </Image>
            <div className="mt-3">
                <SignUp></SignUp>
            </div>
        </main>
    )
}