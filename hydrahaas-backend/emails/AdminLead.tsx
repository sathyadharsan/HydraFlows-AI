import React from 'react';
import { Html, Head, Body, Container, Section, Text, Heading } from '@react-email/components';

export default function AdminLead({ lead }) {
  const { name, email, phone, company, industry, scale, requirement, timeline } = lead;
  
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#020617', color: '#ffffff', fontFamily: 'sans-serif', margin: 'auto', padding: '20px' }}>
        <Container style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '40px', maxWidth: '600px' }}>
          <Heading style={{ color: '#10b981', fontSize: '24px', margin: '0 0 20px 0' }}>🔥 New Lead: {name} — {industry} Sector</Heading>
          
          <Section>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Name:</strong> {name}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Email:</strong> {email}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Phone:</strong> {phone}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Company:</strong> {company}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Industry:</strong> {industry}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Scale:</strong> {scale}</Text>
            <Text style={{ margin: '8px 0', fontSize: '16px' }}><strong>Timeline:</strong> {timeline}</Text>
          </Section>

          <Section style={{ marginTop: '20px', padding: '16px', backgroundColor: '#1e293b', borderRadius: '6px' }}>
            <Text style={{ margin: '0', fontSize: '16px' }}><strong>Requirement:</strong></Text>
            <Text style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: '1.5' }}>{requirement}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
