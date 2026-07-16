import { useRef, useState } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Home,
  Leaf,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'
import heroImage from './assets/images/hero.jpg'
import standardImage from './assets/images/standard-cleaning.jpg'
import deepImage from './assets/images/deep-cleaning.jpg'
import moveImage from './assets/images/move-cleaning.jpg'
import recurringImage from './assets/images/recurring-cleaning.jpg'
import constructionImage from './assets/images/post-construction.jpg'
import careImage from './assets/images/care.jpg'
import serviceAreaImage from './assets/images/service-area.jpg'

const navItems = [
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['Service Area', '#service-area'],
  ['FAQ', '#faq'],
]

const trustItems = [
  [ClipboardCheck, 'Clear pricing process'],
  [Leaf, 'Pet-friendly options'],
  [CalendarDays, 'Recurring service plans'],
  [MessageCircle, 'Thoughtful communication'],
]

const services = [
  {
    name: 'Standard Cleaning',
    description: 'Reliable upkeep for kitchens, bathrooms, bedrooms, and shared spaces.',
    image: standardImage,
    alt: 'A clean kitchen counter with warm natural light and simple ceramic details.',
  },
  {
    name: 'Deep Cleaning',
    description: 'A detailed top-to-bottom reset for homes that need extra attention.',
    image: deepImage,
    alt: 'A bright, freshly cleaned bathroom with a white bathtub and polished fixtures.',
  },
  {
    name: 'Move-In / Move-Out',
    description: 'Focused cleaning for an empty home before keys change hands.',
    image: moveImage,
    alt: 'An empty, freshly cleaned room with moving boxes near a sunlit window.',
  },
  {
    name: 'Recurring Cleaning',
    description: 'Weekly, biweekly, or monthly care for a consistently comfortable home.',
    image: recurringImage,
    alt: 'A calm bedroom with a neatly made bed and neutral linen bedding.',
    featured: true,
  },
  {
    name: 'Post-Construction',
    description: 'Fine-dust and surface cleaning after renovation work is complete.',
    image: constructionImage,
    alt: 'A bright renovated room with a wooden ladder and clean finished surfaces.',
  },
]

const carePoints = [
  [FileText, 'A clear scope before scheduling'],
  [Home, 'Thoughtful care for your home and surfaces'],
  [MessageCircle, 'Updates that keep you informed'],
]

const processSteps = [
  [ClipboardCheck, 'Request a quote', 'Tell us about your home, preferred service, and schedule.'],
  [CalendarCheck, 'Confirm the plan', 'Review the scope and choose a visit that works for you.'],
  [ShieldCheck, 'Enjoy your space', 'Return to a home that feels calm, cared for, and ready to enjoy.'],
]

