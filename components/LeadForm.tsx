'use client';

import Script from 'next/script';

// Embedded LeadConnector (GoHighLevel) form. Submissions are delivered by the
// client's own LeadConnector account — no API key and no inbox access needed.
const FORM_ID = 'FWUxhWEUzaeQjirtGXmn';

export function LeadForm({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: '100%', minHeight: 600, border: 'none', borderRadius: 8 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 0"
        data-height="443"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Free Estimate Request Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
