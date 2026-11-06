import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { logoUrl } from "@/lib/site";

export default function Logo({
  onNavigate,
  className = "h-11 w-[55px] md:h-[52px] md:w-[65px]",
}) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      aria-label="Motorguyz — onsite mobile car repair in Dubai"
      className="flex shrink-0 items-center"
    >
      <Image
        src={logoUrl}
        alt="Motorguyz car services"
        fittingType="fit"
        originWidth={1408}
        originHeight={1129}
        className={className}
      />
    </Link>
  );
}