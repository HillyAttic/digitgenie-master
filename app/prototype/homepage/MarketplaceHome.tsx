/* eslint-disable @next/next/no-img-element */
import { Fragment, type ReactNode } from 'react'
import Link from 'next/link'
import {
  BANNERS,
  CATEGORY_NAV,
  CATEGORY_TILES,
  DEALS,
  DEPARTMENTS,
  FBT,
  FOOTER_COLUMNS,
  HERO,
  PRICE_RANGES,
  PRODUCTS,
  PRODUCT_FEATURES,
  RECENTLY_VIEWED,
  REVIEW_FILTERS,
  TECH_STACK,
  type Product,
} from './data'

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 10 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 2H3l1.2 7h7.1L13 4H4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.4" cy="13" r="1" fill="currentColor" />
      <circle cx="11.8" cy="13" r="1" fill="currentColor" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S2.5 10.2 2.5 6.4A3.1 3.1 0 0 1 8 4.5a3.1 3.1 0 0 1 5.5 1.9c0 3.8-5.5 7.1-5.5 7.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function Stars({ value }: { value: number }) {
  return (
    <span aria-label={`${value} out of 5 stars`}>
      {'★'.repeat(value)}
      {'☆'.repeat(5 - value)}
    </span>
  )
}

const CATEGORY_ICONS: Record<string, ReactNode> = {
  ALL: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  AI: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
      <path d="M12 10v4M10 12h4" />
    </>
  ),
  FT: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 9.5h19M6 15h5" />
    </>
  ),
  EC: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  QC: <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />,
  HC: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  ED: (
    <>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v5c0 2 3 3 6 3s6-1 6-3v-5" />
      <path d="M22 9v6" />
    </>
  ),
  RE: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  RS: (
    <>
      <path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2" />
      <path d="M16 2c2 0 4 2 4 5s-2 5-4 5v10" />
    </>
  ),
  HR: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 15c2.8 0 5 2 5 5" />
    </>
  ),
  SC: <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />,
  FL: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  SA: <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />,
  LG: (
    <>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  MF: (
    <>
      <path d="M3 20V9l5 3V9l5 3V9l5 3v8H3Z" />
      <path d="M7 20v-4M12 20v-4M17 20v-4" />
    </>
  ),
  AT: (
    <>
      <path d="m4 16 2-5h12l2 5" />
      <path d="M3 16h18v3H3z" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </>
  ),
}

function CategoryIcon({ code }: { code: string }) {
  return (
    <span className="m-cat__icon" aria-hidden="true">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {CATEGORY_ICONS[code]}
      </svg>
    </span>
  )
}

