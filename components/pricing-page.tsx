'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

const pricingPlans = [
  {
    name: "ベーシックプラン",
    price: "¥1,000",
    billing: "月額",
    description: "小規模店舗向けの基本機能プラン",
    features: [
      "基本的な機能へのアクセス",
      "基本的なレポートと分析",
      "最大10名までのユーザー",
      "20GB個人データ容量",
      "基本的なチャットとメールサポート"
    ]
  },
  {
    name: "ビジネスプラン",
    price: "¥2,000",
    billing: "月額",
    description: "成長中の店舗向けの高機能プラン",
    features: [
      "200以上の連携機能",
      "高度なレポートと分析",
      "最大20名までのユーザー",
      "40GB個人データ容量",
      "優先チャットとメールサポート"
    ]
  },
  {
    name: "エンタープライズプラン",
    price: "¥4,000",
    billing: "月額",
    description: "大規模店舗チェーン向けの完全機能プラン",
    features: [
      "高度なカスタムフィールド",
      "監査ログと詳細な履歴",
      "無制限のユーザー数",
      "無制限のデータ容量",
      "パーソナライズされた優先サービス"
    ]
  }
]

const faqs = [
  {
    question: "Note+とは？",
    answer: "Note+は、レストラン経営に必要な全ての機能を統合した管理プラットフォームです。在庫管理から従業員のコミュニケーションまで、あらゆる業務を効率化します。"
  },
  {
    question: "Untitledプラットフォーム",
    answer: "成長するレストランビジネスのために、直感的なプラットフォームを提供します。"
  },
  {
    question: "Note+の導入方法",
    answer: "Note+の導入は簡単です。サインアップ後、弊社のサポートチームが初期設定からトレーニングまでサポートいたします。"
  },
  {
    question: "スタートガイド",
    answer: "Note+を始めるために必要な全ての情報を提供します。"
  },
  {
    question: "メッセージング機能",
    answer: "スタッフとのコミュニケーションを円滑にする、使いやすいメッセージング機能を提供します。"
  },
  {
    question: "Note+インボックス",
    answer: "全ての通知とメッセージを一元管理できる、効率的なインボックスシステムです。"
  },
  {
    question: "製品ツアー",
    answer: "インタラクティブなツアーで、Note+の主要機能をご紹介します。"
  },
  {
    question: "Note+ボット",
    answer: "24時間365日、即座に解決策を提供するAIアシスタントです。"
  }
]

export function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <div className="flex flex-col items-start gap-2">
          <Button variant="outline" className="rounded-full">
            料金プラン
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            あなたのビジネスに最適なプランを見つけましょう
          </h1>
          <p className="text-lg text-muted-foreground">
            規模に関わらず、全てのレストランでNote+をご利用いただけます。
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" className="rounded-full">
            年間プラン
          </Button>
          <Button variant="outline" className="rounded-full">
            月間プラン
          </Button>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.billing}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full">今すぐ始める</Button>
                <Button variant="outline" className="w-full">
                  営業に相談する
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">よくある質問</h2>
            <Button variant="outline">全てのFAQを見る</Button>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-xl bg-black p-8 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">30日間の無料トライアルを始めましょう</h2>
            <p className="mt-4 text-gray-400">
              すでに4,000以上のレストランがNote+で成長を実現しています。
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="secondary">詳細を見る</Button>
              <Button>始める</Button>
            </div>
          </div>
          <div className="mt-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FYvdtcs4yiAaLjXJeSJeWQZPZObub1.png"
              alt="Note+ ダッシュボード"
              width={1200}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

