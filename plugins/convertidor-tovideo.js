const _0x1c46b4=_0x4bab;function _0x49bd(){const _0x124d5f=['chat','error.mp4','*DONE*','help','tovideo','tags','command','tomp4','togif','register','170695YdIHPm','2IIXYuB','2886EXwjFf','952qRDXoy','1896410YWwnbU','469308ztulXR','1360009LrUgbN','56720ZDFFOm','8650494tDbpwi','*[❗𝐈𝐍𝐅𝐎❗]\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰\x20𝙰\x20𝚄𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁\x20𝚀𝚄𝙴\x20𝙳𝙴𝚂𝙴𝙴\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁\x20𝙴𝙽\x20𝚅𝙸𝙳𝙴𝙾\x20𝙲𝙾𝙽\x20𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20','*\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]\x20RESPOND\x20TO\x20A\x20STICKER\x20YOU\x20WANT\x20TO\x20TURN\x20INTO\x20A\x20VIDEO\x20WITH\x20THE\x20COMMAND\x20','quoted','mimetype','test','alloc','-filter_complex','-pix_fmt','yuv420p','-crf','-c:a','copy','-shortest','mp3','mp4'];_0x49bd=function(){return _0x124d5f;};return _0x49bd();}(function(_0x2fd056,_0x421f94){const _0x134bdc=_0x4bab,_0x476d30=_0x2fd056();while(!![]){try{const _0x52c5f0=parseInt(_0x134bdc(0x1c9))/0x1*(parseInt(_0x134bdc(0x1ca))/0x2)+-parseInt(_0x134bdc(0x1cb))/0x3*(parseInt(_0x134bdc(0x1cc))/0x4)+-parseInt(_0x134bdc(0x1cd))/0x5+-parseInt(_0x134bdc(0x1ce))/0x6+-parseInt(_0x134bdc(0x1cf))/0x7+parseInt(_0x134bdc(0x1d0))/0x8+parseInt(_0x134bdc(0x1d1))/0x9;if(_0x52c5f0===_0x421f94)break;else _0x476d30['push'](_0x476d30['shift']());}catch(_0xb06143){_0x476d30['push'](_0x476d30['shift']());}}}(_0x49bd,0x3f0a0));import{webp2mp4}from'../lib/webp2mp4.js';import{ffmpeg}from'../lib/converter.js';let handler=async(_0x44572f,{conn:_0x5d6cd2,usedPrefix:_0x4721fe,command:_0x14cc51})=>{const _0x489aa9=_0x4bab;if(!_0x44572f['quoted'])throw _0x489aa9(0x1d2)+(_0x4721fe+_0x14cc51)+_0x489aa9(0x1d3)+(_0x4721fe+_0x14cc51)+'*';let _0x26f867=_0x44572f[_0x489aa9(0x1d4)][_0x489aa9(0x1d5)]||'';if(!/webp/[_0x489aa9(0x1d6)](_0x26f867))throw _0x489aa9(0x1d2)+(_0x4721fe+_0x14cc51)+'*\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]\x20RESPOND\x20TO\x20A\x20STICKER\x20YOU\x20WANT\x20TO\x20TURN\x20INTO\x20A\x20VIDEO\x20WITH\x20THE\x20COMMAND\x20'+(_0x4721fe+_0x14cc51)+'*';let _0xbab987=await _0x44572f[_0x489aa9(0x1d4)]['download'](),_0x5a800a=Buffer[_0x489aa9(0x1d7)](0x0);if(/webp/['test'](_0x26f867))_0x5a800a=await webp2mp4(_0xbab987);else/audio/[_0x489aa9(0x1d6)](_0x26f867)&&(_0x5a800a=await ffmpeg(_0xbab987,[_0x489aa9(0x1d8),'color',_0x489aa9(0x1d9),_0x489aa9(0x1da),_0x489aa9(0x1db),'51',_0x489aa9(0x1dc),_0x489aa9(0x1dd),_0x489aa9(0x1de)],_0x489aa9(0x1df),_0x489aa9(0x1e0)));await _0x5d6cd2['sendFile'](_0x44572f[_0x489aa9(0x1e1)],_0x5a800a,_0x489aa9(0x1e2),_0x489aa9(0x1e3),_0x44572f,0x0,{'thumbnail':_0x5a800a});};handler[_0x1c46b4(0x1e4)]=[_0x1c46b4(0x1e5)],handler[_0x1c46b4(0x1e6)]=['sticker'],handler[_0x1c46b4(0x1e7)]=['tovideo',_0x1c46b4(0x1e8),'mp4',_0x1c46b4(0x1e9)],handler[_0x1c46b4(0x1ea)]=!![];function _0x4bab(_0x3a3395,_0x10042f){const _0x49bd8e=_0x49bd();return _0x4bab=function(_0x4baba0,_0x5d930a){_0x4baba0=_0x4baba0-0x1c9;let _0x4b2d82=_0x49bd8e[_0x4baba0];return _0x4b2d82;},_0x4bab(_0x3a3395,_0x10042f);}export default handler;