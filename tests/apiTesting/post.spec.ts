import { expect,test } from '@playwright/test';
import { ExcelReader } from '../../utils/ExcelReader';

test('Post API and data validation',async ({request}) => {

    const apiPostData = ExcelReader.readFileData("testData/apiPostData.txt")
    
    const response = await request.post('https://api.restful-api.dev/objects', {
        data:apiPostData
    })

    const responseJson = await response.json();

    //console.log(responseJson)

    //Status
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy();

    //Properties
    expect(responseJson).toHaveProperty('id');
    expect(responseJson).toHaveProperty('createdAt')

    //Values
    expect(responseJson.name).toBe(apiPostData.name)
    expect(responseJson.data.user).toEqual(apiPostData.data.user)

    const responseID= responseJson.id
    console.log(`Response ID is ${responseID}`)


    //Deleting the posted data
    const deleteReq= await request.delete(`https://api.restful-api.dev/objects/${responseID}`)
    const deleteReqJson= await deleteReq.json()
    console.log(deleteReqJson)
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy();
    expect(deleteReqJson).toHaveProperty('message',`Object with id = ${responseID} has been deleted.`)
});