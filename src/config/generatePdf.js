const ejs = require('ejs');
const path = require('path');
const Promise = require('bluebird');
const pdf = Promise.promisifyAll(require('html-pdf'));
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const generatePdf = async (userPaymentDetail) => {
  const name = await ejs
    .renderFile(path.join(__dirname, './', 'billTemplate.ejs'), { userPaymentDetail })
    .then(async (data) => {
      const res = await pdf.createAsync(data, { format: 'A4', filename: `report_${userPaymentDetail.user._id}.pdf` });
      return res.filename;
    })
    .catch((err) => {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message);
    });
  return name;
};

module.exports = { generatePdf };
