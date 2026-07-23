import test from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";
import { ExcelReader } from "../utils/ExcelReader";


test('Search for flights', async ({page})=>{


    //TC1: Search for a flight by getting the data from excel
    const searchPage = new SearchPage(page);

    interface flight{
         Departure: string;
    Destination: string;
    }

    const excelReader= ExcelReader.readExcel("testData","TavelPlanTestData.xlsx","sheet1") as flight[];
    const flight= excelReader[0];

    await searchPage.navigateToURL();
    await page.waitForLoadState()
    await page.getByRole('combobox').first().selectOption(flight.Departure as string)
    await page.getByRole('combobox').last().selectOption(flight.Destination as string)
    await page.locator("div input.btn.btn-primary").click();

    //TC2: Identify the least price and click on that book button
    const totalRows=await page.locator(".table tbody tr").count();
    console.log(`Total Rows is ${totalRows}`);
    let leastPrice=Number.MAX_VALUE;
    let childPosition=0;

    for(let i=1;i<=totalRows;i++){

        const price = Number((await page.locator(`.table tbody tr:nth-child(${i}) td:nth-child(7)`).innerText()).replace(/[$,]/g,''))
        if(price<leastPrice){
            leastPrice=price;
            childPosition=i;
        }
    }
    console.log(`child position is ${childPosition}`);
    console.log(`Least flight price is ${leastPrice}`);
    await page.locator(`.table tbody tr:nth-child(${childPosition}) td:nth-child(2) input`).click();
    await page.waitForTimeout(4000)
    

})