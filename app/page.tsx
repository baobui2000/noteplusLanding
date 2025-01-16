import React from 'react'
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { FeatureSections } from "@/components/feature-sections"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { TextRevealDemo } from "@/components/text-reveal-demo"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Note+ - レストラン管理ダッシュボード",
  description: "Note+は、レストラン経営者向けの直感的で強力な管理ダッシュボードです。在庫管理、タスク管理、コミュニケーションツールを一つのプラットフォームに統合しました。",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="container my-12 px-4">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>革新的なレストラン管理</CardTitle>
              <CardDescription>効率性と顧客満足度を最大化</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Note+は、最新のテクノロジーを活用して、あなたのレストラン経営をサポートします。</p>
            </CardContent>
          </Card>
        </section>
        <section className="container my-12 px-4">
          <TextRevealDemo />
        </section>
        <Features />
        <FeatureSections />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