function TopBar() {
  return (
    <header className="m-topbar">
      <div className="p-container m-topbar__row">
        <Link href="/" className="m-logo">
          Digit<em>Genie</em>
        </Link>

        <div className="m-deliver">
          <PinIcon />
          <div>
            <span>Deliver to</span>
            <strong>India</strong>
          </div>
        </div>

        <form className="m-search" onSubmit={(event) => event.preventDefault()}>
          <select aria-label="Search category" defaultValue="All categories">
            {['All categories', ...CATEGORY_NAV.slice(1, -2)].map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search AI tools, CRM, ERP, source code"
          />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="m-top-actions">
          <a href="#" className="m-top-link">
            <span>Sell on</span>
            <strong>DigitGenie</strong>
          </a>
          <a href="#" className="m-top-link">
            <span>Returns and</span>
            <strong>Orders</strong>
          </a>
          <a href="#" className="m-top-link">
            <span>Hello, sign in</span>
            <strong>Account</strong>
          </a>
          <button type="button" className="m-cart">
            <CartIcon />
            <span>Cart</span>
            <span className="m-cart__count">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}

function CategoryNav() {
  return (
    <nav className="m-nav" aria-label="Categories">
      <div className="p-container m-nav__row">
        {CATEGORY_NAV.map((label) => (
          <a
            key={label}
            href="#"
            className={
              label === 'AI tools'
                ? 'is-active'
                : label === "Today's deals"
                  ? 'is-deal'
                  : undefined
            }
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function PromoBar() {
  return (
    <div className="m-promo">
      <div className="p-container m-promo__row">
        <span>
          <strong>Free deployment support</strong> on orders above ₹49,999
        </span>
        <span>
          <strong>Source code guaranteed</strong>
        </span>
        <span>
          <strong>White-label ready</strong>
        </span>
        <span>
          Support <strong>+91 89566 25396</strong>
        </span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="m-hero">
      <div className="p-container m-hero__inner">
        <div>
          <h1>{HERO.title}</h1>
          <p className="m-hero__desc">{HERO.desc}</p>
          <div className="m-actions">
            <button type="button" className="m-btn m-btn--primary">
              {HERO.cta} for {HERO.price}
            </button>
            <a href="#products" className="m-link">
              {HERO.demo}
            </a>
          </div>
          <div className="m-hero__meta">
            <span>
              <Stars value={5} /> {HERO.reviews} reviews
            </span>
            {HERO.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <aside className="m-card m-hero__card">
          <div className="flex flex-wrap gap-2">
            <span className="m-badge">{HERO.badge}</span>
          </div>
          <div className="m-thumb m-thumb--lg">
            <img src={HERO.image} alt="AI voice calling agent interface" />
          </div>
          <div className="m-hero__price">
            <span className="m-price">{HERO.price}</span>
            <s className="m-orig">{HERO.original}</s>
            <span className="m-off">{HERO.off}</span>
          </div>
          <p className="m-hero__sold">{HERO.reviews} sales this month</p>
          <div className="m-dots" aria-hidden="true">
            <span className="is-on" />
            <span />
            <span />
          </div>
        </aside>
      </div>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="m-sidebar" aria-label="Filters">
      <section className="m-card m-filter">
        <h2 className="m-filter__title">Department</h2>
        <ul>
          {DEPARTMENTS.map((item, index) => (
            <li key={item.label}>
              <a href="#" className={`m-filter__item${index === 0 ? ' is-active' : ''}`}>
                <span>{item.label}</span>
                <span className="m-count">{item.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-card m-filter">
        <h2 className="m-filter__title">Price range</h2>
        {PRICE_RANGES.map((range, index) => (
          <label key={range} className="m-check">
            <input type="radio" name="price-range" defaultChecked={index === 0} />
            {range}
          </label>
        ))}
        <div className="m-price-inputs">
          <input type="text" placeholder="Min" aria-label="Minimum price" />
          <span aria-hidden="true">to</span>
          <input type="text" placeholder="Max" aria-label="Maximum price" />
          <button type="button" className="m-btn m-btn--small">
            Apply
          </button>
        </div>
      </section>

      <section className="m-card m-filter">
        <h2 className="m-filter__title">Average customer review</h2>
        {REVIEW_FILTERS.map((item, index) => (
          <div key={item.label} className="m-filter__item">
            <span>
              <Stars value={5 - index} /> {item.label}
            </span>
            <span className="m-count">{item.count}</span>
          </div>
        ))}
      </section>

      <section className="m-card m-filter">
        <h2 className="m-filter__title">Product features</h2>
        {PRODUCT_FEATURES.map((item) => (
          <label key={item.label} className="m-check">
            <input type="checkbox" defaultChecked={item.checked} />
            {item.label}
          </label>
        ))}
      </section>

      <section className="m-card m-filter">
        <h2 className="m-filter__title">Tech stack</h2>
        {TECH_STACK.map((item) => (
          <label key={item} className="m-check">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </section>

      <section className="m-card m-sellbox">
        <h3>Sell your software</h3>
        <p>Earn 70% revenue. 3,400+ buyers waiting.</p>
        <button type="button" className="m-btn m-btn--primary m-btn--small">
          Start selling
        </button>
      </section>
    </aside>
  )
}

function Deals() {
  return (
    <section>
      <div className="m-section-head">
        <h2>Deals of the day</h2>
        <div className="m-section-meta">
          <span className="m-timer">Ends in 08:47:23</span>
          <a href="#" className="m-link">
            See all deals
          </a>
        </div>
      </div>
      <div className="m-deals">
        {DEALS.map((deal) => (
          <article key={deal.name} className="m-card m-deal">
            <div className="m-thumb m-thumb--deal">
              <img src={deal.image} alt={deal.name} loading="lazy" />
            </div>
            <div className="m-deal__body">
              <h3>{deal.name}</h3>
              <div className="m-deal__price">
                <span className="m-price">{deal.price}</span>
                <s className="m-orig">{deal.original}</s>
                <span className="m-off">{deal.off}</span>
              </div>
              <span className="m-progress">
                <span style={{ width: `${deal.claimed}%` }} />
              </span>
              <p className="m-claimed">{deal.claimed}% claimed</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CategoryTiles() {
  return (
    <section id="categories" className="m-cats" aria-label="Browse categories">
      {CATEGORY_TILES.map((item) => (
        <a key={item.label} href="#" className="m-card m-cat">
          <CategoryIcon code={item.code} />
          <span>{item.label}</span>
        </a>
      ))}
    </section>
  )
}

function ResultsBar() {
  return (
    <div className="m-results">
      <p>
        1 to 24 of <strong>200+</strong> results for <strong>“AI software India”</strong>
      </p>
      <div className="m-results__tools">
        <label className="m-sort">
          Sort by
          <select aria-label="Sort products" defaultValue="Most popular">
            <option>Most popular</option>
            <option>Newest arrivals</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Average customer review</option>
          </select>
        </label>
        <div className="m-view" role="group" aria-label="Product view">
          <button type="button" className="is-on" aria-label="Grid view">
            <GridIcon />
          </button>
          <button type="button" aria-label="List view">
            <ListIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

function Banners() {
  return (
    <section className="m-banners">
      {BANNERS.map((banner) => (
        <article key={banner.title} className="m-card m-banner">
          <h2>{banner.title}</h2>
          <p>{banner.text}</p>
          <button type="button" className="m-btn m-btn--small">
            {banner.cta}
          </button>
        </article>
      ))}
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="m-card m-product">
      <div className="m-product__badges">
        {product.badge && <span className="m-badge">{product.badge}</span>}
        {product.secondaryBadge && (
          <span className="m-badge m-badge--line">{product.secondaryBadge}</span>
        )}
      </div>
      <button type="button" className="m-wish" aria-label={`Save ${product.name}`}>
        <HeartIcon />
      </button>
      <div className="m-thumb">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="m-product__body">
        <p className="m-seller">by {product.seller}</p>
        <h3>{product.name}</h3>
        <p className="m-stars">
          <Stars value={product.stars} /> ({product.reviews} reviews)
        </p>
        <p className="flex flex-wrap items-baseline gap-1.5">
          <span className="m-price">{product.price}</span>
          <s className="m-orig">{product.original}</s>
          <span className="m-off">{product.off}</span>
        </p>
        <ul className="m-tags">
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="m-product__actions">
          <button type="button" className="m-btn m-btn--primary m-btn--small">
            Add to cart
          </button>
          <button type="button" className="m-btn m-btn--small">
            Demo
          </button>
        </div>
        <p className="m-prime">{product.prime}</p>
        {product.sponsored && <p className="m-sponsored">Sponsored</p>}
      </div>
    </article>
  )
}

function FrequentlyBought() {
  return (
    <section className="m-card m-fbt">
      <div className="m-fbt__head">
        <h2>Frequently bought together</h2>
        <p>Customers who buy AI Voice Calling Agent also purchase:</p>
      </div>
      <div className="m-fbt__row">
        {FBT.items.map((item, index) => (
          <Fragment key={item.name}>
            {index > 0 && (
              <span className="m-plus" aria-hidden="true">
                +
              </span>
            )}
            <div className="m-fbt__item">
              <span className="m-thumb m-thumb--sm">
                <img src={item.image} alt={item.name} loading="lazy" />
              </span>
              <span>{item.name}</span>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="m-fbt__total">
        <p>
          Total <strong>{FBT.total}</strong>
          <span className="m-save">{FBT.save}</span>
        </p>
        <button type="button" className="m-btn m-btn--primary m-btn--small">
          Add all 3 to cart
        </button>
      </div>
    </section>
  )
}

function RecentlyViewed() {
  return (
    <section>
      <div className="m-section-head">
        <h2>Recently viewed</h2>
        <a href="#" className="m-link">
          See full history
        </a>
      </div>
      <div className="m-recent">
        {RECENTLY_VIEWED.map((item) => (
          <a key={item.name} href="#" className="m-card m-recent__card">
            <span className="m-thumb m-thumb--sm">
              <img src={item.image} alt={item.name} loading="lazy" />
            </span>
            <div>
              <h3>{item.name}</h3>
              <span className="m-price">{item.price}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="m-footer">
      <div className="p-container m-footer__grid">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-container m-footer__bottom">
        <Link href="/" className="m-logo">
          Digit<em>Genie</em>
        </Link>
        <p>© 2026 DigitGenie. Noida, Uttar Pradesh, India.</p>
        <div className="m-footer__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">License</a>
        </div>
      </div>
      <div className="p-container m-footer__credit">
        Photography from{' '}
        <a href="https://unsplash.com" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </div>
    </footer>
  )
}

export default function MarketplaceHome() {
  return (
    <div className="m-home">
      <TopBar />
      <CategoryNav />
      <PromoBar />
      <Hero />
      <div className="p-container m-layout">
        <Sidebar />
        <main className="m-content">
          <Deals />
          <CategoryTiles />
          <ResultsBar />
          <Banners />
          <section id="products" className="m-products" aria-label="Products">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </section>
          <FrequentlyBought />
          <RecentlyViewed />
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
