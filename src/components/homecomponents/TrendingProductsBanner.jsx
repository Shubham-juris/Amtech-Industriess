import React from 'react';
import { Link } from 'react-router-dom';

export function TrendingProductsBanner({
  title,
  products,
  largeImage,
  largeImageSide = 'left',
  wavyImage,
  overlayText,
}) {
  const productGrid = (
    <div className="text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">
        {/* {title.toUpperCase()} */}
      </h2>

      <Link to="/wholesale" className="text-muted-foreground hover:text-primary underline">
        Shop All
      </Link>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {products.map((product) => (
          <Link to={product.href} key={product.name} className="group">
            <div className="relative  w-full overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                data-ai-hint={product.hint}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-sm text-center font-medium text-primary">
              {product.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );

  const imageSection = (
    <div className="relative h-[60vh] md:h-[80vh] hidden lg:block">
      <div
        className="absolute inset-0 bg-gray-200 rounded-l-3xl overflow-hidden"
        style={{
          clipPath:
            largeImageSide === 'left'
              ? 'url(#wavy-edge-right)'
              : 'url(#wavy-edge-left)',
        }}
      >
        <img
          src={largeImage.src}
          alt={largeImage.alt}
          data-ai-hint={largeImage.hint}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg- from-black/20 to-transparent"></div>

        {wavyImage && (
          <div className="absolute top-0 left-0 h-full w-1/2">
            <div className="relative h-full w-full">
              <img
                src={wavyImage.src}
                alt={wavyImage.alt}
                data-ai-hint={wavyImage.hint}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        {overlayText && (
          <div className="absolute bottom-10 -left-8 transform -rotate-90 bg-black text-white px-3 py-1 rounded-t-md">
            <p className="text-sm font-semibold tracking-wider">{overlayText}</p>
          </div>
        )}

        {!wavyImage && !overlayText && (
          <div className="absolute bottom-10 left-10">
            <h3
              className="text-5xl font-bold text-white/80 tracking-widest"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
            >
              {title.toUpperCase()}
            </h3>
          </div>
        )}
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="wavy-edge-left" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V1 H0 C0.05,0.9, 0.03,0.8, 0,0.7 C0.03,0.6, 0.05,0.5, 0,0.4 C0.05,0.3, 0.03,0.2, 0,0.1 V0 Z" />
          </clipPath>
          <clipPath id="wavy-edge-right" clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0 V1 H1 C0.95,0.9, 0.97,0.8, 1,0.7 C0.97,0.6, 0.95,0.5, 1,0.4 C0.95,0.3, 0.97,0.2, 1,0.1 V0 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {largeImageSide === 'left' ? imageSection : productGrid}
          {largeImageSide === 'left' ? productGrid : imageSection}
        </div>
      </div>
    </section>
  );
}
