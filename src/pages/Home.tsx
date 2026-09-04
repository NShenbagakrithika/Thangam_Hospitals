import { Link } from "react-router-dom";
import { Container, Section, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { departments, branches, site } from "@/data";

const actions = [
  { icon: "user", title: "I’d like to see a doctor", detail: "Find your specialist", to: "/doctors" },
  { icon: "home", title: "I need care at home", detail: "Arrange a home visit", to: "/services/home-visits" },
  { icon: "mapPin", title: "I’m planning a visit", detail: "Timings & useful information", to: "/patient-information" },
];

export default function Home() {
  return (
    <div className="editorial-home">
      <section className="neighbourhood-hero" aria-labelledby="welcome-heading">

        <Container className="neighbourhood-container">
          <div className="neighbourhood-opening">
            <div className="neighbourhood-intro">
        <svg className="hero-medical-watermark" viewBox="0 0 600 720" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" focusable="false">
          <g fill="currentColor">
            <path d="M282 183C232 131 168 114 54 87c16 59 63 102 128 113-45 2-78-7-107-20 24 48 71 72 136 69-30 13-62 15-91 9 31 38 81 47 139 26l23-25Z" />
            <path d="M318 183C368 131 432 114 546 87c-16 59-63 102-128 113 45 2 78-7 107-20-24 48-71 72-136 69 30 13 62 15 91 9-31 38-81 47-139 26l-23-25Z" />
            <circle cx="300" cy="69" r="23" />
          </g>
          <g stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
            <path d="M300 105v549" />
            <path d="M255 270c-69 4-78 61-18 93l126 67c52 28 39 69-15 94l-84 40c-36 17-31 43 13 64" />
            <path d="M345 270c69 4 78 61 18 93l-126 67c-52 28-39 69 15 94l84 40c36 17 31 43-13 64" />
          </g>
        </svg>
              <h1 id="welcome-heading" className="hero-brand-promise">Care for your family.<br /><span>Here in Tamilnadu.</span></h1>
              <p className="neighbourhood-copy">At Thangam Hospitals, find specialist consultations, care for older adults and home visits. We’ll help you plan the care your family needs.</p>
              <div className="hero-actions"><Button to="/appointment" iconRight="arrowRight" className="neighbourhood-book">Request an appointment</Button><Button to="/doctors" variant="tertiary">Find a doctor</Button></div>
              <p className="hero-contact">Prefer to speak to us? <a href={`tel:${site.helpline}`}>{site.helplineDisplay}</a></p>

            </div>
            <div className="hero-placeholder-wrap">
        <svg className="hero-medical-watermark hero-medical-watermark-right" viewBox="0 0 600 720" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" focusable="false">
          <g fill="currentColor">
            <path d="M282 183C232 131 168 114 54 87c16 59 63 102 128 113-45 2-78-7-107-20 24 48 71 72 136 69-30 13-62 15-91 9 31 38 81 47 139 26l23-25Z" />
            <path d="M318 183C368 131 432 114 546 87c-16 59-63 102-128 113 45 2 78-7 107-20-24 48-71 72-136 69 30 13 62 15 91 9-31 38-81 47-139 26l-23-25Z" />
            <circle cx="300" cy="69" r="23" />
          </g>
          <g stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
            <path d="M300 105v549" />
            <path d="M255 270c-69 4-78 61-18 93l126 67c52 28 39 69-15 94l-84 40c-36 17-31 43 13 64" />
            <path d="M345 270c69 4 78 61 18 93l-126 67c-52 28-39 69 15 94l84 40c36 17 31 43-13 64" />
          </g>
        </svg>
            <div className="hospital-photo hero-photo-placeholder" role="img" aria-label="Hospital photography placeholder">
              <span>Image placeholder</span>
            </div>
            </div>
          </div>
          <nav className="brand-care-signature" aria-label="What defines Thangam care">
            <Link to="/services/home-visits"><Icon name="home" className="h-5 w-5" /><span><strong>Home visits</strong><small>Thoughtful care at your doorstep</small></span></Link>
            <Link to="/services/rural-health"><Icon name="users" className="h-5 w-5" /><span><strong>Rural health</strong><small>Reaching our nearby communities</small></span></Link>
            <Link to="/departments"><Icon name="heartPulse" className="h-5 w-5" /><span><strong>Every generation</strong><small>From first steps to later years</small></span></Link>
          </nav>
        </Container>
      </section>

      <Section id="care-options" className="care-options">
        <Container>
          <h2>How can we help you?</h2>
          <nav aria-label="Find care" className="care-options-grid">
            {actions.map(action => <Link key={action.to} to={action.to} className="care-option"><span className="help-card-icon"><Icon name={action.icon} className="h-6 w-6" /></span><span><strong>{action.title}</strong><small>{action.detail}</small></span><Icon name="arrowRight" className="h-5 w-5" /></Link>)}
          </nav>
        </Container>
      </Section>

      <Section className="editorial-specialities">
        <Container>
          <div className="section-heading"><h2>Find your department</h2><p>From everyday check-ups to specialist support, find the care your family needs.</p></div>
          <div className="speciality-list">{departments.filter(d => d.featured).map(department => <Link key={department.slug} to={`/departments/${department.slug}`} className="speciality-row"><Icon name={department.icon} className="speciality-icon" /><span><h3>{department.name}</h3><p>{department.tagline}</p></span><Icon name="arrowRight" className="h-4 w-4" /></Link>)}</div>
          <div className="section-action"><Button to="/departments" variant="tertiary" iconRight="arrowRight">Explore all departments</Button></div>
        </Container>
      </Section>

      <Section className="elder-story">
        <Container>
          <div className="section-heading"><h2>Helping our elders live well</h2><p>Personal care that supports health, independence and everyday confidence.</p></div>
          <div className="elder-layout">
            <div className="elder-portrait elder-photo-placeholder" role="img" aria-label="Elder-care photography placeholder"><span>Image placeholder</span></div>
            <div className="elder-copy"><p className="elder-introduction">The people who’ve always cared for us deserve thoughtful care of their own.</p><p className="editorial-copy">Our geriatric team brings health, mobility and family support together, with a plan that fits each person’s life.</p><ul className="elder-support"><li><Icon name="check" />Personalised health assessments</li><li><Icon name="check" />Mobility and independence support</li><li><Icon name="check" />Guidance for the whole family</li></ul><div className="elder-actions"><Button to="/geriatric-care" iconRight="arrowRight">Explore geriatric care</Button><Link to="/services/home-visits">Need a home visit? <span aria-hidden="true">↗</span></Link></div></div>
          </div>
        </Container>
      </Section>

      <Section className="community-section">
        <Container>
          <div className="section-heading"><h2>Good care, in your neighbourhood</h2><p>Visit us in Kandigai or Urapakkam. We’ll help you take the next step.</p></div>
          <div className="community-grid">{branches.map(branch => <article key={branch.id} className="branch-row"><div className="branch-name"><Icon name="mapPin" className="h-6 w-6" /><h3>{branch.name}</h3></div><p>{branch.address}</p><div className="flex flex-wrap gap-x-6 gap-y-3"><Button href={branch.directionsUrl} variant="tertiary" iconRight="arrowRight">Get directions</Button><a href={`tel:${branch.phone}`} className="branch-phone">{branch.phoneDisplay}</a></div></article>)}</div>
          <div className="community-outreach"><p>Our care also reaches homes and nearby communities.</p><Button to="/services/rural-health" variant="tertiary" iconRight="arrowRight">Discover our community work</Button></div>
        </Container>
      </Section>

      <Section className="editorial-contact">
        <Container>
          <div className="contact-panel">
            <div className="contact-copy">
              <h2>Let’s find the right care for you.</h2>
              <p>We’ll help you choose a doctor, plan a visit or arrange care at home.</p>
            </div>
            <div className="contact-actions"><Button to="/callback" variant="gold" iconRight="arrowRight">Request a callback</Button><a className="contact-phone" href={`tel:${site.helpline}`}><Icon name="phone" className="h-5 w-5" /><span><small>Prefer to speak to us?</small><strong>{site.helplineDisplay}</strong></span></a></div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
