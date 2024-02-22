import { log } from "console";
import fs1 from "fs/promises"
import fs2 from "fs"
import path from "path"

const basepath = "/home/pujan/Documents/Clutter-Organizing-Nodejs"

let files = await fs1.readdir(basepath)

files.forEach(item => {

    // console.log(item);
    let ext = item.split(".")[item.split(".").length-1]
    // console.log(ext);

    if(ext != "js" && ext != "json"){

        if(fs2.existsSync(path.join(basepath, ext))){

            fs1.rename(path.join(basepath,item), path.join(basepath, ext, item))
        }
        else{

            fs1.mkdir(ext)
            fs1.rename(path.join(basepath,item), path.join(basepath, ext, item))
        }
    }
    
});



