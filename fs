[1mdiff --git a/tests/petdisease.spec.ts b/tests/petdisease.spec.ts[m
[1mindex ce6db6f..f2df384 100644[m
[1m--- a/tests/petdisease.spec.ts[m
[1m+++ b/tests/petdisease.spec.ts[m
[36m@@ -16,12 +16,12 @@[m [mtest('US pet disease map', async({ page }) => {[m
         // console.log(boundingBox);[m
         if(boundingBox) {[m
            await page.mouse.move((boundingBox.width/2 + boundingBox.x), (boundingBox.height/2 + boundingBox.y)) [m
[31m-           await page.waitForTimeout(500)[m
[32m+[m[32m           await page.waitForTimeout(100)[m
         }[m
         // await page.mouse.move((boundingBox?.height + boundingBox.y/2), (boundingBox?.width + boundingBox.y/2))[m
         [m
         console.log(await stateLocator.getAttribute('id'));[m
[31m-        await page.waitForTimeout(500)[m
[32m+[m[32m        await page.waitForTimeout(100)[m
     }[m
 [m
     await page.pause()[m
