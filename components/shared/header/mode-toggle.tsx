'use client'


import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoonIcon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"


const ModeToggle = () => {
	//const {mounted, setMounted}= useState(false);
	const {theme, setTheme} = useTheme();

	useEffect( () => {
	}, []);
    return  <DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button variant='ghost' className="focus-visible:ring-0 focus-visible:ring-offset-0">
				{(theme === 'system') ? (<SunMoon />) : (theme === 'dark') ? (<MoonIcon />) : (<Sun />)}
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>Appearance</DropdownMenuLabel>
			<DropdownMenuSeparator/>
			<DropdownMenuCheckboxItem
				checked= {theme === 'system'}
				onClick={ () => setTheme('system')}
			>
				System
			</DropdownMenuCheckboxItem>
			<DropdownMenuSeparator/>
			<DropdownMenuCheckboxItem
				checked= {theme === 'light'}
				onClick={ () => setTheme('light')}
			>
				Light
			</DropdownMenuCheckboxItem>
			<DropdownMenuSeparator/>
			<DropdownMenuCheckboxItem
				checked= {theme === 'dark'}
				onClick={ () => setTheme('dark')}
			>
				Dark
			</DropdownMenuCheckboxItem>
		</DropdownMenuContent>
	</DropdownMenu>
}
 
export default ModeToggle