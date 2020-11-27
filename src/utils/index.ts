export function debounce(fn:Function, delay=200) {
    let timer:any=null;
    return function () {
        //@ts-ignore
        const th = this;
        const args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = null;
            fn.apply(th, args);
        }, delay);
    };
}

//压缩图片
export function pressImage(file:File) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    return new Promise(resolve => {
        reader.onload = (e)=>{
            const image = new Image()
            image.src = <string>e.target!.result
            image.onload = function () {
                resolve(zipImg(image))
            }
        }
    })
}

function zipImg(img:any) {
    const target = 1200
    const imgHeightScale = target/img.height
    const imgWidthScale = target/img.width
    const rs = imgHeightScale<imgWidthScale ? imgHeightScale: imgWidthScale
    const scale = Math.min(1,rs)
    const width = img.width*scale
    const height = img.height*scale

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    ctx!.clearRect(0,0,width,height)
    ctx!.drawImage(img,0,0,width,height)
    return canvas.toDataURL('image/png',1)
}
