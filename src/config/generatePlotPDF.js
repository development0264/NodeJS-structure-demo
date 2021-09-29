const ejs = require('ejs');
const path = require('path');
const Promise = require('bluebird');
const pdf = Promise.promisifyAll(require('html-pdf'));
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const generatePlotPdf = async (template, pdfData) => {
  const name = await ejs
    .renderFile(path.join(__dirname, './templatePDF/', `plotPDFTemplate.ejs`), {
      pdfData,
    })
    .then(async (data) => {
      const res = await pdf.createAsync(data, {
        format: 'A4',
        filename: `./exportPlotReports/report_${pdfData.id}.pdf`,
        orientation: 'landscape',
      });
      return res.filename;
    })
    .catch((err) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message);
    });
  return name;
};

module.exports = { generatePlotPdf };
