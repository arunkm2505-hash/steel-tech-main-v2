import { ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ClipReveal, Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { SiteImage } from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import { products } from "@/data/site";
import { productIcons } from "@/lib/productIcons";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <NotFound />;

  const Icon = productIcons[product.icon];
  const siblings = products.filter((p) => p.slug !== product.slug);
  const quoteHref = `/contact?product=${encodeURIComponent(product.name)}`;
  const documentsHref = `${quoteHref}&request=documents`;

  return (
    <Layout>
      <PageHero index={product.no} section={product.name} parent={{ label: "Products", href: "/products" }} eyebrow={product.tag} title={product.name} lead={product.intro} />

      <section className="section">
        <div className="container detail-grid">
          <ClipReveal className="detail-media">
            <SiteImage src={product.image} alt={product.imageAlt} label={product.tag} icon={Icon} loading="eager" />
          </ClipReveal>

          <div>
            <Reveal className="detail-block">
              <h2 className="eyebrow">Built in</h2>
              <ul className="check-list">
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="detail-block" delay={0.05}>
              <h2 className="eyebrow">Where it's used</h2>
              <div className="chip-row">
                {product.applications.map((app) => (
                  <span className="chip" key={app}>
                    {app}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="detail-block" delay={0.1}>
              <h2 className="eyebrow">Next step</h2>
              <p className="body-copy" style={{ marginBottom: 24 }}>
                Share your opening sizes, quantities and site location, and we will confirm the suitable configuration and prepare a quote.
              </p>
              <Link className="btn btn-red" href={quoteHref}>
                Enquire about this system
                <span className="btn-icon">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Product specifications</p>
            <h2 className="display-md">Specify the right configuration.</h2>
            <p className="body-copy">Confirm project dimensions and performance requirements with our team. Any unlisted or configuration-dependent value should be checked against current product documents.</p>
          </Reveal>
          <RevealStagger as="ul" className="spec-list" stagger={0.04}>
            {product.specs.map((spec) => (
              <motion.li variants={staggerItem} key={spec.label}>
                <b>{spec.label}</b>
                <span>{spec.value}</span>
              </motion.li>
            ))}
          </RevealStagger>
          <Reveal className="detail-documents">
            <h3>Datasheets and certificates</h3>
            <p>Ask SteelTech for the current datasheet and any applicable test certificates for this product configuration.</p>
            <Link className="text-link" href={documentsHref}>
              Request product documents <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">In closer detail</p>
            <h2 className="display-md">Product gallery.</h2>
          </Reveal>
          <div className="product-gallery">
            {product.gallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
          {product.slug === "general-purpose-doors" && (
            <Reveal>
              <Link className="text-link" href={documentsHref}>
                Request the design and panelling catalogue <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          )}
          <Reveal className="detail-reference">
            <h3>Project references</h3>
            <p>Browse our client sectors or request a reference relevant to this door system.</p>
            <Link className="text-link" href="/clientele">
              Explore our clientele <ArrowUpRight size={16} />
            </Link>
            <Link className="text-link" href={`${quoteHref}&request=project-reference`}>
              Request a product reference <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Explore the other systems</p>
          </Reveal>
          <RevealStagger key={product.slug} className="sibling-grid">
            {siblings.map((sibling) => (
              <motion.div variants={staggerItem} key={sibling.slug}>
                <Link href={`/products/${sibling.slug}`} className="product-card">
                  <div className="product-card-media">
                    <SiteImage src={sibling.image} alt={sibling.imageAlt} label={sibling.tag} />
                    <span className="p-no">{sibling.no}</span>
                  </div>
                  <div className="product-card-body">
                    <span className="p-tag">{sibling.tag}</span>
                    <h3>{sibling.name}</h3>
                    <span className="p-cta">
                      View {sibling.name}
                      <span className="arrow">
                        <ArrowUpRight size={16} />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CTASection
        title={
          <>
            Let's plan
            <br />
            <span>your opening.</span>
          </>
        }
      />
    </Layout>
  );
}
