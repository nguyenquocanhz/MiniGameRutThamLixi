function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Thêm dòng mới vào Sheet
    sheet.appendRow([
      data.timestamp,
      data.bankName,
      data.accountNumber,
      data.accountName,
      data.branch,
      data.qrLink,
      data.note,
      data.amount
    ]);
    
    // Trả về kết quả thành công
    return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Trả về lỗi nếu có
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
