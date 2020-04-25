const input = document.querySelector('#excel')
const btn = document.querySelector('#uploadExcel')
const result = document.querySelector('#results')

var excelFile;

input.addEventListener('change', (e) => {
  excelFile = e.target.files[0]
})


btn.addEventListener('click', () => {
  if(excelFile) {
    console.log('Starting converting file ...')
    var fileReader = new FileReader();
    
    console.log('fileReader', fileReader)
    fileReader.onload = function(e) {
      
      // Get Binary data 
      var data = e.target.result;
      console.log("data binary", data)

      // Get Workbook data from binary
      var workbook = XLSX.read(data, {type: "binary"})
      console.log('Workbook convert', workbook)

      // Get data from each Sheet in workbook
      workbook.SheetNames.forEach(sheet => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
        console.log('RowObject', rowObject)

        result.innerHTML = JSON.stringify(rowObject)
      })

    }
  }
  fileReader.readAsBinaryString(excelFile)
})