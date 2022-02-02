import React, { useEffect } from 'react';

import CIndex from '../components/components.index.js';

const ContactPageContent = () => {
  const { ContactForm } = CIndex;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactPageContent;
