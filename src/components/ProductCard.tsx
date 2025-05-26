import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  price: string;
  icon: string;
  iconBg: string;
  features?: string[];
  description?: string;
  bonus?: string;
  popular?: boolean;
  buttonText: string;
}

const ProductCard = ({
  title,
  price,
  icon,
  iconBg,
  features,
  description,
  bonus,
  popular,
  buttonText,
}: ProductCardProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform relative">
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
          {buttonText === "Купить"
            ? "Популярное"
            : buttonText === "Открыть"
              ? "Хит"
              : "Выгодно"}
        </Badge>
      )}
      <CardHeader className="text-center">
        <div
          className={`w-12 h-12 ${iconBg} rounded-lg mx-auto mb-4 flex items-center justify-center`}
        >
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
        <CardDescription>
          <span className="text-2xl md:text-3xl font-bold text-green-400">
            {price}
          </span>
          {bonus && (
            <div className="text-yellow-400 font-semibold mt-2">{bonus}</div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {features && (
          <ul className="space-y-2 mb-6 text-left">
            {features.map((feature, i) => (
              <li key={i} className="text-slate-300 flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        {description && (
          <div className="space-y-2 mb-6 text-slate-300">{description}</div>
        )}
        <Button className="w-full bg-green-500 hover:bg-green-600">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
