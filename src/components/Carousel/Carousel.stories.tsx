import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./index";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Badge from "../Badge";
import { Star, Heart, ShoppingCart, Play, Pause } from "lucide-react";
import { useEffect, useState } from "react";

const meta: Meta<typeof Carousel> = {
  title: "Components/Shadcn/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A carousel component built on top of Embla Carousel. Supports horizontal and vertical orientations, keyboard navigation, and various display options. Perfect for showcasing images, products, testimonials, and other content in a sliding format.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Carousel orientation",
    },
    opts: {
      control: "object",
      description: "Embla carousel options",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Basic carousel
export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic carousel with navigation arrows and numbered slides.",
      },
    },
  },
};

// Image carousel
export const ImageCarousel: Story = {
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {[
          "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1522770179533-24471fcdba45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ].map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: "Image carousel displaying beautiful photography.",
      },
    },
  },
};

// Product showcase carousel
export const ProductShowcase: Story = {
  render: () => (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {[
          {
            name: "Wireless Headphones",
            price: "$199.99",
            rating: 4.8,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Best Seller",
          },
          {
            name: "Smart Watch",
            price: "$299.99",
            rating: 4.6,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "New",
          },
          {
            name: "Laptop Stand",
            price: "$89.99",
            rating: 4.9,
            image:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Sale",
          },
          {
            name: "Wireless Mouse",
            price: "$59.99",
            rating: 4.7,
            image:
              "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            badge: "Popular",
          },
        ].map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2" variant="neutral">
                      {product.badge}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="size-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-600">
                        {product.price}
                      </span>
                      <Button size="sm">
                        <ShoppingCart className="size-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "E-commerce product showcase carousel with detailed product cards.",
      },
    },
  },
};

// Testimonial carousel
export const TestimonialCarousel: Story = {
  render: () => (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {[
          {
            quote:
              "This product has completely transformed our workflow. The team is more productive than ever!",
            author: "Sarah Johnson",
            role: "Product Manager",
            company: "TechCorp",
            avatar: "https://avatars.githubusercontent.com/u/129851755?v=4",
          },
          {
            quote:
              "Outstanding support and incredible features. I can't imagine working without it now.",
            author: "Michael Chen",
            role: "Lead Developer",
            company: "StartupXYZ",
            avatar: "https://avatars.githubusercontent.com/u/129851755?v=4",
          },
          {
            quote:
              "The best investment we've made for our business. ROI was visible within the first month.",
            author: "Emily Davis",
            role: "CEO",
            company: "GrowthCo",
            avatar: "https://avatars.githubusercontent.com/u/129851755?v=4",
          },
        ].map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="size-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Customer testimonial carousel with ratings and author information.",
      },
    },
  },
};

// Multiple items per view
export const MultipleItemsPerView: Story = {
  render: () => (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Carousel showing multiple items per view - 1 on mobile, 2 on tablet, 3 on desktop.",
      },
    },
  },
};

// Vertical carousel
export const VerticalCarousel: Story = {
  render: () => (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
      }}
      className="w-full max-w-xs mx-auto"
    >
      <CarouselContent className="h-80">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vertical carousel with fixed height and vertical navigation.",
      },
    },
  },
};

// Auto-play carousel
export const AutoPlayCarousel: Story = {
  render: () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    useEffect(() => {
      if (!api || !isPlaying) return;

      const interval = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);

      return () => clearInterval(interval);
    }, [api, isPlaying]);

    const images = [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ];

    return (
      <div className="w-full max-w-md space-y-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">
                        Slide {index + 1}
                      </h3>
                      <p className="text-sm opacity-90">
                        Beautiful landscape photography
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex items-center justify-between">
          <div className="text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current - 1 ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Auto-playing carousel with play/pause controls and dot indicators.",
      },
    },
  },
};

// Card-based carousel
export const CardCarousel: Story = {
  render: () => (
    <Carousel className="w-full max-w-5xl">
      <CarouselContent>
        {[
          {
            title: "Getting Started",
            description:
              "Learn the basics of our platform with this comprehensive guide.",
            category: "Tutorial",
            readTime: "5 min read",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          },
          {
            title: "Advanced Features",
            description: "Dive deep into advanced functionality and pro tips.",
            category: "Guide",
            readTime: "12 min read",
            image:
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          },
          {
            title: "Best Practices",
            description:
              "Industry best practices and recommendations from experts.",
            category: "Tips",
            readTime: "8 min read",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          },
          {
            title: "Case Studies",
            description:
              "Real-world examples and success stories from our users.",
            category: "Case Study",
            readTime: "15 min read",
            image:
              "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          },
        ].map((article, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="h-full">
                <CardContent className="p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="neutral">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0"
                    >
                      Read more →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: "Blog/article carousel with rich content cards.",
      },
    },
  },
};

// Infinite loop carousel
export const InfiniteLoop: Story = {
  render: () => (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: "Infinite loop carousel that continuously cycles through items.",
      },
    },
  },
};

// Thumbnail carousel
export const ThumbnailCarousel: Story = {
  render: () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const images = [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ];

    useEffect(() => {
      if (!api) return;

      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div className="w-full max-w-md space-y-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={src}
                      alt={`Product ${index + 1}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex gap-2 justify-center">
          {images.map((src, index) => (
            <button
              key={index}
              className={`border-2 rounded-lg overflow-hidden transition-all ${
                index === current
                  ? "border-primary"
                  : "border-transparent opacity-60"
              }`}
              onClick={() => api?.scrollTo(index)}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Product gallery carousel with thumbnail navigation.",
      },
    },
  },
};

// Showcase of different carousel types
export const CarouselShowcase: Story = {
  render: () => (
    <div className="space-y-12 p-6 max-w-6xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Image Carousel</h3>
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <span className="text-2xl font-semibold">
                      Slide {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Product Grid Carousel</h3>
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <Card className="border-dashed">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
                      <div className="text-sm font-medium">
                        Product {index + 1}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        $99.99
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Vertical Feature Carousel
        </h3>
        <div className="flex justify-center">
          <Carousel orientation="vertical" className="w-full max-w-xs">
            <CarouselContent className="h-80">
              {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map(
                (feature, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/3">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                        <span className="text-lg font-semibold">{feature}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete showcase of different carousel implementations and use cases.",
      },
    },
  },
};
