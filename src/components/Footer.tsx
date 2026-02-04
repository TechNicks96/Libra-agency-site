import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-secondary/30 border-t-2 border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-foreground mb-4">СтройМастер</h3>
            <p className="text-muted-foreground mb-4">
              Строим ваше будущее. Качественное строительство жилых и коммерческих объектов.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © {currentYear} СтройМастер. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}