const faqs = [
  ['Do I need to be home during the cleaning?', 'No. Access details can be confirmed before the visit, and the team follows the agreed checklist while you are away.'],
  ['Do you bring cleaning supplies?', 'Yes. The team arrives with the supplies and equipment needed for the selected service. Product preferences can be noted in the quote request.'],
  ['Are pet-friendly products available?', 'Pet-friendly options are available. Share sensitivities, surface-care needs, and pet information before the visit.'],
  ['How does pricing work?', 'Each quote is based on the home size, condition, selected service, frequency, and requested extras. The scope is confirmed before scheduling.'],
  ['Can I book recurring service?', 'Yes. Weekly, biweekly, and monthly options are available after the initial service needs are reviewed.'],
]

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function openMenu() {
    setMenuOpen(true)
    menuRef.current?.showModal()
  }

  function closeMenu() {
    menuRef.current?.close()
    setMenuOpen(false)
  }

  return (
    <>
      <span className="top-anchor" id="top" />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <p className="concept-bar">Portfolio concept — fictional business and content</p>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-name">Limestone &amp; Linen</span>
            <Leaf aria-hidden="true" size={21} strokeWidth={1.6} />
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navItems.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <a className="button header-cta" href="#quote">Get a Free Quote</a>
          <button className="menu-button" type="button" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={openMenu}>
            <Menu aria-hidden="true" size={25} />
          </button>
        </div>

        <dialog className="mobile-menu" ref={menuRef} onClose={() => setMenuOpen(false)} onCancel={() => setMenuOpen(false)}>
          <div className="mobile-menu-inner" id="mobile-navigation">
            <div className="mobile-menu-header">
              <a className="brand" href="#top" onClick={closeMenu}>
                <span className="brand-name">Limestone &amp; Linen</span>
                <Leaf aria-hidden="true" size={20} strokeWidth={1.6} />
              </a>
              <button className="menu-close" type="button" aria-label="Close menu" onClick={closeMenu} autoFocus>
                <X aria-hidden="true" size={26} />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav-list">
                {navItems.map(([label, href]) => (
                  <li key={href}><a href={href} onClick={closeMenu}>{label}</a></li>
                ))}
              </ul>
            </nav>
            <a className="button mobile-menu-cta" href="#quote" onClick={closeMenu}>Get a Free Quote</a>
            <p>Serving Austin and nearby communities</p>
          </div>
        </dialog>
      </header>

      <main id="main-content" tabIndex="-1">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Residential cleaning across Austin</p>
              <h1>A calmer home, thoughtfully cleaned.</h1>
              <p className="lead">
                Reliable residential cleaning for busy Austin households — with clear
                communication, thoughtful care, and a plan that fits your home.
              </p>
              <div className="actions">
                <a className="button" href="#quote">Get a Free Quote</a>
                <a className="text-link" href="#services">View Services <ArrowRight aria-hidden="true" size={18} /></a>
              </div>
              <p className="quiet">Serving Austin and nearby communities</p>
            </div>
            <img className="hero-image" src={heroImage} alt="A warm Austin living room with linen furniture, limestone details, and abundant natural light." width="512" height="286" fetchPriority="high" />
          </div>
        </section>

        <section className="trust-strip" aria-label="Service qualities">
          <div className="container trust-grid">
            {trustItems.map(([Icon, label]) => (
              <div className="trust-item" key={label}>
                <Icon aria-hidden="true" size={30} strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading centered">
              <h2>Cleaning that fits the way you live</h2>
              <span className="accent-line" aria-hidden="true" />
              <p>Choose the level of care your home needs today — from consistent upkeep to a complete reset.</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card${service.featured ? ' featured' : ''}`} key={service.name}>
                  <img src={service.image} alt={service.alt} width="512" height="286" loading="lazy" />
                  <div className="service-card-copy">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="why-us">
          <div className="story-grid">
            <img className="story-image" src={careImage} alt="A cleaning professional carefully wiping a wooden table in a bright residential home." width="512" height="279" loading="lazy" />
            <div className="story-copy">
              <p className="eyebrow">Care without the uncertainty</p>
              <h2>Care you can see. Communication you can count on.</h2>
              <p className="lead">From the first quote to the final walkthrough, every step is designed to feel clear, respectful, and easy to manage.</p>
              <ul className="care-list">
                {carePoints.map(([Icon, label]) => (
                  <li key={label}><Icon aria-hidden="true" size={24} strokeWidth={1.5} /><span>{label}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading centered"><h2>A simpler path to a cleaner home</h2></div>
            <ol className="process-grid">
              {processSteps.map(([Icon, title, description], index) => (
                <li key={title}>
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" size={38} strokeWidth={1.4} />
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-area" id="service-area">
          <div className="container service-area-grid">
            <div>
              <h2>Proudly serving Austin-area homes</h2>
              <span className="accent-line" aria-hidden="true" />
              <p>Not sure whether your neighborhood is covered? Send us your ZIP code.</p>
            </div>
            <img src={serviceAreaImage} alt="Stylized map showing Austin, Cedar Park, Round Rock, Pflugerville, Bee Cave, and Lakeway." width="512" height="286" loading="lazy" />
          </div>
        </section>

        <section className="contact-section" id="faq">
          <div className="container contact-grid">
            <div className="faq-column">
              <h2>Questions before your first clean?</h2>
              <span className="accent-line" aria-hidden="true" />
              <div className="faq-list">
                {faqs.map(([question, answer], index) => (
                  <details key={question} defaultOpen={index === 0}>
                    <summary>{question}<span aria-hidden="true" /></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="quote-column" id="quote">
              <h2>Tell us what your home needs</h2>
              <span className="accent-line" aria-hidden="true" />
              <p>Share a few details and we’ll help you choose the right service.</p>

              <form className="quote-form" onSubmit={handleSubmit} onInput={() => submitted && setSubmitted(false)}>
                <div className="field-grid">
                  <label>Name<input name="name" autoComplete="name" required /></label>
                  <label>Email<input type="email" name="email" autoComplete="email" spellCheck="false" required /></label>
                  <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
                  <label>ZIP Code<input name="zip" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" title="Enter a five-digit ZIP code" required /></label>
                </div>
                <label>Service
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service.name}>
                        {service.name === 'Move-In / Move-Out' || service.name === 'Post-Construction'
                          ? `${service.name} Cleaning`
                          : service.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>Tell us about your home
                  <textarea name="details" rows="4" placeholder="Any details that help us understand your space and needs…" />
                </label>
                <button className="button form-button" type="submit">Request My Free Quote</button>
                <p className="form-note"><LockKeyhole aria-hidden="true" size={13} /> Demo form — no information is submitted.</p>
                <p className="form-success" role="status" aria-live="polite">{submitted ? 'Thanks — the demo request is complete. No data was sent.' : ''}</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span>Limestone &amp; Linen</span>
            <Leaf aria-hidden="true" size={21} strokeWidth={1.5} />
            <strong>Home Cleaning</strong>
            <p>A calmer home, thoughtfully cleaned.</p>
          </div>
          <div><h2>Contact</h2><p><Phone aria-hidden="true" size={15} /> <a href="tel:+15125550147">(512) 555-0147</a></p><p><Mail aria-hidden="true" size={15} /> <a href="mailto:hello.limestoneandlinen@example.com">hello.limestoneandlinen@example.com</a></p></div>
          <div><h2>Hours</h2><p>Mon–Fri 8:00 AM–6:00 PM<br />Sat 9:00 AM–2:00 PM</p></div>
          <div><h2>Service Area</h2><p>Austin and nearby communities</p></div>
        </div>
        <p className="container disclosure">Portfolio concept — fictional business, team, services, and content.</p>
      </footer>
    </>
  )
}

export default App
