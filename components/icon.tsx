import { Moon, SunMedium, Twitter, Github, Menu } from "lucide-react"

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  gitHub: Github,
  menu: Menu,
}

export type Icon = keyof typeof Icons

