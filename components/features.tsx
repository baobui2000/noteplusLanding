'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ClipboardList, MessageCircle, Users, Bell } from 'lucide-react'
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

const features = [
  {
    title: "在庫管理システム",
    description: "AIを活用した需要予測と自動発注で、在庫を最適化します。",
    icon: BarChart3,
  },
  {
    title: "報連相システム",
    description: "リアルタイムの情報共有で、チームの連携を強化します。",
    icon: ClipboardList,
  },
  {
    title: "KANBANボード",
    description: "視覚的なタスク管理で、業務の効率を向上させます。",
    icon: Bell,
  },
  {
    title: "幹部連絡システム",
    description: "重要な情報を即座に共有し、迅速な意思決定を支援します。",
    icon: Users,
  },
  {
    title: "相談窓口",
    description: "従業員の声に耳を傾け、より良い職場環境を構築します。",
    icon: MessageCircle,
  },
]

export function Features() {
  return (
    <section className="container space-y-16 py-24 sm:py-32">
      <ScrollAnimation animation="fadeIn">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            全ての機能を、一つのダッシュボードで。
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Note+は、レストラン経営に必要な全ての機能を統合したオールインワンソリューションです。
          </p>
        </div>
      </ScrollAnimation>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollAnimation key={feature.title} animation="slideUp">
            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
      <ScrollAnimation animation="scaleUp">
        <div className="mx-auto max-w-6xl mt-20">
          <div className="rounded-[32px] border-2 border-muted bg-muted/50 p-4">
            <Image
              src="/placeholder.svg?height=1442&width=2432"
              alt="Note+ ダッシュボード"
              width={2432}
              height={1442}
              className="rounded-[20px] shadow-2xl"
            />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

