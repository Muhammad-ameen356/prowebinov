import { Zap, ShieldCheck, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Cutting-Edge Technology',
    description: 'We use the latest frameworks and technologies to build fast, scalable, and secure web applications.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Customer-Centric Approach',
    description: 'Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Proven Results',
    description: 'Our portfolio speaks for itself. We have a track record of helping businesses grow their online presence.',
  },
];

export function FeaturesSection() {
  return (
    <section className="container py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="bg-primary/10 p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
