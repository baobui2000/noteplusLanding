'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

export default function DemoPage() {
  const { toast } = useToast()

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      description: `${label}をコピーしました`,
      duration: 2000,
    })
  }

  return (
    <>
      <Header />
      <main className="container py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">無料デモアカウント</h1>
          <p className="text-xl text-muted-foreground">
            Note+の全機能を体験してください
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">デモアカウント情報</CardTitle>
                <Badge>有効期限: 24時間</Badge>
              </div>
              <CardDescription>
                以下の認証情報を使用してダッシュボードにアクセスできます
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">ログイン情報:</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <p><span className="font-medium">ID:</span> noteplus-demo</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleCopy("noteplus-demo", "ID")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p><span className="font-medium">パスワード:</span> demo123</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleCopy("demo123", "パスワード")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">デモアカウントの特徴:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>全ての機能にアクセス可能</li>
                  <li>サンプルデータが事前に設定済み</li>
                  <li>24時間有効</li>
                  <li>制限なしの操作が可能</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button asChild className="w-full" size="lg">
                <Link href="https://app.noteplus.net" target="_blank">
                  ダッシュボードへアクセス
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                ※デモアカウントは24時間後に自動的にリセットされます
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
} 