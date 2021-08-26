import React from 'react'
import jsPDF from 'jspdf'
import { Button } from 'react'



const Data = () => {

    const pdfDownload = e => {
        e.preventDefault()
        let doc = new jsPDF("landscape", 'pt', 'A4');
        doc.html(document.getElementById('pdf-view'), {
          callback: () => {
            doc.save('AJF ResumeFE.pdf');
          }
        });
    }
      return (
        <div>
          <div id="pdf-view">
            <h1 style={{color: '#33959a'}}>Testing html to pdf converter</h1>
          </div>
          <Button onClick={pdfDownload}>Download as pdf</Button>
        </div>
      );
  }
  
  export default Data;