import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      title: "РАЗБАН",
      price: "349₽",
      description: "Разбан",
      icon: "ShieldCheck",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      title: "РАЗМУТ",
      price: "119₽",
      description: "Размут",
      icon: "Volume2",
      gradient: "from-orange-400 to-orange-600",
    },
  ];

  const socialLinks = [
    {
      title: "Мы ВКонтакте",
      icon: "MessageCircle",
      bgColor: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=200&fit=crop",
    },
    {
      title: "Форум",
      icon: "MessageSquare",
      bgColor: "bg-blue-600",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=200&fit=crop",
    },
    {
      title: "Наш YouTube",
      icon: "Play",
      bgColor: "bg-red-500",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=200&fit=crop",
    },
    {
      title: "Discord Сервер",
      icon: "MessageCircle",
      bgColor: "bg-purple-500",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          🛠️ Услуги
        </h2>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-6 text-white shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="absolute top-4 right-4 text-2xl font-bold opacity-20">
                {service.price}
              </div>

              <div className="relative z-10">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 tracking-wider">
                  {service.title}
                </h3>

                <p className="text-white/80 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{service.price}</span>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
                  >
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/5 rounded-full" />
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-slate-800 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div
                className="h-32 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${link.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 ${link.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <Icon name={link.icon} size={20} className="text-white" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
                  {link.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
