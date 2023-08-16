// typeof:
//         typeof ''   String

//         typeof 'hadi'   String

//         typeof 'true'   String

//         typeof true    Boolean

//         typeof function () { }    function

//         typeof (() => { })    function

//         typeof 10    number

//         typeof undefined    undefined

//         typeof null     object

//         typeof typeof null    String

//         typeof typeof 'anything'     String

//         typeof { name: 'hadi' }    object
        
//         typeof NaN    number 

//         typeof new Date()   object
        
//         typeof class foo { }    function
        
//         typeof Math    object



// Boolean:
//         Boolean(undefined)    false

//         Boolean(null)    false

//         Boolean(false)    false

//         Boolean(10)     true

//         Boolean(-1)    true

//         Boolean(+0)     false

//         Boolean(-0)    false

//         Boolean(0)    false

//         Boolean(NaN)     false

//         Boolean('')    false

//         Boolean('hadi')    true

//         Boolean(function () {})    true

//         Boolean({ name: 'hadi' })      true



// Number:
//         Number(undefined)   NaN

//         Number(null)   0

//         Number(false)   0

//         Number(true)   1

//         Number(10)   10

//         Number(+0)   0

//         Number(-0)   -0

//         Number('')   0

//         Number('hadi')   NaN

//         Number('true')   NaN

//         Number(NaN)   NaN

//         Number(function () {})   NaN

//         Number({ name: 'hadi' })   NaN



// String:
//         String(null)    null

//         String(undefined)    undefined

//         String(false)    false

//         String(true)    true

//         String(10)    10

//         String(NaN)    NaN

//         String(function() {})    function() {}

//         String({ name: 'hadi' })    [object object] 

//         String(new Date())    Tue Aug 08 2023 00:35:28 GMT+0330 (Iran Standard Time)

//         String(BigInt(10000000000000000000000000000000000))      9999999999999999455752309870428160




// operators:
//         10 + 2    12   typeof:Number

//         10 + '2'   102   typeof:String

//         10 + '2' + 10    10210   typeof:String

//         10 + 10 + '2'    202   typeof:String

//         10 + ''    10   typeof:String

//         null + ''    null   typeof:String

//         undefined + ''    undefined   typeof:String

//         null + undefined    NaN   typeof:Number

//         undefined + undefined    NaN   typeof:Number

//         null + null   0   typeof:Number

//         true + 10     11   typeof:Number

//         false + 11    11   typeof:Number
