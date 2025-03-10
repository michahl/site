import { Icons } from "@/components/icons";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center">
                <p className="text-center">I haven&rsquo;t wrote about this yet.</p>

                <div className="mt-2">
                    <Link 
                        href="/b" 
                        className="flex items-center gap-1.5 text-blue-600 border-b border-b-transparent hover:border-b hover:border-b-blue-600 transition-all ease-in-out duration-200">
                            Check all blogs posts
                            <Icons.arrow className="w-4 h-4 rotate-45"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}