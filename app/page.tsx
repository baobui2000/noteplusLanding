import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "../components/site-header"
import { Button } from "../components/ui/button"
import { ArrowRight, Globe, MessageCircle, Settings, ShieldCheck, UserCheck, Bell } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen transition-colors">
      <SiteHeader />
      <main className="flex-1">
        <section
          className="w-full h-[900px] py-12 md:py-24 lg:py-32 xl:py-48 transition-colors relative bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/screen2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none transition-colors">
                  <span className="block text-white">多店舗飲食店運営の</span>
                  <span className="block bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text animate-pulse">
                    革新的なソリューション
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors">
                  AIを活用した多言語コミュニケーション。効率的な店舗管理。すべてが1つのプラットフォームに。
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/demo">
                  <Button
                    size="lg">
                  無料デモを申し込む
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Button variant="outline" size="lg">
                  詳細を見る
                </Button>
              </div>
              <div className="mt-12 relative w-full max-w-lg mx-auto">
                <Image
                  src="/screen1.png?height=1080&width=1920"
                  alt="RestaurantDX Dashboard Mockup"
                  width={1920}
                  height={1080}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full z-[-1]"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted transition-colors">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 transition-colors">
              主な機能
            </h2>
            <div className="grid grid-cols-6 gap-4 md:gap-6 max-w-[1400px] mx-auto">
              {/* Large feature tile */}
              <div className="col-span-6 md:col-span-3 bg-background rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl group hover:-translate-y-1 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                <div className="h-full flex flex-col">
                  <Settings className="h-12 w-12 mb-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-2xl font-bold mb-4">総合的な店舗管理</h3>
                  <p className="text-muted-foreground mb-4">
                    在庫、スケジュール、売上など、すべてを一元管理。効率的な運営をサポートします。
                  </p>
                  <div className="mt-auto">
                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Medium feature tiles */}
              <div className="col-span-6 md:col-span-3 grid grid-cols-2 gap-4 md:gap-6">
                <div className="col-span-2 bg-blue-50 dark:bg-blue-950 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-900">
                  <MessageCircle className="h-10 w-10 mb-4 text-primary transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-bold mb-2">効率的なコミュニケーション</h3>
                  <p className="text-sm text-muted-foreground">店舗間、従業員間のスムーズな情報共有</p>
                </div>
                <div className="col-span-1 bg-background rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                  <Globe className="h-10 w-10 mb-4 text-primary transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-bold mb-2">AI多言語サポート</h3>
                  <p className="text-sm text-muted-foreground">外国人スタッフとの円滑な連携</p>
                </div>
                <div className="col-span-1 bg-background rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                  <ShieldCheck className="h-10 w-10 mb-4 text-primary transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-bold mb-2">権限管理</h3>
                  <p className="text-sm text-muted-foreground">セキュリティ強化</p>
                </div>
              </div>

              {/* Small feature tiles */}
              <div className="col-span-6 md:col-span-2 bg-background rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
                <UserCheck className="h-10 w-10 mb-4 text-primary transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold mb-2">オンライン状態表示</h3>
                <p className="text-sm text-muted-foreground">リアルタイムな状況把握</p>
              </div>
              <div className="col-span-6 md:col-span-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:brightness-110">
                <Bell className="h-10 w-10 mb-4 transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold mb-2">通知システム</h3>
                <p className="text-sm opacity-90">
                  重要な情報をタイムリーに配信し、迅速な対応を実現。アプリやメールで簡単に確認できます。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 transition-colors">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-colors">
                  言語の壁を超える
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl transition-colors">
                  AIを活用した高精度な翻訳機能で、多国籍スタッフとのコミュニケーションを円滑に
                </p>
              </div>
              <div className="mt-8 relative">
                <Image
                  src="/user.png?height=400&width=600"
                  alt="AI Translation Feature Mockup"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl mx-auto"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500 rounded-full z-[-1]"></div>
              </div>
              <Button>AI翻訳機能をお試し</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted transition-colors">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-colors">
                  今すぐ始めましょう
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl transition-colors">
                  RestaurantDXで飲食店の運営を次のレベルへ
                </p>
              </div>
              <div className="mt-8 flex justify-center items-center space-x-8">
                <div className="relative">
                  <Image
                    src="/screenmobile.png?height=900&width=550"
                    alt="RestaurantDX Mobile App Mockup"
                    width={550}
                    height={900}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full z-[-1]"></div>
                </div>
                <div className="space-y-4 text-left max-w-md">
                  <h3 className="text-2xl font-bold">モバイルでも簡単操作</h3>
                  <p className="text-muted-foreground">
                    外出先でも店舗の状況をリアルタイムで確認。 スマートフォンやタブレットから簡単にアクセスできます。
                  </p>
                </div>
              </div>
              <div className="space-x-4">
                <Button>無料トライアルを開始</Button>
                <Button variant="outline">営業担当に相談</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t transition-colors">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground transition-colors">© 2024 RestaurantDX. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 transition-colors" href="#">
              利用規約
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition-colors" href="#">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

