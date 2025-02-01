import Link from "next/link"

import { siteConfig } from "../config/site"
import { buttonVariants } from "./ui/button"
import { Icons } from "./icon"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5 transition-colors" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current transition-colors" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}


