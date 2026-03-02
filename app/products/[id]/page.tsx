import { PRODUCTS } from "@/lib/product";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f3]">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Product not found</h1>
          <a href="/products" className="text-sm uppercase tracking-[0.2em] underline hover:no-underline">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f7f3]">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden pt-20 md:pt-24">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        
        {/* Floating Category Label */}
        <div className="absolute top-32 md:top-36 left-4 md:left-16 bg-white/95 backdrop-blur-sm px-6 py-3">
          <p className="font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-800">
            {product.category}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="border-b border-[#e5e1da] w-20 mb-8" />
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                {product.title}
              </h1>
              <div className="border-b border-[#e5e1da] w-16 mt-8" />
            </div>
          </div>

          {/* Right Column - Description & CTA */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e5e1da] my-12" />

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                <a 
                  href="/contact" 
                  className="font-medium text-xs md:text-sm tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors duration-300 underline underline-offset-4"
                >
                  GET IN TOUCH
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-16 pt-12 border-t border-[#e5e1da]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-xs tracking-[0.25em] uppercase text-gray-600 mb-3">
                      Quality Assurance
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Each mineral is carefully extracted and processed to meet the highest industry standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-xs tracking-[0.25em] uppercase text-gray-600 mb-3">
                      Sustainable Mining
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Our commitment to environmental responsibility ensures sustainable practices throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-[#e5e1da] ">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
          <a 
            href="/products" 
            className="inline-flex items-center gap-2 font-medium text-xs tracking-[0.2em] uppercase text-gray-700 hover:text-black transition-colors duration-300"
          >
            <span>←</span>
            <span>Back to All Products</span>
          </a>
        </div>
      </div>
    </div>
  );
}
 