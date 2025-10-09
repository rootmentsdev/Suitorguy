// Google Apps Script Code for Contact Form
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById('1hyvfeUkIJKcx5dwJKvQbKylE95wtAnYpb5JIxHPoCgU');
    const sheet = spreadsheet.getSheetByName('Enquiry Sheet') || spreadsheet.getActiveSheet();
    
    // Prepare the data to insert
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ];
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = ['Timestamp', 'Full Name', 'Email', 'Phone', 'Message'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Append the new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Enquiry submitted successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: 'Error submitting enquiry: ' + error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: 'Contact form API is running'}))
    .setMimeType(ContentService.MimeType.JSON);
}
