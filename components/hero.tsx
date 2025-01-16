'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <ScrollAnimation animation="fadeIn">
            <Badge variant="secondary" className="mb-4 text-sm sm:text-base">
              ✨ 2025年リリース v1.0
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              飲食店業務を、
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                もっとスマートに。
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeIn">
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-[90%] sm:max-w-2xl px-4 sm:px-0">
              Note+とは本部と繋がり、店舗が多くて必要な全ての機能を一つのダッシュボードに統合。
              在庫管理から従業員コミュニケーションまで、あなたのビジネスを次のレベルへ。
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleUp">
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/demo">無料デモを体験</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp">
            <div className="mt-8 sm:mt-10 flex flex-col items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} className="border-2 border-background w-8 h-8 sm:w-10 sm:h-10">
                    <AvatarImage src={`https://i.pravatar.cc/40?img=${i}`} />
                    <AvatarFallback>ユーザー{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-1 flex-wrap justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-xs sm:text-sm text-muted-foreground">
                  50+ 飲食店で利用中
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}

