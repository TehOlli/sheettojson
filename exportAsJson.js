function exportAsJson() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var rowCount = rows.getNumRows();
  var values = rows.getValues();
  
  var json = "";
  json += "{\""+sheet.getName()+"\" : {\n";
  for (var i = 0; i < rowCount; i++) {
    if (i > 0) json += " , \n";
    var row = values[i];
    json += "\""+row[0]+"\" : " + "\""+row[1]+"\"";
  }
  json += "\n}}";
  
  DriveApp.createFile(sheet.getName()+".json", json, MimeType.PLAIN_TEXT);
  
};