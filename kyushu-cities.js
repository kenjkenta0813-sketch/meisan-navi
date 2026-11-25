const specialtyIcon = name => {
  if (/ラーメン|うどん|そば|そうめん|ちゃんぽん/.test(name)) return "🍜";
  if (/牛|豚|鶏|馬|肉|ハム/.test(name)) return "🥩";
  if (/魚|鯛|ぶり|ふぐ|かつお|まぐろ|いか|鱧|鮎|うなぎ|海苔|牡蠣|えび|貝/.test(name)) return "🐟";
  if (/茶/.test(name)) return "🍵";
  if (/焼酎|酒|ワイン/.test(name)) return "🍶";
  if (/米|丼|寿司/.test(name)) return "🍚";
  if (/みかん|柑|かぼす|レモン|ゆず/.test(name)) return "🍊";
  if (/いちご|あまおう/.test(name)) return "🍓";
  if (/柿/.test(name)) return "🟠";
  if (/ぶどう/.test(name)) return "🍇";
  if (/梨/.test(name)) return "🍐";
  if (/芋|かんしょ/.test(name)) return "🍠";
  if (/焼|陶|組子|竹|工芸|人形/.test(name)) return "🏺";
  if (/羊羹|饅頭|まんじゅう|餅|菓子|カステラ|サブレ|ケーキ/.test(name)) return "🍡";
  return "🌿";
};

const specialties = (...names) => names.map(name => [name, `${name}は地域を代表する名物・特産品です。`, specialtyIcon(name)]);

