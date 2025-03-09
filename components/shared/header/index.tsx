import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';
import Menu from './menu';



const Header = () => {
    return <header className='w-full border-b'>
        {/* Hidden in Mobile View */}
        <div className="wrapper flex-between">
           <div className="flex-start gap-2">
                <Link href='/' className='flex-start'>
                    <Image src='/images/logo.svg' 
                    alt= {`${APP_NAME} logo`}
                    height={48}
                    width={48}
                    priority={true} />
                </Link>
                <span className='hidden lg:block font-bold text-black'>
                    {APP_NAME}
                </span>
            </div>
            <div className="space-x-2">
                <Menu/>
            </div>
        </div>

    </header>
}
 
export default Header;