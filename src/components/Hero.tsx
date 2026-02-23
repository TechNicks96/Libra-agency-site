import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto">
            Строим ваше будущее
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональное строительство жилых и коммерческих объектов. Более 15 лет опыта в создании надёжных и качественных сооружений.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              type="button"
              onClick={() => scrollToSection('#services')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center gap-2 shadow-lg"
            >
              Узнать больше
              <ArrowRight size={20} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contacts')}
              className="bg-white text-foreground border-2 border-primary px-8 py-4 rounded-lg hover:bg-secondary transition-colors duration-200 shadow-lg"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}