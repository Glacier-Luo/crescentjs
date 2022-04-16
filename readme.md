# How to run
1. install
   ```
   yarn
   ```
2. There is a bug about protobufjs

   Please change the code in `node_modules/protobufjs/src/util/longbits.js:86`

   from:
   ```
           if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
   ```
   to:
   ```
        // if (util.Long)
        //     value = util.Long.fromString(value);
        // else
            return LongBits.fromNumber(parseInt(value, 10));
   ```
3. Just code!

# fund me
`cre1ax4v0gxxesjxau4hvvt0z8xefml5ylysy5dvzz`