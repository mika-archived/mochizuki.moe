import { sortBy } from "lodash";

import { ICategorizedFavorites, IFavorite } from "@/models/favorite";

const favorites: ICategorizedFavorites = {
  categories: [
    {
      name: "アニメ",
      favorites: sortBy([
        {
          name: "ALDNOAH.ZERO",
          href: "http://www.aldnoahzero.com/"
        },
        {
          name: "Angel Beats!",
          href: "http://www.angelbeats.jp/"
        },
        {
          name: "宇宙よりも遠い場所",
          href: "http://yorimoi.com/"
        },
        {
          name: "アイドルマスター シンデレラガールズ",
          href: "https://imas-cinderella.com/"
        },
        {
          name: "楽園追放 -Expelled from Paradise-",
          href: "http://rakuen-tsuiho.com/"
        },
        {
          name: "ソードアート・オンライン",
          href: "https://www.swordart-online.net/"
        },
        {
          name: "〈物語〉シリーズ",
          href: "https://www.monogatari-series.com/"
        },
        {
          name: "ノーゲーム・ノーライフ",
          href: "http://ngnl.jp/"
        },
        {
          name: "STEINS;GATE",
          href: "http://steinsgate.jp/"
        },
        {
          name: "ヴァイオレット・エヴァーガーデン",
          href: "http://violet-evergarden.jp/"
        },
        {
          name: "言の葉の庭",
          href: "http://www.kotonohanoniwa.jp/"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "キャラクター",
      favorites: sortBy([
        {
          name: "望月杏奈",
          href: "https://dic.pixiv.net/a/%E6%9C%9B%E6%9C%88%E6%9D%8F%E5%A5%88"
        },
        {
          name: "ユイ (Angel Beats!)",
          href: "https://dic.pixiv.net/a/%E3%83%A6%E3%82%A4%28AngelBeats%21%29"
        },
        {
          name: "双葉杏",
          href: "https://dic.pixiv.net/a/%E5%8F%8C%E8%91%89%E6%9D%8F"
        },
        {
          name: "猫宮ひなた",
          href: "https://dic.pixiv.net/a/%E7%8C%AB%E5%AE%AE%E3%81%B2%E3%81%AA%E3%81%9F"
        },
        {
          name: "ロボ子さん",
          href: "https://dic.pixiv.net/a/%E3%83%AD%E3%83%9C%E5%AD%90%E3%81%95%E3%82%93"
        },
        {
          name: "ソフィー・ノイエンミュラー",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%82%BD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%83%8E%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%9F%E3%83%A5%E3%83%A9%E3%83%BC"
        },
        {
          name: "初音ミク",
          href: "https://dic.pixiv.net/a/%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF"
        },
        {
          name: "ときのそら",
          href: "https://dic.pixiv.net/a/%E3%81%A8%E3%81%8D%E3%81%AE%E3%81%9D%E3%82%89"
        },
        {
          name: "葛飾北斎 (Fate)",
          href: "https://dic.pixiv.net/a/%E8%91%9B%E9%A3%BE%E5%8C%97%E6%96%8E%28Fate%29"
        },
        {
          name: "玉藻の前",
          href: "https://dic.pixiv.net/a/%E3%82%AD%E3%83%A3%E3%82%B9%E3%82%BF%E3%83%BC%28Fate%2FEXTRA%29"
        },
        {
          name: "アタランテ (Fate)",
          href: "https://dic.pixiv.net/a/%E3%82%A2%E3%82%BF%E3%83%A9%E3%83%B3%E3%83%86%28Fate%29"
        },
        {
          name: "アーチャー・インフェルノ",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%82%A2%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%BB%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A7%E3%83%AB%E3%83%8E"
        },
        {
          name: "フィリス・ミストルート",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%83%95%E3%82%A3%E3%83%AA%E3%82%B9%E3%83%BB%E3%83%9F%E3%82%B9%E3%83%88%E3%83%AB%E3%83%BC%E3%83%88"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "音楽",
      favorites: sortBy([
        {
          name: "supercell",
          href: "http://www.supercell.jp/"
        },
        {
          name: "ClariS",
          href: "http://www.clarismusic.jp/"
        },
        {
          name: "LiSA",
          href: "http://www.lxixsxa.com/"
        },
        {
          name: "cosMo@暴走P",
          href: "http://chemsys.cc/"
        },
        {
          name: "キノシタ",
          href: "https://www.youtube.com/channel/UCvy_1uRgNNu-h3JJCJOGfpw"
        },
        {
          name: "SawanoHiroyuki[nZk]",
          href: "http://www.sh-nzk.net/"
        },
        {
          name: "TrySail",
          href: "https://trysail.jp/"
        },
        {
          name: "new generations",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"
        },
        {
          name: "乙女ストーム！",
          href: "https://dic.pixiv.net/a/%E4%B9%99%E5%A5%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%A0%21"
        },
        {
          name: "40meterP",
          href: "https://www.youtube.com/channel/UCG09qajPDZdPtLsTkW7mJQA"
        },
        {
          name: "YuNi",
          href: "https://www.youtube.com/channel/UCHTnX0CSX_KObo5I9WuZ64g"
        },
        {
          name: "三月のパンタシア",
          href: "http://www.phantasia.jp/"
        },
        {
          name: "DECO*27",
          href: "http://deco27.com/"
        },
        {
          name: "Kizuna AI",
          href: "https://www.youtube.com/channel/UC4YaOt1yT-ZeyB0OmxHgolA"
        },
        {
          name: "individuals",
          // tslint:disable-next-line:max-line-length
          href: "https://dic.pixiv.net/a/%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B4%E3%82%A3%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB%E3%82%BA"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "イラスト・漫画",
      favorites: sortBy([
        {
          name: "三嶋くろね",
          href: "http://shiropro.com/"
        },
        {
          name: "りんごくらぶ",
          href: "https://twitter.com/000apple"
        },
        {
          name: "佐倉おりこ",
          href: "https://www.sakuraoriko.com/"
        },
        {
          name: "杏仁豆腐",
          href: "https://www.pixiv.net/member.php?id=16630"
        },
        {
          name: "ミカ ピカゾ",
          href: "https://www.pixiv.net/member.php?id=1039353"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },
    {
      name: "プレイリスト",
      favorites: sortBy([
        {
          name: "VOCALOID - YouTube",
          href: "https://www.youtube.com/playlist?list=PL2t1NYPsZqCOxjK1fpOOREWM9az9xtzOE"
        },
        {
          name: "Cover - YouTube",
          href: "https://www.youtube.com/playlist?list=PL2t1NYPsZqCNXqdCIdv3t7rHmvrR8b5Cl"
        },
        {
          name: "SoundCloud",
          href: "https://soundcloud.com/mikazuki_f/likes"
        },
        {
          name: "VOCALOID - niconico",
          href: "http://www.nicovideo.jp/mylist/61087753"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    },

    {
      name: "おすすめレシピ",
      favorites: sortBy([
        {
          name: "油淋鶏",
          href: "https://cookpad.com/recipe/2071626"
        },
        {
          name: "塩から揚げ",
          href: "https://cookpad.com/recipe/2211260"
        },
        {
          name: "豆腐ハンバーグ",
          href: "https://cookpad.com/recipe/1808874"
        },
        {
          name: "ジャーマンポテト",
          href: "https://cookpad.com/recipe/2078143"
        },
        {
          name: "プリン",
          href: "https://cookpad.com/recipe/723942"
        }
      ] as IFavorite[], (w: IFavorite) => w.name.toLocaleLowerCase())
    }
  ]
};

export {
  favorites
};
