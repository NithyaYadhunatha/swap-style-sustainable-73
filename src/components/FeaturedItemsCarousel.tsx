import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Star } from 'lucide-react';

interface FeaturedItem {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

const FeaturedItemsCarousel = ({ items }: { items: FeaturedItem[] }) => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 2000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full px-4">
      <Carousel
        opts={{
          loop: true,
          align: 'start',
          dragFree: false,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Card className="w-full h-[360px] shadow-md">
                <Link to={item.link} className="block h-full">
                  <div className="relative h-[200px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/40 text-white rounded-full p-1">
                      <Star size={16} />
                    </div>
                  </div>
                  <CardContent className="p-3 h-[calc(100%-200px)] overflow-hidden">
                    <CardHeader className="p-0">
                      <CardTitle className="text-base font-semibold truncate">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FeaturedItemsCarousel;
