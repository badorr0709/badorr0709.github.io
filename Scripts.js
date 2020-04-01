0/*
* Author: Benjamin Dorr
* Date: 3/31/2020
*
* Updates:
*       3/31/2020- created the document and create the first set of
*           functions for the website. Created fucntion changeSize
*           this function looks at the size of the viewing device and
*           sets the right preportions for what ever device you are using
*           based on how you load into the page.
*
* */




function changeSize()
{

    var sheet = document.createElement('style');
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w > h)
    {
        /*
        the line bellow is this black of css code
        .content
        {
            position:relative;
            left:6%;
            text-align:center;
            background-color: rgba(100,100,100,1);
            width: 50%;
            height:100%;
            margin:auto;
            padding: 3px;
            border-radius:10px;
            color: white;
        }
     */
        sheet.innerHTML = ".content{position:relative;left:6%;text-align:center;background-color: rgba(100,100,100,1);width: 50%;min-height:"+(h-20).toString()+"px"+";margin:auto;padding: 3px;border-radius:10px;color: white;}";
        document.body.appendChild(sheet);
    }
    else if(h>w)
    {
        sheet.innerHTML = ".content{position:relative;left:6%;text-align:center;background-color: rgba(100,100,100,1);width: 50%;min-height:"+(h-80).toString()+"px"+";margin:auto;padding: 3px;border-radius:10px;color: white;}";
        document.body.appendChild(sheet);
    }
}