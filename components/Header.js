import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import favicon from "../public/favicon.ico"

export default function Header() {
    const router = useRouter()
    return (
        <div>
            <Image
                src={favicon}
                alt="Picture of Home Logo"
            />
            <input

                type="text"
                placeholder="Search..." />
            <Link href="/login">
                <a>로그인</a>
            </Link>

        </div>
    )
}