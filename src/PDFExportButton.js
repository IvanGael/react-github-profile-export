// PDFExportButton.js
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function PDFExportButton({ data }) {
  const exportPDF = () => {
    const profileSection = document.getElementById('profile-section');
    if (!profileSection) {
      console.error('Profile section not found');
      return;
    }

    html2canvas(profileSection).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        format: 'letter'
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${data.login}_profile.pdf`);
    });
  };

  return (
    <button onClick={exportPDF}>Export as PDF</button>
  );
}

export default PDFExportButton;
