import Link from "next/link"
import { SiteHeader } from "../../components/site-header"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ホームページに戻る
        </Link>
        <h1 className="text-3xl font-bold mb-6">無料デモアカウント登録</h1>
        <p className="text-lg text-gray-600 mb-8">
          RestaurantDXの革新的な機能を体験してください。以下のフォームに必要事項を入力し、無料デモアカウントを作成しましょう。
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">名</Label>
              <Input id="firstName" placeholder="山田" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">姓</Label>
              <Input id="lastName" placeholder="太郎" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="taro.yamada@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">会社名</Label>
            <Input id="company" placeholder="株式会社レストラン" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">役職</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="役職を選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">オーナー</SelectItem>
                <SelectItem value="manager">店長</SelectItem>
                <SelectItem value="staff">スタッフ</SelectItem>
                <SelectItem value="other">その他</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="restaurants">店舗数</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="店舗数を選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5店舗</SelectItem>
                <SelectItem value="6-10">6-10店舗</SelectItem>
                <SelectItem value="11-20">11-20店舗</SelectItem>
                <SelectItem value="21+">21店舗以上</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">その他、ご要望やご質問があればご記入ください</Label>
            <Textarea id="message" placeholder="ご自由にお書きください" />
          </div>
          <Button type="submit" className="w-full">
            デモアカウントを作成
          </Button>
        </form>
      </main>
      <div className="mt-12 p-6 lg:max-w-4xl mx-auto bg-yellow-100 dark:bg-teal-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">デモアカウント情報</h2>
        <p className="mb-2">以下の情報でデモアカウントにログインできます：</p>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">管理者アカウント:</h3>
            <p>ID: 123456</p>
            <p>パスワード: 123456</p>
          </div>
          <div>
            <h3 className="font-semibold">一般ユーザーアカウント:</h3>
            <p>ID: 1234567</p>
            <p>パスワード: 1234567</p>
          </div>
        </div>
        <Link href="https://app.noteplus.net" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6">
          <ArrowRight className="mr-2 h-4 w-4" />
          Go to NotePlus デモサイト
        </Link>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          注意: これらの認証情報は一時的なものです。セキュリティのため、実際の使用時には必ず変更してください。
        </p>
      </div>
      <footer className="border-t mt-8">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2024 RestaurantDX. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              利用規約
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

