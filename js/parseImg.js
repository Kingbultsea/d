const { createCanvas, loadImage, registerFont } = require('canvas')
const fs = require('fs')
const path = require("path")

registerFont('HanYi.ttf', { family: 'HanYi' })
registerFont('huangyou.ttf', { family: 'HuangYou' })

async function outputPic (designation, name, picUrl) {
    const width = 397
    const height = 758

    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    ctx.font = '30px Impact'
    ctx.fillText('Awesome!', width, height)

    var text = ctx.measureText('Awesome!')
    ctx.strokeStyle = 'rgba(255,45,78,0.5)'
    ctx.beginPath()

    await loadImage(path.join(__dirname, '../img/bg.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    }) // 绘制背景


    ctx.font = '50px "HanYi"'
    ctx.fillText(designation, 50, 450) // 绘制称号

    await loadImage(path.join(__dirname, '../img/logo区域.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    })

    await loadImage(picUrl).then((image) => {



        ctx.save()

        ctx.beginPath()
        // ctx.arc(75, 325, 25, 0, Math.PI * 2, false)

        function roundRect(x, y, w, h, r) {
            if (w< 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
        }
        roundRect(50, 300, 50, 50, 10);



        ctx.clip()
        ctx.drawImage(image, 50, 300, 50, 50)
        ctx.restore()
    }) // 绘制头像

    ctx.font = '20px "HanYi"'
    ctx.fillText(name, 230, 330) // 绘制文字


    await loadImage(path.join(__dirname, '../img/blockCode.png')).then((image) => {
        ctx.drawImage(image, width - 131, height - 140, 100, 100)
    }) // 绘制二维码

    // return canvas // canvas.toBuffer('image/jpeg', { quality: 0.8 })// canvas.toDataURL('image/jpeg', { quality: 0.8}, (err, jpeg) => {})  // canvas.toBuffer('image/jpeg', { quality: 0.8 })

    return new Promise((resolve) => {
        const hash = randomString(1)
        fs.writeFile(path.join(__dirname, '../img/'+ hash +'.png'), canvas.toBuffer('image/jpeg', { quality: 0.8 }), (err) => {
            if (err) {
                console.log(err)
            }
            resolve(hash)
        })
    })
}

async function outputPicShare (designation, name, picUrl, qrCodeUrl, platFormId) {
    const width = 612
    const height = 920
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    console.log('获取不了picUrl??' + picUrl)
    console.log(name)

    await loadImage(path.join(__dirname, '../img/share_template_one.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    }) // 绘制背景

    ctx.font = '24px "HanYi"'
    ctx.fillStyle = 'rgb(19, 129, 229)'
    ctx.fillText(designation, 183, 809) // 绘制文字

    ctx.font = '24px "HanYi"'
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.fillText(name, 141, 149) // 绘制名称

    await loadImage(picUrl).then((image) => {
        ctx.drawImage(image, 37, 102, 80, 80)
    }) // 绘制头像


    return new Promise((resolve) => {
        const hash = randomString(2)// platFormId

        fs.exists(path.join(__dirname, '../img/'+ hash +'.png'), (exists) => {

                console.log('???')
                fs.writeFile(path.join(__dirname, '../img/'+ hash +'.png'), canvas.toBuffer('image/jpeg', { quality: 1 }), (err) => {
                    console.log('??')
                    if (err) {
                        console.log(err)
                    }
                    resolve(hash)
                })

        })
    })

}

function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function circleImg (ctx, img, x, y, r) {
    ctx.save()
    let d =2 * r
    let cx = x + r
    let cy = y + r
    ctx.arc(cx, cy, r, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(img, x, y, d, d)
    ctx.restore()
}

async function sleepStationPic (nickName, QRblockUrl, ID, pId) {
    // console.time('p')
    const width = 1080
    const height = 1920
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    let time = dateFormat(new Date().getTime() + 28800000, 'hh:mm').split('')
    console.log(time)

    try {
        await loadImage(path.join(__dirname, '../sleepStationImg/sleepStation.jpg')).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制背景

        await loadImage(path.join(__dirname, `../sleepStationImg/${pId}.png`)).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制头部Logo

        await loadImage(path.join(__dirname, '../sleepStationImg/correspondence.png')).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制背景
        await loadImage(path.join(__dirname, '../sleepStationImg/point.png')).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制背景
        await loadImage(path.join(__dirname, '../sleepStationImg/no.png')).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制no
        await loadImage(QRblockUrl).then((image) => {
            ctx.drawImage(image, 930, 1804, 73, 73)
        }) // 绘制QRblock

        const dR = 26
        await loadImage(path.join(__dirname, `../sleepStationImg/${time[4]}.png`)).then((image) => {
            ctx.drawImage(image, 0, 0, width, height)
        }) // 绘制时间第四位
        await loadImage(path.join(__dirname, `../sleepStationImg/${time[3]}.png`)).then((image) => {
            ctx.drawImage(image, -dR, 0, width, height)
        }) // 绘制时间第三位
        await loadImage(path.join(__dirname, `../sleepStationImg/${time[1]}.png`)).then((image) => {
            ctx.drawImage(image, -71, 0, width, height)
        }) // 绘制时间第er位
        await loadImage(path.join(__dirname, `../sleepStationImg/${time[0]}.png`)).then((image) => {
            ctx.drawImage(image, -71 - dR, 0, width, height)
        }) // 绘制时间第1位

        ctx.font = '35px "HuangYou"'
        ctx.fillStyle = "rgb(255, 255, 255)"
        let numCode = ID.split('')
        let distanceCode = 0
        for (let i of numCode) {
            ctx.fillText(i, 814 + distanceCode, 1650)
            distanceCode += 26
        }
        // 绘制时间number

        ctx.textAlign = 'right'
        // ctx.font = 'bolder 36px "HuangYou"'
        ctx.font = '900 38px "HuangYou", Helvetica Neue, sans-serif'
        // ctx.fontWeight = '100'
        ctx.fillStyle = "#ffffff"
        const myName = nickName
        ctx.fillText(myName, 1000, 1779)
        ctx.fillStyle = "#a6c0ff"
        ctx.font = '900 37px "HuangYou", Helvetica Neue, sans-serif'
        let distanceName = 0
        for (let i of '纳睡员：') {
            ctx.fillText(i, 913 - ctx.measureText(myName).width + distanceName, 1780)
            if (i == '员') {
                distanceName += 15
            } else {
                distanceName += 34
            }
        }
    }catch(e) {
        console.log(e)
    }

    // ctx.fillText('纳睡员：', 1000 - ctx.measureText(myName).width, 1780)
    /* let numName = '纳睡员：啊hodor啊啊'.split('')
    let distanceName = 0
    let once = true
    let styleEnd = false
    for (let i of numName) {
        ctx.fillText(i, 714 + distanceName, 1780)
        if (i == '员' && once) {
            distanceName += 20
            once = false
            styleEnd = true
        } else {
            if (styleEnd) {
                ctx.fillStyle = "#ffffff"
                distanceName += 20
            } else {
                distanceName += 30
            }
        }
    } */

    // 1628 绘制number

    return new Promise((resolve) => {
        console.log('promise 图片渲染启动')
        const hash = randomString(1)// platFormId
        fs.writeFile(path.join(__dirname, '../tz/' + hash + '123' +'.png'), canvas.toBuffer('image/jpeg', { quality: 1 }), (err) => {
            if (err) {
                console.log(err)
            }
            resolve(hash + '123')
            console.log('o~')
        })
    })

}

async function c () {
    console.time('p')
    const a = await sleepStationPic('奥术大师', 'http://mmbiz.qpic.cn/mmbiz_jpg/wib5vLMkeLaPiaHQVFZQrUNBVDoEPsQOicrTnR7piczDWbuSlYIfIow1hTibIvMszfeQAmk0KWa66aHEWtqqAOheexA/0', '123456')
    console.log(a)
    console.timeEnd('p')
}
// c()
function dateFormat (date, format) { // yy:mm:ss //这样都行 yyyy年mmmm分sss秒
    if (!format || typeof format !== 'string') {
        console.error('format is undefiend or type is Error')
        return ''
    }

    date = date instanceof Date ? date : (typeof date === 'number' || typeof date === 'string') ? new Date(date) : new Date()

    // 解析
    let formatReg = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let reg in formatReg) {
        if (new RegExp(reg).test(format)) {
            let match = RegExp.lastMatch // 上一次的匹配到的字符串
            format = format.replace(match, formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString())
        }
    }
    return format
}

module.exports = { outputPic, outputPicShare, sleepStationPic }
