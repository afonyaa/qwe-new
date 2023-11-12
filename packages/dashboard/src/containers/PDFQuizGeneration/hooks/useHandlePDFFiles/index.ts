// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { ChangeEventHandler, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?worker';

window.pdfjsWorker = pdfjsWorker;
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const useHandlePDFFiles = () => {
  const [PDFParseLoading, setPDFParseLoading] = useState(false);
  const [extractedText, setExtractedText] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePDFFileChange: ChangeEventHandler<HTMLInputElement> = () => {
    setPDFParseLoading(true);
    if (fileInputRef?.current) {
      const file = fileInputRef.current.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (event: ProgressEvent<FileReader>) => {
          const arrayBuffer = event?.target?.result;
          if (arrayBuffer) {
            const pdfData = new Uint8Array(arrayBuffer as ArrayBuffer);
            extractText(pdfData)
              .then(
                function (text: string) {
                  setExtractedText(text);
                },
                function (reason) {
                  console.error(reason);
                },
              )
              .finally(() => {
                setPDFParseLoading(false);
              });
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
  };

  const extractText = (pdfUrl) => {
    const pdf = pdfjs.getDocument(pdfUrl);
    return pdf.promise.then(function (pdf) {
      const totalPageCount = pdf.numPages;
      const countPromises = [];
      for (let currentPage = 1; currentPage <= totalPageCount; currentPage++) {
        const page = pdf.getPage(currentPage);
        countPromises.push(
          page.then(function (page) {
            const textContent = page.getTextContent();
            return textContent.then(function (text) {
              return text.items
                .map(function (s) {
                  return s.str;
                })
                .join('');
            });
          }),
        );
      }

      return Promise.all(countPromises)
        .then(function (texts) {
          return texts.join('');
        })
        .catch((error) => error);
    });
  };

  return { handlePDFFileChange, extractedText, PDFParseLoading, fileInputRef };
};
