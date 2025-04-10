import Link from 'next/link'
import { siteConfig } from '../config/site'
import SocialLinks from './SocialLinks'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}