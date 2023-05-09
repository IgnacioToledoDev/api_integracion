import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

/**
 * @description get all files of this dir *routes* and delete the extension .ts and save on @file
 * @example product.ts => product
 * @returns string or undefined
 */
const cleanFileName = (fileName: string): string | undefined => {
    const file = fileName.split('.').shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        console.log(`Se esta cargando la rutas ... /${cleanName}`);
        import(`./${cleanName}`).then((module) => {
            router.use(`/api/v1/${cleanName}`, module.router);
        });
    };
});


export { router };