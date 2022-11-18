# CoffeeStockApp

This project is run as a management system for managing coffee stock.

Some things to note!

I have struggled with some of the plugins as a lot of the packages are deprecated. I do not mind debugging these things, however this takes time and unfortunately we are currently very busy at work, so please forgive some of the following things that are not in working order:

1. My first priority was to get the database up and running. However this proved to be a lot more challenging than I had anticipated. Due to this I did not get around to implementing the login service properly. In this case I simply created an auth gaurd that checks for a logged in status in the device storage.

2. The barcode scanner does not return actual data, rather it returns the barcode unique identified number. If I am not mistaken this unique identifier needs to be sent through an api request to ge actual data. In this case the data for adding a flavour is not manually added.

3. The image upload is not working, however I do save a blob as the photoname for each flavour. This blob is not persistent and will not be saved. As I have mentioned, I had struggles with the sqlite database service and as a result could not properly implement the NSDocumentsDirectory as this also seems to be quite a challenge.

4. Lastly, I have tried to implement a new icon for the app, but this again proved difficult as most packages are deprecated. I installed the capacitor resources package with no luck as it did not create a resources file. As a result I was unable to update the app icon.


Please not that all of these issues were tried and debugged with the best of my abilities. According to my IDE tracker I have around 35 hours on this project - excluding research time (I am not sure if this reflects badly, but I intend for it to show that I did put a lot of effort into this). I am happy to try and resolve these issues over the weekend, but I wanted to submit this project as I know I have run out of time for submission.

Thank you for your consideration in hiring me. 

1. Login

Users are required to sign in via a webservice in order to manage data as seen below

![login](https://user-images.githubusercontent.com/61865394/202635060-c8db9bb3-5baf-468b-b4ab-08167c422c59.jpeg)

2. The user is directed to the home page where they can view edit or delete coffee flavours.

![IMG_4D0B0FAC12A6-1](https://user-images.githubusercontent.com/61865394/202635339-8f2bda94-ef5a-4e6c-8ace-672fd855d649.jpeg)


3. The user can also sync data and will receive a notification that the data has been synced

![IMG_AED7BB58C715-1](https://user-images.githubusercontent.com/61865394/202635472-dcb5d9d1-b6f2-4ecd-9e3d-038434890d79.jpeg)


4. The user is able to navigate to an add flavour screen by clicking on the add icon in the rop right corner

![IMG_C2D92C7CAA58-1](https://user-images.githubusercontent.com/61865394/202637558-f690bc2b-3e9f-4099-b02b-aca623c02f75.jpeg)


5. The user is able to scan a barcode in order to populate the data as needed

![IMG_9448](https://user-images.githubusercontent.com/61865394/202636218-96fa9c4a-551d-4227-a063-9949674090eb.PNG)

6. The details are populated or added manually and added to the database table called flavours

![IMG_9450](https://user-images.githubusercontent.com/61865394/202636482-56996389-b400-4821-b7de-8b5405cf8d34.PNG)

![IMG_9451](https://user-images.githubusercontent.com/61865394/202636405-881432e2-1b99-4616-817f-94297aa183b4.PNG)

![IMG_9452](https://user-images.githubusercontent.com/61865394/202636607-b0ac4af8-9043-4eda-bf38-26c0db9514d0.PNG)

Here is the home page with the new added flavour

![IMG_E41DBB44036F-1](https://user-images.githubusercontent.com/61865394/202637059-1353c6d0-f8b1-4437-b458-4320071e109c.jpeg)


7. Users are able to edit the flavour or delete it

![IMG_9454](https://user-images.githubusercontent.com/61865394/202637249-525cbc7f-f934-4957-a327-4bb4d5637b13.PNG)
![IMG_9455](https://user-images.githubusercontent.com/61865394/202637264-b6b2d7d6-5848-4a33-9d1f-a284faf812b2.PNG)
![IMG_9456](https://user-images.githubusercontent.com/61865394/202637270-c1bb9250-053a-45a7-bbbb-74a72a80f89f.PNG)

![IMG_9457](https://user-images.githubusercontent.com/61865394/202637341-4f4af60b-fb2b-4e45-bcec-cfde0eb3d77e.PNG)
![IMG_9458](https://user-images.githubusercontent.com/61865394/202637372-49692563-744f-4ad5-ad74-221712d89a99.PNG)






