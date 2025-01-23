import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Pratham
        </span>
        <span className="text-2xl font-light text-white ml-2">Gonate</span>
      </div>
    </Link>
  )
}

