import Image from "next/image";
import Postlist from "./post/components/Postlist";
import { POSTDATA } from "./Utils/Postdata";
import { mergePostswithUsers } from "./lib/Merge";
import { USERDATA } from "./Utils/Userdata";

export default function Home() {
  const postsWithUsers = mergePostswithUsers(POSTDATA, USERDATA);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Postlist posts={postsWithUsers} showUsers={true} linkImage={false} />
      </main>
    </div>
  );
}
