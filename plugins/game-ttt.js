const _0x497cd3=_0x3950;(function(_0x3a14aa,_0x261c5c){const _0x1aaef4=_0x3950,_0x3a6e54=_0x3a14aa();while(!![]){try{const _0x3fcf73=-parseInt(_0x1aaef4(0x0))/0x1*(parseInt(_0x1aaef4(0x1))/0x2)+-parseInt(_0x1aaef4(0x2))/0x3+parseInt(_0x1aaef4(0x3))/0x4*(-parseInt(_0x1aaef4(0x4))/0x5)+-parseInt(_0x1aaef4(0x5))/0x6+-parseInt(_0x1aaef4(0x6))/0x7*(parseInt(_0x1aaef4(0x7))/0x8)+-parseInt(_0x1aaef4(0x8))/0x9*(-parseInt(_0x1aaef4(0x9))/0xa)+parseInt(_0x1aaef4(0xa))/0xb;if(_0x3fcf73===_0x261c5c)break;else _0x3a6e54['push'](_0x3a6e54['shift']());}catch(_0x29d22f){_0x3a6e54['push'](_0x3a6e54['shift']());}}}(_0x54f7,0x353fe));function _0x3950(_0x30e281,_0x54f758){const _0x395095=_0x54f7();return _0x3950=function(_0xbcc4a5,_0x39bfc9){_0xbcc4a5=_0xbcc4a5-0x0;let _0x1fa6e9=_0x395095[_0xbcc4a5];return _0x1fa6e9;},_0x3950(_0x30e281,_0x54f758);}import _0x4b1f9b from'../lib/tictactoe.js';let handler=async(_0x1e0064,{conn:_0x1fe302,usedPrefix:_0x2f6412,command:_0xc759cd,text:_0x389383})=>{const _0x5eaf17=_0x3950;_0x1fe302['game']=_0x1fe302[_0x5eaf17(0xb)]?_0x1fe302['game']:{};if(Object[_0x5eaf17(0xc)](_0x1fe302[_0x5eaf17(0xb)])[_0x5eaf17(0xd)](_0x310b01=>_0x310b01['id'][_0x5eaf17(0xe)](_0x5eaf17(0xf))&&[_0x310b01[_0x5eaf17(0xb)][_0x5eaf17(0x10)],_0x310b01[_0x5eaf17(0xb)][_0x5eaf17(0x11)]][_0x5eaf17(0x12)](_0x1e0064[_0x5eaf17(0x13)])))throw _0x5eaf17(0x14);if(!_0x389383)throw _0x5eaf17(0x15)+(_0x2f6412+_0xc759cd)+'\x20nueva\x20sala*';let _0x7f6acc=Object[_0x5eaf17(0xc)](_0x1fe302[_0x5eaf17(0xb)])[_0x5eaf17(0xd)](_0x26feeb=>_0x26feeb[_0x5eaf17(0x16)]===_0x5eaf17(0x17)&&(_0x389383?_0x26feeb['name']===_0x389383:!![]));if(_0x7f6acc){await _0x1e0064[_0x5eaf17(0x18)](_0x5eaf17(0x19)),_0x7f6acc['o']=_0x1e0064[_0x5eaf17(0x1a)],_0x7f6acc['game']['playerO']=_0x1e0064[_0x5eaf17(0x13)],_0x7f6acc[_0x5eaf17(0x16)]=_0x5eaf17(0x1b);let _0x338398=_0x7f6acc[_0x5eaf17(0xb)][_0x5eaf17(0x1c)]()[_0x5eaf17(0x1d)](_0xb85f83=>{const _0x1e9fc1=_0x5eaf17;return{'X':'❎','O':'⭕',0x1:_0x1e9fc1(0x1e),0x2:_0x1e9fc1(0x1f),0x3:_0x1e9fc1(0x20),0x4:_0x1e9fc1(0x21),0x5:_0x1e9fc1(0x22),0x6:_0x1e9fc1(0x23),0x7:_0x1e9fc1(0x24),0x8:_0x1e9fc1(0x25),0x9:_0x1e9fc1(0x26)}[_0xb85f83];}),_0x1f86cc=(_0x5eaf17(0x27)+_0x7f6acc['game'][_0x5eaf17(0x10)][_0x5eaf17(0x28)]('@')[0x0]+_0x5eaf17(0x29)+_0x7f6acc[_0x5eaf17(0xb)][_0x5eaf17(0x11)][_0x5eaf17(0x28)]('@')[0x0]+'\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+_0x338398[_0x5eaf17(0x2a)](0x0,0x3)[_0x5eaf17(0x2b)]('')+_0x5eaf17(0x2c)+_0x338398[_0x5eaf17(0x2a)](0x3,0x6)[_0x5eaf17(0x2b)]('')+_0x5eaf17(0x2c)+_0x338398[_0x5eaf17(0x2a)](0x6)['join']('')+'\x0a\x0a𝚃𝚄𝚁𝙽𝙾\x20𝙳𝙴\x20@'+_0x7f6acc[_0x5eaf17(0xb)]['currentTurn']['split']('@')[0x0]+'\x0a')['trim']();if(_0x7f6acc['x']!==_0x7f6acc['o'])await _0x1fe302[_0x5eaf17(0x2d)](_0x7f6acc['x'],{'text':_0x1f86cc,'mentions':this['parseMention'](_0x1f86cc)},{'quoted':_0x1e0064});await _0x1fe302[_0x5eaf17(0x2d)](_0x7f6acc['o'],{'text':_0x1f86cc,'mentions':_0x1fe302[_0x5eaf17(0x2e)](_0x1f86cc)},{'quoted':_0x1e0064});}else{_0x7f6acc={'id':'tictactoe-'+ +new Date(),'x':_0x1e0064[_0x5eaf17(0x1a)],'o':'','game':new _0x4b1f9b(_0x1e0064[_0x5eaf17(0x13)],'o'),'state':_0x5eaf17(0x17)};if(_0x389383)_0x7f6acc[_0x5eaf17(0x2f)]=_0x389383;let _0x23ac28=_0x5eaf17(0x30);_0x1fe302[_0x5eaf17(0x18)](_0x1e0064[_0x5eaf17(0x1a)],_0x5eaf17(0x31)+_0x2f6412+_0x5eaf17(0x32)+(_0x2f6412+_0xc759cd)+'\x20'+_0x389383+')',_0x1e0064),_0x1fe302[_0x5eaf17(0xb)][_0x7f6acc['id']]=_0x7f6acc;}};handler['command']=/^(tictactoe|ttc|ttt|xo)$/i,handler[_0x497cd3(0x33)]=!![];function _0x54f7(){const _0x38c6b9=['2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','\x0a🎮\x20𝐓𝐑𝐄𝐒\x20𝐄𝐍\x20𝐑𝐀𝐘𝐀\x20🎮\x0a\x0a❎\x20=\x20@','split','\x0a⭕\x20=\x20@','slice','join','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','sendMessage','parseMention','name','https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg','*🕹\x20𝐓𝐑𝐄𝐒\x20𝐄𝐍\x20𝐑𝐀𝐘𝐀\x20🎮*\x0a\x0a*◉\x20𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾\x20𝙰𝙻\x20𝚂𝙴𝙶𝚄𝙽𝙳𝙾\x20𝙹𝚄𝙶𝙰𝙳𝙾𝚁*\x0a*◉\x20𝙿𝙰𝚁𝙰\x20𝙱𝙾𝚁𝚁𝙰𝚁\x20𝙾\x20𝚂𝙰𝙻𝙸𝚁𝚂𝙴\x20𝙳𝙴\x20𝙻𝙰\x20𝙿𝙰𝚁𝚃𝙸𝙳𝙰\x20𝚄𝚂𝙴𝙽\x20𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20','delttt*\x0a\x0a◉\x20𝙿𝙰𝚁𝙰\x20𝚄𝙽𝙸𝚁𝚂𝙴\x20𝙰\x20𝙻𝙰\x20𝙿𝙰𝚁𝚃𝙸𝙳𝙰\x20𝙴𝚂𝙲𝚁𝙸𝙱𝙰:\x20(','register','31sBgadG','15854ExOIdU','1060836omEUXN','124erJPrq','45265SyUsUU','940302lcrezA','1736KlegIv','808GfxNsK','9QNbWaS','557390OQuZKp','13465408NQFbnN','game','values','find','startsWith','tictactoe','playerX','playerO','includes','sender','*[❗]\x20𝙰𝚄𝙽\x20𝙴𝚂𝚃𝙰𝚂\x20𝙴𝙽\x20𝚄𝙽\x20𝙹𝚄𝙴𝙶𝙾\x20𝙲𝙾𝙽\x20𝙰𝙻𝙶𝚄𝙸𝙴𝙽*','*[❗]\x20𝚂𝙴\x20𝚁𝙴𝚀𝚄𝙸𝙴𝚁𝙴\x20𝙿𝙾𝙽𝙴𝚁\x20𝚄𝙽\x20𝙽𝙾𝙼𝙱𝚁𝙴\x20𝙰\x20𝙻𝙰\x20𝚂𝙰𝙻𝙰\x20𝙳𝙴\x20𝙹𝚄𝙴𝙶𝙾*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾*\x0a*◉\x20','state','WAITING','reply','*[🕹️]\x20𝙸𝙽𝙸𝙲𝙸𝙰\x20𝙴𝙻\x20𝙹𝚄𝙴𝙶𝙾,\x20𝚄𝙽\x20𝙹𝚄𝙶𝙰𝙳𝙾𝚁\x20𝚂𝙴\x20𝚄𝙽𝙸𝙾\x20𝙰\x20𝙻𝙰\x20𝙿𝙰𝚁𝚃𝙸𝙳𝙰*','chat','PLAYING','render','map','1️⃣'];_0x54f7=function(){return _0x38c6b9;};return _0x54f7();}export default handler;