import React from 'react';
import { Html, Head, Body, Container, Section, Text, Heading, Link } from '@react-email/components';

export default function CustomerThanks({ name }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#020617', color: '#ffffff', fontFamily: 'sans-serif', margin: 'auto', padding: '20px' }}>
        <Container style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '40px', maxWidth: '600px', textAlign: 'center' }}>
          <Heading style={{ color: '#10b981', fontSize: '24px', marginTop: '0' }}>Thank you {name}!</Heading>
          
          <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#cbd5e1' }}>
            We've received your request and our team at HydraFlows AI will be reviewing it shortly.
            We promise to get back to you within the next 24 hours.
          </Text>

          <Section style={{ marginTop: '32px', marginBottom: '32px' }}>
            <Text style={{ fontSize: '14px', color: '#94a3b8' }}>What happens next?</Text>
            <Text style={{ fontSize: '16px', color: '#cbd5e1' }}>One of our AI solutions architects will contact you to discuss your specific requirements and outline potential architectures for your business.</Text>
          </Section>

          <Section style={{ borderTop: '1px solid #1e293b', paddingTop: '24px' }}>
            <Text style={{ fontSize: '14px', color: '#94a3b8', margin: '4px 0' }}>HydraFlows AI Platform</Text>
            <Text style={{ fontSize: '14px', color: '#94a3b8', margin: '4px 0' }}>
              <Link href="https://hydra-flows-ai.vercel.app" style={{ color: '#10b981', textDecoration: 'none' }}>Visit our Website</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
