import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer.prompt([
    {
    message: "Type your url", 
    name: "url"}
])
.then((answers)=> {
    const url = answers.url;
    var qr_svg = qr.image(url)
    qr_svg.pipe(fs.createWriteStream('qr_image.png'))

    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
.catch((error) => {
    if (error.isTtyError) {

    } else {

    }
})
;