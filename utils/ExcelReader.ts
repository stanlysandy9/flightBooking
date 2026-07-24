import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

export class ExcelReader{
    static readExcel(testDataFolder:string,fileName:string, sheetName?:string){
        const filepath=path.join(process.cwd(), testDataFolder, fileName)
        const workbook=XLSX.readFile(filepath)

        const sheet=sheetName? workbook.Sheets[sheetName]:workbook.Sheets[workbook.SheetNames[0]]

        const data=XLSX.utils.sheet_to_json(sheet);
        return data;

    }
    //D:\playwrightAutomation\flightbooking\testData\apiPostData.txt
    static readFileData(filePath:string){
        return  JSON.parse(fs.readFileSync(path.join(process.cwd(),filePath),"utf-8"))

    }
}

 