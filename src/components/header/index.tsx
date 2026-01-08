import Link from 'next/link'

export function Header() {
    return (
        <header className=" flex justify-center items-center w-full  bg-red-400 h-20 text-black p-2">
            <div className='w-full flex justify-center items-center'>
                <Link className='text-white font-bold text-xl' href="/">Calculadora Kakasbook</Link>
            </div>



        </header>
    )
}