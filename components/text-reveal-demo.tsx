import TextReveal from "@/components/magicui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextReveal text="Note+ はレストラン経営の未来を変えます。" className="text-3xl font-bold text-center" />
    </div>
  );
}

