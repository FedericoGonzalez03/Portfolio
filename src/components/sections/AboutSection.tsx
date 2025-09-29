'use client';
import { useLanguage } from '@/lib/context/LanguageContext';
import Parallax from '../Parallax';
import bros from '@/public/mario-room.gif';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <Parallax
      urlImage={bros.src}
      className='flex items-center justify-center text-center p-4'
      minHeight='0px'
    >
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8 text-shadow-lg/90">
            {t.about}
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8 text-shadow-lg/90">
            {t.aboutDescription}
          </p>
        </div>
      </section>
    </Parallax>
  );
};

export default AboutSection;
