import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="cta" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          今すぐNote+を始めましょう
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          効率的なレストラン管理で、あなたのビジネスを次のレベルへ。
        </p>
        <Button size="lg" asChild>
          <Link href="#demo">無料デモを体験する</Link>
        </Button>
      </div>
    </section>
  )
}

