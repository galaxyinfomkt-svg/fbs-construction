import {
  HouseLineIcon,
  ArmchairIcon,
  CookingPotIcon,
  BathtubIcon,
  StairsIcon,
  SunHorizonIcon,
  WindIcon,
  UmbrellaIcon,
  CertificateIcon,
  ShieldCheckIcon,
  CalendarCheckIcon,
  ReceiptIcon,
  HouseIcon,
  UsersThreeIcon,
  UmbrellaSimpleIcon,
} from '@phosphor-icons/react/ssr';

// One icon family (Phosphor), one weight, mapped from the keys used in lib/home.ts.
const map = {
  addition: HouseLineIcon,
  interior: ArmchairIcon,
  kitchen: CookingPotIcon,
  bath: BathtubIcon,
  basement: StairsIcon,
  sunroom: SunHorizonIcon,
  porch: WindIcon,
  deckRoof: UmbrellaIcon,
  license: CertificateIcon,
  shield: ShieldCheckIcon,
  insured: UmbrellaSimpleIcon,
  calendar: CalendarCheckIcon,
  estimate: ReceiptIcon,
  home: HouseIcon,
  family: UsersThreeIcon,
} as const;

export type HomeIconName = keyof typeof map;

export function HomeIcon({ name, className }: { name: HomeIconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} weight="regular" aria-hidden />;
}
