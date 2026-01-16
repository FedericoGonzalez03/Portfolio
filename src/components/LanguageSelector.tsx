import { useLanguage } from "@/lib/context/LanguageContext";
import { cn } from "@/lib/utils";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { LanguagesIcon } from "lucide-react";

export default function LanguageSelector() {
	const { t, setLanguage, language } = useLanguage();

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<button className='rounded-md h-10 w-10 flex items-center justify-center hover:bg-accent transition-all duration-300 cursor-target target-cursor-pointer'>
					<LanguagesIcon className="h-4 w-4" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="z-200 bg-black">
				<DropdownMenuLabel>{t.language}</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-white" />
				<DropdownMenuItem onClick={() => setLanguage('en')} className={cn('cursor-target target-cursor-pointer', language === 'en' && 'text-green-400 font-bold')}>
					<span className="mr-2 text-xs">🇺🇸</span> English
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setLanguage('es')} className={cn('cursor-target target-cursor-pointer', language === 'es' && 'text-green-400 font-bold')}>
					<span className="mr-2 text-xs">🇪🇸</span> Español
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setLanguage('pt')} className={cn('cursor-target target-cursor-pointer', language === 'pt' && 'text-green-400 font-bold')}>
					<span className="mr-2 text-xs">🇵🇹</span> Português
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}