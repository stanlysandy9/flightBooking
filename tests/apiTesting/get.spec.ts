import {test,expect} from "@playwright/test";

test("Get API call and data validation", async ({request})=>{

    const response= await request.get('https://api.restful-api.dev/objects')

    //console.log(response)
    
    const responseJson= await response.json();
    console.log(responseJson)

    //Data validation

    //Status
     expect(response.status()).toBe(200);
     expect(response.ok()).toBeTruthy();
    
    //Headers
     expect(response.headers()['content-type']).toContain('application/json')

    //Properties
     expect(responseJson[0]).toHaveProperty('id');
     expect(responseJson[0]).toHaveProperty('name');
     expect(responseJson[0]).toHaveProperty("data");
     expect(responseJson[0]).toHaveProperty("data.color");

    //Values
     expect(responseJson[0].id).toBe('1')
     expect(responseJson[0].name).toBe("Google Pixel 6 Pro")

    //Types
     expect.soft(typeof responseJson[3].data.price).toBe('number')
     expect(typeof responseJson[0].name).toBe('string')
})