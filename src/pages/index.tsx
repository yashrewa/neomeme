import { SignInButton, SignOutButton, SignUpButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { isSignedIn } = useUser()
  const puraUser = useUser()
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen text-white  flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {console.log(puraUser)}
        {!isSignedIn ?
          <>
            <div className='border-white border-2 p-2 rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-110'>
              <SignInButton />
            </div>
            <div className='border-white border-2 p-2 rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-110'>
              <SignUpButton />
            </div>
          </> :
          <>
            <div className='border-white border-2 p-2 rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-110'>
              <SignOutButton />
            </div>
          </>
        }


      </main >
    </>
  );
}
