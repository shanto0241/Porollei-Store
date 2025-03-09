import { APP_NAME } from "@/lib/constants";
import { CopyrightIcon } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return  <footer className="border-t">
                <div className="p-5 flex-center">
                   <CopyrightIcon className="mr-1"/>{currentYear} | {APP_NAME} | All Rights Reserved. 
                </div>
        </footer>
    ;
}
 
export default Footer;