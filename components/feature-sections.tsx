'use client'

import { ScrollAnimation } from "./scroll-animation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Calendar, Clock, MessageCircle, Users } from 'lucide-react'

export function FeatureSections() {
  return (
    <div className="space-y-32 py-24">
      {/* 在庫管理セクション */}
      <section className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <ScrollAnimation animation="slideUp">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                <span className="text-primary">在庫管理</span>
                <span className="mx-2 h-4 w-px bg-border" />
                <span className="text-muted-foreground">無駄なコストを削減</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                AIを活用した賢い在庫管理
              </h2>
              <p className="text-xl text-muted-foreground">
                需要予測と自動発注で、最適な在庫レベルを維持。食材の無駄を減らし、コストを削減します。
              </p>
              <ul className="grid gap-6">
                <li className="flex gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">リアルタイムの在庫追跡</h3>
                    <p className="text-muted-foreground">
                      在庫レベルをリアルタイムで監視し、必要な時に必要な分だけ発注
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">賞味期限管理</h3>
                    <p className="text-muted-foreground">
                      食材の賞味期限を自動で追跡し、廃棄ロスを最小限に
                    </p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="gap-2">
                詳細を見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleUp">
            <div className="rounded-xl border bg-gradient-to-b from-background to-muted/50 p-8">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="在庫管理画面"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* タスク管理セクション */}
      <section className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <ScrollAnimation animation="scaleUp" className="order-2 lg:order-1">
            <div className="rounded-xl border bg-gradient-to-b from-background to-muted/50 p-8">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="タスク管理画面"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" className="order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                <span className="text-primary">タスク管理</span>
                <span className="mx-2 h-4 w-px bg-border" />
                <span className="text-muted-foreground">業務を効率化</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                直感的なタスク管理
              </h2>
              <p className="text-xl text-muted-foreground">
                KANBANボードとTodoリストで、チームの業務を効率的に管理・追跡します。
              </p>
              <ul className="grid gap-6">
                <li className="flex gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">タスクの優先順位付け</h3>
                    <p className="text-muted-foreground">
                      重要な業務を見逃さず、効率的にタスクを処理
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">チーム管理</h3>
                    <p className="text-muted-foreground">
                      メンバー間でタスクを割り当て、進捗を共有
                    </p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="gap-2">
                詳細を見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* コミュニケーションセクション */}
      <section className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <ScrollAnimation animation="slideUp">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                <span className="text-primary">コミュニケーション</span>
                <span className="mx-2 h-4 w-px bg-border" />
                <span className="text-muted-foreground">チームワークを強化</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                シームレスな情報共有
              </h2>
              <p className="text-xl text-muted-foreground">
                リアルタイムのメッセージングと通知で、チーム全体のコミュニケーションを円滑に。
              </p>
              <ul className="grid gap-6">
                <li className="flex gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">グループチャット</h3>
                    <p className="text-muted-foreground">
                      部門やシフトごとのグループチャットで効率的な情報共有
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">従業員フィードバック</h3>
                    <p className="text-muted-foreground">
                      匿名でのフィードバックオプションで、率直な意見交換を促進
                    </p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="gap-2">
                詳細を見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleUp">
            <div className="rounded-xl border bg-gradient-to-b from-background to-muted/50 p-8">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="コミュニケーション画面"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