const kyushuCityAdditions = {
  "福岡県": {
    "北九州市": specialties("焼きカレー", "ぬかみそ炊き"),
    "福岡市": specialties("明太子", "博多ラーメン"),
    "大牟田市": specialties("草木饅頭", "高菜漬"),
    "久留米市": specialties("久留米ラーメン", "筑後うどん"),
    "直方市": specialties("成金饅頭", "直方焼きスパ"),
    "飯塚市": specialties("ひよ子", "なんばん往来"),
    "田川市": specialties("山賊鍋", "石炭ソフト"),
    "柳川市": specialties("うなぎのせいろ蒸し", "有明海苔"),
    "八女市": specialties("八女茶", "八女伝統本玉露"),
    "筑後市": specialties("筑後梨", "あまおう"),
    "大川市": specialties("大川組子", "い草製品"),
    "行橋市": specialties("豊前海の牡蠣", "いちじく"),
    "豊前市": specialties("豊前海一粒かき", "豊前棚田ゆず"),
    "中間市": specialties("中間産米", "いちじく"),
    "小郡市": specialties("小郡産米", "あまおう"),
    "筑紫野市": specialties("筑紫野産米", "博多和牛"),
    "春日市": specialties("春日産米", "季節野菜"),
    "大野城市": specialties("鶏ぼっかけ", "鶏めし"),
    "宗像市": specialties("鐘崎天然とらふく", "宗像大島甘夏"),
    "太宰府市": specialties("梅ヶ枝餅", "梅加工品"),
    "古賀市": specialties("あまおう", "スイートコーン"),
    "福津市": specialties("鯛茶づけ", "あまおう"),
    "うきは市": specialties("ぶどう", "富有柿"),
    "宮若市": specialties("宮若牛", "宮若産米"),
    "嘉麻市": specialties("嘉麻市産米", "りんご"),
    "朝倉市": specialties("富有柿", "博多万能ねぎ"),
    "みやま市": specialties("セルリー", "高菜漬"),
    "糸島市": specialties("糸島豚", "糸島牡蠣"),
    "那珂川市": specialties("なかがわ米", "ヤーコン")
  },
  "佐賀県": {
    "佐賀市": specialties("佐賀海苔", "丸ぼうろ"),
    "唐津市": specialties("唐津焼", "呼子のいか"),
    "鳥栖市": specialties("鳥栖ラーメン", "焼麦"),
    "多久市": specialties("多久まんじゅう", "岸川まんじゅう"),
    "伊万里市": specialties("伊万里焼", "伊万里牛"),
    "武雄市": specialties("武雄焼", "レモングラス"),
    "鹿島市": specialties("有明海苔", "鹿島みかん"),
    "小城市": specialties("小城羊羹", "鯉料理"),
    "嬉野市": specialties("嬉野茶", "温泉湯どうふ"),
    "神埼市": specialties("神埼そうめん", "菱焼酎")
  },
  "長崎県": {
    "長崎市": specialties("長崎ちゃんぽん", "カステラ"),
    "佐世保市": specialties("佐世保バーガー", "九十九島かき"),
    "島原市": specialties("具雑煮", "かんざらし"),
    "諫早市": specialties("諫早うなぎ", "伊木力みかん"),
    "大村市": specialties("大村寿司", "ゆでピーナッツ"),
    "平戸市": specialties("平戸ひらめ", "川内かまぼこ"),
    "松浦市": specialties("アジフライ", "とらふぐ"),
    "対馬市": specialties("対州そば", "穴子"),
    "壱岐市": specialties("壱岐牛", "麦焼酎"),
    "五島市": specialties("五島うどん", "五島牛"),
    "西海市": specialties("西海みかん", "ゆで干し大根"),
    "雲仙市": specialties("雲仙ハム", "雲仙こぶ高菜"),
    "南島原市": specialties("島原手延そうめん", "とら巻")
  },
  "熊本県": {
    "熊本市": specialties("馬刺し", "辛子れんこん"),
    "八代市": specialties("晩白柚", "い草製品"),
    "人吉市": specialties("球磨焼酎", "鮎料理"),
    "荒尾市": specialties("荒尾梨", "小代焼"),
    "水俣市": specialties("サラダ玉ねぎ", "寒漬"),
    "玉名市": specialties("玉名ラーメン", "玉名いちご"),
    "山鹿市": specialties("山鹿灯籠もなか", "栗"),
    "菊池市": specialties("菊池米", "菊池水田ごぼう"),
    "宇土市": specialties("網田ネーブル", "あさり"),
    "上天草市": specialties("車えび", "天草大王"),
    "宇城市": specialties("デコポン", "松合食品の味噌"),
    "阿蘇市": specialties("あか牛", "阿蘇高菜"),
    "天草市": specialties("天草晩柑", "車えび"),
    "合志市": specialties("合志産米", "すいか")
  },
  "大分県": {
    "大分市": specialties("関あじ", "関さば"),
    "別府市": specialties("地獄蒸し", "とり天"),
    "中津市": specialties("中津からあげ", "はも料理"),
    "日田市": specialties("日田焼きそば", "日田梨"),
    "佐伯市": specialties("佐伯寿司", "ごまだし"),
    "臼杵市": specialties("臼杵ふぐ", "黄飯"),
    "津久見市": specialties("津久見みかん", "まぐろ料理"),
    "竹田市": specialties("豊後牛", "サフラン"),
    "豊後高田市": specialties("豊後高田そば", "岬かき揚げ丼"),
    "杵築市": specialties("杵築茶", "ハウスみかん"),
    "宇佐市": specialties("宇佐からあげ", "麦焼酎"),
    "豊後大野市": specialties("かぼす", "豊後大野産しいたけ"),
    "由布市": specialties("ゆふいん牛", "梨"),
    "国東市": specialties("くにさき姫だこ", "七島藺工芸")
  },
  "鹿児島県": {
    "鹿児島市": specialties("黒豚", "白熊"),
    "鹿屋市": specialties("かのやカンパチ", "さつまいも"),
    "枕崎市": specialties("かつお節", "枕崎ぶえん鰹"),
    "阿久根市": specialties("阿久根ボンタン", "うに"),
    "出水市": specialties("鶏肉", "紅甘夏"),
    "指宿市": specialties("そら豆", "オクラ"),
    "西之表市": specialties("安納いも", "種子島茶"),
    "垂水市": specialties("桜島美湯豚", "垂水かんぱち"),
    "薩摩川内市": specialties("きびなご", "川内大綱せんべい"),
    "日置市": specialties("薩摩焼", "伊集院まんじゅう"),
    "曽於市": specialties("曽於牛", "ゆず"),
    "霧島市": specialties("黒酢", "霧島茶"),
    "いちき串木野市": specialties("さつま揚げ", "まぐろラーメン"),
    "南さつま市": specialties("加世田かぼちゃ", "金峰コシヒカリ"),
    "志布志市": specialties("志布志茶", "うなぎ"),
    "奄美市": specialties("鶏飯", "大島紬"),
    "南九州市": specialties("知覧茶", "さつまいも"),
    "伊佐市": specialties("伊佐米", "伊佐焼酎"),
    "姶良市": specialties("加治木まんじゅう", "あご肉")
  },
  "沖縄県": {
    "那覇市": specialties("沖縄そば", "ちんすこう"),
    "宜野湾市": specialties("大山田いも", "田芋料理"),
    "石垣市": specialties("石垣牛", "八重山そば"),
    "浦添市": specialties("浦添桑茶", "島桑加工品"),
    "名護市": specialties("アグー豚", "オリオンビール"),
    "糸満市": specialties("糸満かまぼこ", "海人料理"),
    "沖縄市": specialties("コザのタコライス", "沖縄ぜんざい"),
    "豊見城市": specialties("完熟マンゴー", "豊見城ウージ染め"),
    "うるま市": specialties("勝連もずく", "照間ビーグ"),
    "宮古島市": specialties("宮古そば", "宮古島マンゴー"),
    "南城市": specialties("奥武島の天ぷら", "島野菜")
  }
};
