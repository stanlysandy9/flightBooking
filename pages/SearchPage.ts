import { Locator, Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class SearchPage{
  
    readonly page:Page;
    readonly depart:Locator;
    readonly arrival:Locator;
    readonly findBtm:Locator;

    constructor (page:Page){

        this.page=page;
        this.depart=page.locator("//select[@name='fromPort']")
        this.arrival=page.locator("//select[@name='toPort']")
        this.findBtm=page.locator("//input[@type='submit']")
    }

    async navigateToURL(){
        await this.page.goto(process.env.URL1!)

    }
    async searchFlights(){

        await this.depart.selectOption('Boston')
        await this.arrival.selectOption('New York')
        await this.findBtm.click()
    }
}