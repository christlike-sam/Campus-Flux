import React, { useEffect, useState } from 'react';

export default function Signup() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./Signup.html')
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return (
    <div className="html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
