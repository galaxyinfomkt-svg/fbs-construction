'use client';

import Script from 'next/script';

// Embedded LeadConnector (GoHighLevel) form. Submissions are delivered by the
// client's own LeadConnector account — no API key and no inbox access needed.
const FORM_ID = 'FWUxhWEUzaeQjirtGXmn';

// `instance` keeps iframe ids unique when the form appears more than once on a
// page (the home has one under the hero and one at the end); the embed script
// resizes each iframe by its id.
export function LeadForm({ className, instance }: { className?: string; instance?: string }) {
  const iframeId = instance ? `inline-${FORM_ID}-${instance}` : `inline-${FORM_ID}`;
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        // The embed script resizes the iframe to the form's real height once it loads
        // (checked: 702px desktop / 727px phone with the bot check). 480 is only the placeholder.
        style={{ width: '100%', minHeight: 480, border: 'none', borderRadius: 8, background: 'transparent' }}
        allowTransparency
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 0"
        data-height="443"
        data-layout-iframe-id={iframeId}
        data-form-id={FORM_ID}
        title="Free Estimate Request Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
