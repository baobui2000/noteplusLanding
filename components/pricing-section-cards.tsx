import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from 'lucide-react';

interface PlanFeature {
  type: string;
  features: {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "基本機能",
    features: [
      {
        name: "在庫管理",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "売上レポート",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "高度な機能",
    features: [
      {
        name: "AIによる需要予測",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "従業員シフト管理",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "多店舗管理",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "カスタムレポート",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "サポート",
    features: [
      {
        name: "メールサポート",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "電話サポート",
        free: false,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "専任サポート担当",
        free: false,
        startup: false,
        team: false,
        enterprise: true,
      },
    ],
  },
];

export default function PricingSectionCards() {
  return (
    <>
      {/* Pricing */}
      <div className="container px-4 sm:px-6 py-12 sm:py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            料金プラン
          </h2>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            あなたのビジネスの規模に合わせて、最適なプランをお選びいただけます。
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        <div className="flex justify-center items-center px-4 sm:px-0">
          <Label htmlFor="payment-schedule" className="me-3 text-sm sm:text-base">
            月払い
          </Label>
          <Switch id="payment-schedule" />
          <Label htmlFor="payment-schedule" className="relative ms-3 text-sm sm:text-base">
            年払い
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                  className="w-10 h-6 sm:w-14 sm:h-8 -me-6"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase text-xs sm:text-sm">最大10%お得</Badge>
              </span>
            </span>
          </Label>
        </div>
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:items-center">
          {/* Card */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <CardTitle className="mb-4 sm:mb-7 text-lg sm:text-xl">フリー</CardTitle>
              <span className="font-bold text-3xl sm:text-5xl">無料</span>
            </CardHeader>
            <CardDescription className="text-center text-sm sm:text-base">
              小規模店舗向け
            </CardDescription>
            <CardContent>
              <ul className="mt-4 sm:mt-7 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">1ユーザー</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">基本機能</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">メールサポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm sm:text-base" variant={"outline"}>
                無料で始める
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="border-primary flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <Badge className="uppercase w-max self-center mb-2 sm:mb-3 text-xs sm:text-sm">
                人気
              </Badge>
              <CardTitle className="!mb-4 sm:!mb-7 text-lg sm:text-xl">スタートアップ</CardTitle>
              <span className="font-bold text-3xl sm:text-5xl">¥3,900</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto text-sm sm:text-base">
              成長中の店舗に必要な全機能
            </CardDescription>
            <CardContent>
              <ul className="mt-4 sm:mt-7 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">5ユーザーまで</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">高度な機能</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">電話サポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm sm:text-base">今すぐ始める</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <CardTitle className="mb-4 sm:mb-7 text-lg sm:text-xl">チーム</CardTitle>
              <span className="font-bold text-3xl sm:text-5xl">¥8,900</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto text-sm sm:text-base">
              複数店舗の管理に最適
            </CardDescription>
            <CardContent>
              <ul className="mt-4 sm:mt-7 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">10ユーザーまで</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">全機能利用可能</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">優先サポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm sm:text-base" variant={"outline"}>
                お問い合わせ
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2 flex-grow">
              <CardTitle className="mb-4 sm:mb-7 text-lg sm:text-xl">エンタープライズ</CardTitle>
              <span className="font-bold text-3xl sm:text-5xl">カスタム</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto text-sm sm:text-base">
              大規模チェーン店向け
            </CardDescription>
            <CardContent>
              <ul className="mt-4 sm:mt-7 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">無制限ユーザー</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">カスタム開発対応</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-muted-foreground">専任サポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-sm sm:text-base" variant={"outline"}>
                お問い合わせ
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Pricing */}
    </>
  );
}

